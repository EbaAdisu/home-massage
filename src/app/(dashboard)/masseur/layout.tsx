import { FadeIn } from '@/components/animations/fade-in';
import { PageTransition } from '@/components/animations/page-transition';

export default function MasseurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <FadeIn delay={200}>
          <div className="container mx-auto p-6">
            {children}
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
