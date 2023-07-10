import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OverPass",
  description: "AI-generated creative solutions for creative teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        {/* <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main> */}
        {children}
      </body>
    </html>
  );
}
