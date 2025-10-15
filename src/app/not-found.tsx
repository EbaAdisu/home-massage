import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Home, MessageCircle, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
      <FadeIn delay={300}>
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-4">
            <SlideUp delay={400}>
              <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="w-12 h-12 text-primary" />
              </div>
            </SlideUp>
            
            <SlideUp delay={500}>
              <CardTitle className="text-4xl font-bold">404</CardTitle>
            </SlideUp>
            
            <SlideUp delay={600}>
              <CardDescription className="text-lg">
                Oops! This page seems to have wandered off for a massage.
              </CardDescription>
            </SlideUp>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <SlideUp delay={700}>
              <div className="text-center space-y-2">
                <p className="text-muted-foreground">
                  The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <p className="text-sm text-muted-foreground">
                  Don&apos;t worry, our masseurs are still here to help you relax!
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={800}>
              <div className="flex flex-col space-y-3">
                <Button asChild className="w-full">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
                
                <Button variant="outline" asChild className="w-full">
                  <Link href="javascript:history.back()">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go Back
                  </Link>
                </Button>
              </div>
            </SlideUp>

            <SlideUp delay={900}>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Need help finding what you&apos;re looking for?
                </p>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </SlideUp>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
