import { FadeIn } from '@/components/animations/fade-in';
import { PageTransition } from '@/components/animations/page-transition';
import { DashboardHeader } from '@/components/layout/dashboard-header';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      <SidebarProvider>
        <div className="bg-background min-h-screen">
          <DashboardHeader />
          <div className="flex">
            <DashboardSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <div className="ml-auto" />
              </header>
              <main className="flex-1 p-6">
                <FadeIn delay={200}>{children}</FadeIn>
              </main>
            </SidebarInset>
          </div>
        </div>
      </SidebarProvider>
    </PageTransition>
  );
}
