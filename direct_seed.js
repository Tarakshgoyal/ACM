const fs = require('fs');
const { neon } = require('@neondatabase/serverless');

// Read the .env.local file to get the DATABASE_URL manually since dotenv might not be installed
const envFile = fs.readFileSync('.env.local', 'utf8');
const dbUrlMatch = envFile.match(/DATABASE_URL=(.+)/);
if (!dbUrlMatch) {
  console.error('DATABASE_URL not found in .env.local');
  process.exit(1);
}

const DATABASE_URL = dbUrlMatch[1];
const sql = neon(DATABASE_URL);
const fullData = require('./src/lib/sih_full_data.json');

async function seed() {
  try {
    console.log('Creating tables and indexes...');
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

    await sql`CREATE INDEX IF NOT EXISTS idx_ps_tsv ON problem_statements USING GIN(tsv)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_ps_year ON problem_statements(year)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_ps_theme ON problem_statements(theme)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_win_psid ON winning_entries(ps_id, year)`;

    console.log('Clearing old data...');
    await sql`DELETE FROM winning_entries`;
    await sql`DELETE FROM problem_statements`;

    console.log(`Seeding ${fullData.problemStatements.length} problem statements...`);
    for (let i = 0; i < fullData.problemStatements.length; i += 20) {
      const batch = fullData.problemStatements.slice(i, i + 20);
      for (const ps of batch) {
        await sql`
          INSERT INTO problem_statements (year, ps_id, title, organization, category, theme, description, tsv)
          VALUES (
            ${ps.year}, ${ps.ps_id}, ${ps.title}, ${ps.organization}, ${ps.category}, ${ps.theme}, ${ps.description},
            to_tsvector('english', ${ps.title} || ' ' || ${ps.organization} || ' ' || ${ps.theme} || ' ' || ${ps.description} || ' ' || ${ps.ps_id} || ' ' || ${ps.category})
          )
        `;
      }
      process.stdout.write(`.` );
    }

    console.log(`\nSeeding ${fullData.winners.length} winners...`);
    for (let i = 0; i < fullData.winners.length; i += 20) {
      const batch = fullData.winners.slice(i, i + 20);
      for (const w of batch) {
        await sql`
          INSERT INTO winning_entries (year, ps_id, team_name, leader_name, institute_name, winning_status)
          VALUES (${w.year}, ${w.ps_id}, ${w.team_name}, ${w.leader_name}, ${w.institute_name}, ${w.winning_status})
        `;
      }
      process.stdout.write(`.` );
    }

    console.log('\n✅ Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

seed();
