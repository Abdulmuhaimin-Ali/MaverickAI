// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mftgmyvcqyjgquetnbql.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your actual anon key

export const supabase = createClient(supabaseUrl, supabaseKey);