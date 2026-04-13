-- ==========================================================
-- Netanya Civil Emergency – Database Schema
-- Run in Supabase SQL Editor:
-- https://supabase.com/dashboard/project/bqgnzbkkuvkuiqxhwdbo/sql/new
-- ==========================================================

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  page TEXT NOT NULL,          -- 'contacts', 'teams', 'mashe', 'scripts', 'faq'
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  sort_order INT NOT NULL DEFAULT 0,
  parent_id TEXT               -- category grouping (e.g. 'מטה מכלול', 'רובעים')
);

-- Password-protected RPC to fetch contacts (SECURITY DEFINER bypasses RLS)
CREATE OR REPLACE FUNCTION get_contacts(pass TEXT)
RETURNS TABLE(
  id INT,
  page TEXT,
  name TEXT,
  role TEXT,
  phone TEXT,
  sort_order INT,
  parent_id TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF pass = 'ADMIN' THEN
    RETURN QUERY SELECT c.id, c.page, c.name, c.role, c.phone, c.sort_order, c.parent_id
    FROM public.contacts c
    ORDER BY c.page, c.sort_order;
  ELSE
    RAISE EXCEPTION 'Invalid password';
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION get_contacts(TEXT) TO anon, authenticated, public;

-- Incidents table (for /report and / dashboard)
CREATE TABLE IF NOT EXISTS incidents (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  address TEXT,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  status TEXT DEFAULT 'open',
  reporter_phone TEXT
);

-- Incident updates
CREATE TABLE IF NOT EXISTS incident_updates (
  id SERIAL PRIMARY KEY,
  incident_id INT REFERENCES incidents(id),
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  author_name TEXT
);

-- Contact categories used in the phone book page:
-- מטה מכלול, צוותי התערבות, רובעים, מס"ר, מטה מל"מ, מטה רגשי,
-- קו פתוח, קישור בתי חולים, מטה חללים, אוכלוסיות מיוחדות,
-- קליטת אוכלוסייה, תפעול ומתנדבים, אזרחים ותיקים, קליטת עלייה,
-- תיירות, בריאות, ט.ל.י.ה, גורמי חוץ
--
-- Each page has its own subset of contacts:
-- 'contacts' — full phone book (~61 contacts)
-- 'teams'    — key coordinators shown on teams page (~6 contacts)
-- 'mashe'    — emotional support contacts (~6)
-- 'scripts'  — intervention contacts (~6)
-- 'faq'      — support/info contacts (~6)
