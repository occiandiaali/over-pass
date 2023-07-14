// import { createClient, SupabaseClient } from "@supabase/supabase-js";
// import {
//   createPagesBrowserClient,
//   createServerComponentClient,
// } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// function supabaseClientInit() {
//   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
//   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
//   const supabase = createClient(supabaseUrl, supabaseKey);
//   return supabase || "Undefined client";
// }

// const useSupaClient = supabaseClientInit();

// const supabaseBrowserClient = createPagesBrowserClient();

// const supabaseServerClient = () =>
//   createServerComponentClient({
//     cookies,
//   });

// const getUser = async (client: SupabaseClient<any, "public", any>) => {
//   const { data, error } = await client.auth.getUser();
//   if (error) {
//     console.log("Client accessor err: ", error);
//     return null;
//   }
//   const { data: userData, error: userError } = await client
//     .from("profiles")
//     .select("*")
//     .eq("id", data.user.id);
//   if (userError) {
//     console.log("GetUser userError: ", userError);
//     return null;
//   }
//   return userData[0];
// };

// export { getUser, useSupaClient, supabaseBrowserClient, supabaseServerClient };
