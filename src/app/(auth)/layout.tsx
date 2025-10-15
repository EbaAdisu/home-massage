import { FadeIn } from '@/components/animations/fade-in';
import { PageTransition } from '@/components/animations/page-transition';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      <div className="from-background to-muted/20 flex min-h-screen items-center justify-center bg-gradient-to-br p-4">
        <FadeIn delay={200}>
          <div className="w-full max-w-md">{children}</div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
