import { FadeIn } from '@/components/animations/fade-in';
import { PageTransition } from '@/components/animations/page-transition';
import { DashboardHeader } from '@/components/layout/dashboard-header';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      <SidebarProvider>
        <div className="bg-background flex min-h-screen w-full">
          <DashboardSidebar />
          <SidebarInset className="flex-1">
            <DashboardHeader />
            <main className="flex-1 overflow-auto p-6">
              <FadeIn delay={200}>{children}</FadeIn>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </PageTransition>
  );
}
