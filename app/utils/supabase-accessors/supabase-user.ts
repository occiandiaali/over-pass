import { SupabaseClient } from "@supabase/supabase-js";

const getSupabaseUser = async (client: SupabaseClient<any, "public", any>) => {
  const { data, error } = await client.auth.getUser();
  if (error) {
    console.log("Client accessor err: ", error);
    return null;
  }
  const { data: userData, error: userError } = await client
    .from("profiles")
    .select("*")
    .eq("id", data.user.id);
  if (userError) {
    console.log("GetUser userError: ", userError);
    return null;
  }
  return userData[0];
};

export default getSupabaseUser;
