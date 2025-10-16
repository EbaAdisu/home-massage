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
        <div className="bg-background flex min-h-screen">
          <DashboardSidebar />
          <SidebarInset>
            <DashboardHeader />
            <main className="flex-1 p-6">
              <FadeIn delay={200}>{children}</FadeIn>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </PageTransition>
  );
}
