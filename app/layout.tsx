import "./globals.css";
import { Inter } from "next/font/google";
import SupabaseProvider from "@/supabase/supabase-provider";

import getSupabaseUser from "./utils/supabase-accessors/supabase-user";
import supabaseServerClient from "./utils/supabase-accessors/server-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OverPass",
  description: "AI-generated creative solutions for creative teams",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSupabaseUser(supabaseServerClient());

  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        {/* <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main> */}
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
