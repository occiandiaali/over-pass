import { createClient } from "@supabase/supabase-js";

function supabaseClientInit() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const supabase = createClient(supabaseUrl, supabaseKey);
  return supabase || "Undefined client";
}

const useSupaClient = supabaseClientInit();

export default useSupaClient;
