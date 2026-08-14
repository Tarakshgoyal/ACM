import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import fullData from "@/lib/sih_full_data.json";

export async function POST(request: NextRequest) {
  // Verify seed secret
  const secret = request.headers.get("x-seed-secret");
  if (secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sql = getDb();

  try {
    // Create tables
    await sql`
      CREATE TABLE IF NOT EXISTS problem_statements (
        id SERIAL PRIMARY KEY,
        year INTEGER NOT NULL,
        ps_id VARCHAR(20) NOT NULL,
        title TEXT NOT NULL,
        organization TEXT NOT NULL,
        category VARCHAR(20) NOT NULL,
        theme VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        tsv tsvector,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(year, ps_id)
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS winning_entries (
        id SERIAL PRIMARY KEY,
        year INTEGER NOT NULL,
        ps_id VARCHAR(20) NOT NULL,
        team_name TEXT NOT NULL,
        leader_name TEXT NOT NULL,
        institute_name TEXT NOT NULL,
        winning_status VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Create indexes
    await sql`
      CREATE INDEX IF NOT EXISTS idx_ps_tsv ON problem_statements USING GIN(tsv)
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_ps_year ON problem_statements(year)
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_ps_theme ON problem_statements(theme)
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_win_psid ON winning_entries(ps_id, year)
    `;

    // Clear existing data for idempotent seeding
    await sql`DELETE FROM winning_entries`;
    await sql`DELETE FROM problem_statements`;

    const allProblems = fullData.problemStatements;
    
    // Batch insert problem statements to avoid huge query string length
    const psBatches = [];
    for (let i = 0; i < allProblems.length; i += 50) {
      psBatches.push(allProblems.slice(i, i + 50));
    }
    
    for (const batch of psBatches) {
       for (const ps of batch) {
          await sql`
            INSERT INTO problem_statements (year, ps_id, title, organization, category, theme, description, tsv)
            VALUES (
              ${ps.year}, ${ps.ps_id}, ${ps.title}, ${ps.organization}, ${ps.category}, ${ps.theme}, ${ps.description},
              to_tsvector('english', ${ps.title} || ' ' || ${ps.organization} || ' ' || ${ps.theme} || ' ' || ${ps.description} || ' ' || ${ps.ps_id} || ' ' || ${ps.category})
            )
          `;
       }
    }

    // Batch insert winners
    const allWinners = fullData.winners;
    const winBatches = [];
    for (let i = 0; i < allWinners.length; i += 50) {
      winBatches.push(allWinners.slice(i, i + 50));
    }

    for (const batch of winBatches) {
        for (const w of batch) {
          await sql`
            INSERT INTO winning_entries (year, ps_id, team_name, leader_name, institute_name, winning_status)
            VALUES (${w.year}, ${w.ps_id}, ${w.team_name}, ${w.leader_name}, ${w.institute_name}, ${w.winning_status})
          `;
        }
    }

    return NextResponse.json({
      success: true,
      seeded: {
        problemStatements: allProblems.length,
        winners: allWinners.length,
      },
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Seeding failed", details: String(error) },
      { status: 500 }
    );
  }
}
