import { getDb } from "./db";
import { callOpenRouter } from "./openrouter";

interface ProblemStatement {
  id: number;
  year: number;
  ps_id: string;
  title: string;
  organization: string;
  category: string;
  theme: string;
  description: string;
}

interface WinningEntry {
  id: number;
  year: number;
  ps_id: string;
  team_name: string;
  leader_name: string;
  institute_name: string;
  winning_status: string;
}

interface RetrievedContext {
  problemStatements: ProblemStatement[];
  winners: WinningEntry[];
}

/**
 * Extract potential filters from a user query.
 * Detects year mentions, PS IDs, and organization/theme keywords.
 */
function extractFilters(query: string): {
  years: number[];
  psIds: string[];
  searchTerms: string;
} {
  const years: number[] = [];
  const psIds: string[] = [];

  // Detect years
  const yearMatches = query.match(/\b(2024|2025)\b/g);
  if (yearMatches) {
    years.push(...yearMatches.map(Number));
  }

  // Detect PS IDs (e.g., SIH1524, PS-1524, etc.)
  const psIdMatches = query.match(/\b(?:SIH|PS[-\s]?)(\d{2,6})\b/gi);
  if (psIdMatches) {
    psIds.push(...psIdMatches.map((m) => m.toUpperCase().replace(/[-\s]/g, "")));
  }

  // Clean query for full-text search: remove years and PS IDs
  let searchTerms = query
    .replace(/\b(2024|2025)\b/g, "")
    .replace(/\b(?:SIH|PS[-\s]?)\d{2,6}\b/gi, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // If search terms are very short after cleaning, use original query
  if (searchTerms.length < 3) {
    searchTerms = query.replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  return { years, psIds, searchTerms };
}

/**
 * Convert a search string to a Postgres tsquery-compatible string.
 * Joins words with & (AND) operator for tighter matching.
 */
function toTsQuery(text: string): string {
  const words = text
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 2)
    // Remove common stop words
    .filter(
      (w) =>
        ![
          "the",
          "and",
          "for",
          "are",
          "was",
          "were",
          "been",
          "have",
          "has",
          "had",
          "from",
          "this",
          "that",
          "with",
          "which",
          "what",
          "show",
          "give",
          "tell",
          "about",
          "any",
          "all",
          "some",
          "problem",
          "statements",
          "statement",
          "problems",
          "can",
          "you",
          "please",
          "list",
          "find",
          "search",
          "get",
          "sih",
          "smart",
          "india",
          "hackathon",
        ].includes(w)
    );

  if (words.length === 0) return "";

  // Use OR between words for broader matching
  return words.map((w) => `${w}:*`).join(" | ");
}

/**
 * Retrieve relevant SIH data from the database using full-text search + filters.
 */
async function retrieveContext(query: string): Promise<RetrievedContext> {
  const sql = getDb();
  const { years, psIds, searchTerms } = extractFilters(query);
  const tsQuery = toTsQuery(searchTerms);

  const problemStatements: ProblemStatement[] = [];
  const winners: WinningEntry[] = [];

  try {
    // Strategy 1: If specific PS IDs were mentioned, fetch those directly
    if (psIds.length > 0) {
      const psResults = await sql`
        SELECT * FROM problem_statements 
        WHERE UPPER(ps_id) = ANY(${psIds})
        LIMIT 10
      `;
      problemStatements.push(...(psResults as unknown as ProblemStatement[]));

      const winResults = await sql`
        SELECT * FROM winning_entries 
        WHERE UPPER(ps_id) = ANY(${psIds})
        LIMIT 10
      `;
      winners.push(...(winResults as unknown as WinningEntry[]));
    }

    // Strategy 2: Full-text search with optional year filter
    if (tsQuery && problemStatements.length < 8) {
      const remaining = 8 - problemStatements.length;
      const existingIds = problemStatements.map((p) => p.id);

      let ftsResults;
      if (years.length > 0) {
        ftsResults = await sql`
          SELECT *, ts_rank(tsv, to_tsquery('english', ${tsQuery})) AS rank
          FROM problem_statements
          WHERE tsv @@ to_tsquery('english', ${tsQuery})
            AND year = ANY(${years})
            AND (${existingIds.length === 0} OR id != ALL(${existingIds}))
          ORDER BY rank DESC
          LIMIT ${remaining}
        `;
      } else {
        ftsResults = await sql`
          SELECT *, ts_rank(tsv, to_tsquery('english', ${tsQuery})) AS rank
          FROM problem_statements
          WHERE tsv @@ to_tsquery('english', ${tsQuery})
            AND (${existingIds.length === 0} OR id != ALL(${existingIds}))
          ORDER BY rank DESC
          LIMIT ${remaining}
        `;
      }
      problemStatements.push(...(ftsResults as unknown as ProblemStatement[]));
    }

    // Strategy 3: If we still have few results, try ILIKE as fallback
    if (problemStatements.length < 3 && searchTerms.length > 2) {
      const remaining = 5 - problemStatements.length;
      const existingIds = problemStatements.map((p) => p.id);
      const likePattern = `%${searchTerms.split(" ")[0]}%`;

      let likeResults;
      if (years.length > 0) {
        likeResults = await sql`
          SELECT * FROM problem_statements
          WHERE (title ILIKE ${likePattern} OR description ILIKE ${likePattern} 
                 OR theme ILIKE ${likePattern} OR organization ILIKE ${likePattern})
            AND year = ANY(${years})
            AND (${existingIds.length === 0} OR id != ALL(${existingIds}))
          LIMIT ${remaining}
        `;
      } else {
        likeResults = await sql`
          SELECT * FROM problem_statements
          WHERE (title ILIKE ${likePattern} OR description ILIKE ${likePattern} 
                 OR theme ILIKE ${likePattern} OR organization ILIKE ${likePattern})
            AND (${existingIds.length === 0} OR id != ALL(${existingIds}))
          LIMIT ${remaining}
        `;
      }
      problemStatements.push(...(likeResults as unknown as ProblemStatement[]));
    }

    // Fetch winners for any retrieved problem statements
    if (problemStatements.length > 0 && winners.length === 0) {
      const psIdsToSearch = problemStatements.map((p) => p.ps_id);
      const winResults = await sql`
        SELECT * FROM winning_entries 
        WHERE ps_id = ANY(${psIdsToSearch})
        LIMIT 20
      `;
      winners.push(...(winResults as unknown as WinningEntry[]));
    }
  } catch (error) {
    console.error("Retrieval error:", error);
    // Return empty results on error rather than crashing
  }

  return { problemStatements, winners };
}

/**
 * Build context string from retrieved data.
 */
function buildContextString(context: RetrievedContext): string {
  if (
    context.problemStatements.length === 0 &&
    context.winners.length === 0
  ) {
    return "No relevant SIH data found in the database for this query.";
  }

  let contextStr = "";

  if (context.problemStatements.length > 0) {
    contextStr += "=== RETRIEVED PROBLEM STATEMENTS ===\n\n";
    for (const ps of context.problemStatements) {
      contextStr += `PS ID: ${ps.ps_id}\n`;
      contextStr += `Year: SIH ${ps.year}\n`;
      contextStr += `Title: ${ps.title}\n`;
      contextStr += `Organization: ${ps.organization}\n`;
      contextStr += `Category: ${ps.category}\n`;
      contextStr += `Theme: ${ps.theme}\n`;
      contextStr += `Description: ${ps.description}\n`;
      contextStr += `---\n\n`;
    }
  }

  if (context.winners.length > 0) {
    contextStr += "=== WINNING ENTRIES ===\n\n";
    for (const w of context.winners) {
      contextStr += `PS ID: ${w.ps_id}\n`;
      contextStr += `Year: SIH ${w.year}\n`;
      contextStr += `Team: ${w.team_name}\n`;
      contextStr += `Leader: ${w.leader_name}\n`;
      contextStr += `Institute: ${w.institute_name}\n`;
      contextStr += `Status: ${w.winning_status}\n`;
      contextStr += `---\n\n`;
    }
  }

  return contextStr;
}

const SYSTEM_PROMPT = `You are the UPES ACM SIH Assistant — a helpful chatbot that answers questions about Smart India Hackathon (SIH) problem statements and winners from 2024 and 2025.

RULES:
1. Answer ONLY based on the retrieved context provided below. Do NOT invent or hallucinate problem statements, winners, or solutions.
2. If the retrieved context contains relevant information, present it clearly with PS IDs, titles, organizations, themes, and winner details.
3. If no relevant data is found, say so honestly: "I don't have information about that in my database."
4. Keep answers concise and well-formatted using short paragraphs or bullet points.
5. When listing problem statements, always include the PS ID and year.
6. When mentioning winners, include team name, leader, and institute.
7. You can also answer general questions about SIH (what it is, how to participate, themes, etc.) based on your general knowledge.
8. Be friendly and helpful. You represent UPES ACM Student Chapter.
9. Do not answer questions completely unrelated to SIH or academic hackathons.`;

/**
 * Main RAG pipeline: retrieve context → build prompt → call LLM.
 */
export async function ragChat(
  userMessage: string,
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>
): Promise<string> {
  // Retrieve relevant context
  const context = await retrieveContext(userMessage);
  const contextString = buildContextString(context);

  // Build message array
  const messages: Array<{
    role: "system" | "user" | "assistant";
    content: string;
  }> = [
    {
      role: "system",
      content: `${SYSTEM_PROMPT}\n\n--- RETRIEVED CONTEXT ---\n${contextString}`,
    },
  ];

  // Add last 4 conversation messages for context (keep it short)
  const recentHistory = conversationHistory.slice(-4);
  for (const msg of recentHistory) {
    messages.push({ role: msg.role, content: msg.content });
  }

  // Add current user message
  messages.push({ role: "user", content: userMessage });

  // Call LLM
  try {
    const response = await callOpenRouter(messages);
    return response;
  } catch (error) {
    console.error("LLM call failed:", error);

    // Fallback: return retrieval results directly without LLM
    if (context.problemStatements.length > 0) {
      let fallback =
        "⚠️ AI generation is temporarily unavailable, but here are the matching results from our database:\n\n";
      for (const ps of context.problemStatements) {
        fallback += `**${ps.ps_id}** (${ps.year}) — ${ps.title}\n`;
        fallback += `Organization: ${ps.organization} | Theme: ${ps.theme}\n`;
        fallback += `${ps.description.substring(0, 200)}...\n\n`;
      }
      return fallback;
    }

    return "I'm sorry, I'm having trouble processing your request right now. Please try again in a moment.";
  }
}
