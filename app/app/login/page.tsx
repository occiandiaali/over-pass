import LoginLinkComponent from "@/components/LoginLinkComponent";
import getSupabaseUser from "@/app/utils/supabase-accessors/supabase-user";
import supabaseServerClient from "@/app/utils/supabase-accessors/server-client";

export default async function login() {
  // get user session from supabase, set to session.user if exists
  const user = await getSupabaseUser(supabaseServerClient());

  return (
    <div>
      <LoginLinkComponent user={user} />
    </div>
  );
}
