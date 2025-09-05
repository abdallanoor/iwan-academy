import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <main>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </main>
  );
}
