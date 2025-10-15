import { FadeIn } from '@/components/animations/fade-in';
import { PageTransition } from '@/components/animations/page-transition';
import { DashboardHeader } from '@/components/layout/dashboard-header';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        <DashboardHeader />
        <div className="flex">
          <DashboardSidebar />
          <main className="flex-1 p-6">
            <FadeIn delay={200}>{children}</FadeIn>
          </main>
        </div>
      </div>
    </PageTransition>
  );
}
