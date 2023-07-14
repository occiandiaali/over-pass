"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import supabaseBrowserClient from "@/app/utils/supabase-accessors/browser-client";

const Context = createContext(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => supabaseBrowserClient);
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh;
    });
    return () => subscription.unsubscribe();
  }, [router, supabase]);

  return (
    // [TODO]: Fix this type assertion!
    <Context.Provider value={{ supabase } as any}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider!");
  }
  return context;
};
