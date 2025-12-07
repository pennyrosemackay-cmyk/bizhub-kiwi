// lib/supabaseClient.js — 100% safe version (no build-time execution)
import { createClient } from '@supabase/supabase-js';

let supabaseClient = null;

if (typeof window !== 'undefined') {
  // Only run in the browser — never during build
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
}

export default supabaseClient || {
  // Fake client during build so nothing crashes
  from: () => ({
    select: () => ({ then: () => {} }),
    insert: () => ({ then: () => {} }),
  }),
};
