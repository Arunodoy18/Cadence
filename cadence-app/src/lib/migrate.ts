import { neon } from '@neondatabase/serverless';

async function migrate() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('DATABASE_URL is not set');
    process.exit(1);
  }

  const sql = neon(databaseUrl);

  console.log('Running migrations against Neon Postgres...');

  // Run each statement using tagged template
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`;
    console.log('  ✓ pgcrypto extension');
  } catch (e: any) { console.log('  ~ pgcrypto already exists'); }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email         text UNIQUE,
        name          text,
        password_hash text,
        auth_provider text,
        plan          text DEFAULT 'free',
        native_lang   text DEFAULT 'en',
        created_at    timestamptz DEFAULT now()
      )
    `;
    console.log('  ✓ users table');
  } catch (e: any) { console.error('  ✗ users:', e.message); }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS enrollments (
        id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id       uuid REFERENCES users(id) ON DELETE CASCADE,
        lang          text,
        cefr_level    text DEFAULT 'A1',
        goal          text,
        created_at    timestamptz DEFAULT now()
      )
    `;
    console.log('  ✓ enrollments table');
  } catch (e: any) { console.error('  ✗ enrollments:', e.message); }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS review_items (
        id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        enrollment_id uuid REFERENCES enrollments(id) ON DELETE CASCADE,
        term          text,
        definition    text,
        stability     real DEFAULT 0,
        difficulty    real DEFAULT 0,
        due_at        timestamptz DEFAULT now(),
        reps          int DEFAULT 0
      )
    `;
    console.log('  ✓ review_items table');
  } catch (e: any) { console.error('  ✗ review_items:', e.message); }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS attempts (
        id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id       uuid REFERENCES users(id) ON DELETE CASCADE,
        item_id       uuid REFERENCES review_items(id) ON DELETE SET NULL,
        lang          text,
        activity      text,
        correct       bool,
        score         real,
        latency_ms    int,
        hints_used    int,
        created_at    timestamptz DEFAULT now()
      )
    `;
    console.log('  ✓ attempts table');
  } catch (e: any) { console.error('  ✗ attempts:', e.message); }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS milestones (
        id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        enrollment_id uuid REFERENCES enrollments(id) ON DELETE CASCADE,
        key           text,
        earned_at     timestamptz DEFAULT now()
      )
    `;
    console.log('  ✓ milestones table');
  } catch (e: any) { console.error('  ✗ milestones:', e.message); }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id             uuid REFERENCES users(id) ON DELETE CASCADE,
        provider            text,
        status              text,
        trial_ends_at       timestamptz,
        current_period_end  timestamptz
      )
    `;
    console.log('  ✓ subscriptions table');
  } catch (e: any) { console.error('  ✗ subscriptions:', e.message); }

  // Indexes
  const indexes = [
    'CREATE INDEX IF NOT EXISTS idx_enrollments_user ON enrollments(user_id)',
    'CREATE INDEX IF NOT EXISTS idx_review_items_enrollment ON review_items(enrollment_id)',
    'CREATE INDEX IF NOT EXISTS idx_review_items_due ON review_items(due_at)',
    'CREATE INDEX IF NOT EXISTS idx_attempts_user ON attempts(user_id)',
    'CREATE INDEX IF NOT EXISTS idx_attempts_item ON attempts(item_id)',
    'CREATE INDEX IF NOT EXISTS idx_milestones_enrollment ON milestones(enrollment_id)',
    'CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON subscriptions(user_id)',
  ];

  for (const idx of indexes) {
    try {
      await sql.query(idx);
      console.log(`  ✓ ${idx.substring(36, 80)}`);
    } catch (e: any) { console.error(`  ✗ index: ${e.message}`); }
  }

  // Verify tables
  const tables = await sql`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name`;
  console.log('\nTables in database:');
  tables.forEach((t: any) => console.log(`  • ${t.table_name}`));
}

migrate().catch(console.error);
