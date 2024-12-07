import { SUPABASE_PROJECT_ID, SUPABASE_ANON_KEY } from '$env/static/private';
import type { Database } from './supabase.model';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient<Database>(
  `https://${SUPABASE_PROJECT_ID}.supabase.co`,
  SUPABASE_ANON_KEY,
);
