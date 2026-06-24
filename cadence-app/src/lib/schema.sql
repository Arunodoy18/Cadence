-- Cadence database schema
-- Run against Neon Postgres

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users
CREATE TABLE IF NOT EXISTS users (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email         text UNIQUE,
  name          text,
  password_hash text,
  auth_provider text,          -- google | apple | email
  plan          text DEFAULT 'free',   -- free | plus
  native_lang   text DEFAULT 'en',
  created_at    timestamptz DEFAULT now()
);

-- Enrollments — one per language a user studies
CREATE TABLE IF NOT EXISTS enrollments (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid REFERENCES users(id) ON DELETE CASCADE,
  lang          text,          -- es | fr | ja ...
  cefr_level    text DEFAULT 'A1',
  goal          text,          -- travel | family | work ...
  created_at    timestamptz DEFAULT now()
);

-- Review items — the FSRS heart of the adaptive engine
CREATE TABLE IF NOT EXISTS review_items (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id uuid REFERENCES enrollments(id) ON DELETE CASCADE,
  term          text,          -- the word / skill
  definition    text,
  stability     real DEFAULT 0,
  difficulty    real DEFAULT 0,
  due_at        timestamptz DEFAULT now(),
  reps          int DEFAULT 0
);

-- Attempts — the ML training log (append-only)
CREATE TABLE IF NOT EXISTS attempts (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid REFERENCES users(id) ON DELETE CASCADE,
  item_id       uuid REFERENCES review_items(id) ON DELETE SET NULL,
  lang          text,
  activity      text,          -- lesson | convo | pronounce | review
  correct       bool,
  score         real,          -- e.g. pronunciation %
  latency_ms    int,
  hints_used    int,
  created_at    timestamptz DEFAULT now()
);

-- Milestones — real-world achievements (the gamification)
CREATE TABLE IF NOT EXISTS milestones (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id uuid REFERENCES enrollments(id) ON DELETE CASCADE,
  key           text,
  earned_at     timestamptz DEFAULT now()
);

-- Subscriptions — mirrors Stripe/Razorpay
CREATE TABLE IF NOT EXISTS subscriptions (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             uuid REFERENCES users(id) ON DELETE CASCADE,
  provider            text,
  status              text,
  trial_ends_at       timestamptz,
  current_period_end  timestamptz
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_enrollments_user ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_review_items_enrollment ON review_items(enrollment_id);
CREATE INDEX IF NOT EXISTS idx_review_items_due ON review_items(due_at);
CREATE INDEX IF NOT EXISTS idx_attempts_user ON attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_item ON attempts(item_id);
CREATE INDEX IF NOT EXISTS idx_milestones_enrollment ON milestones(enrollment_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON subscriptions(user_id);
