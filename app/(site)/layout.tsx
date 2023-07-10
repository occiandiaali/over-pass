import "../globals.css";
import DashboardLayout from "@/components/layouts/DashboardLayout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
