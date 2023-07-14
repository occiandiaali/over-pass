import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabaseServerClient = () =>
  createServerComponentClient({
    cookies,
  });

export default supabaseServerClient;
