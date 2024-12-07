import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';
import type { Database } from './supabase.model';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
);
