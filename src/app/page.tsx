'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { PageTransition } from '@/components/animations/page-transition';
import { SlideUp } from '@/components/animations/slide-up';
import { ThemeSelector } from '@/components/theme-selector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Heart, Star, Users } from 'lucide-react';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <FadeIn>
                <h1 className="text-2xl font-bold text-foreground">
                  Home Massage Platform
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <ThemeSelector />
              </FadeIn>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <SlideUp>
                <h2 className="text-4xl font-bold text-foreground">
                  Professional Massage Services
                  <span className="text-primary"> at Your Home</span>
                </h2>
              </SlideUp>
              
              <FadeIn delay={200}>
                <p className="text-lg text-muted-foreground">
                  Connect with certified massage therapists in your area. 
                  Book appointments, read reviews, and enjoy professional 
                  massage services in the comfort of your own home.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Find Masseurs
                  </Button>
                  <Button variant="outline" size="lg">
                    Become a Masseur
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeIn delay={300}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Wellness Focus</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Professional massage therapy focused on your wellness and relaxation.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={400}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Trusted Professionals</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      All masseurs are verified professionals with proper certifications.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={500}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Quality Guaranteed</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Read reviews and ratings from other customers before booking.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={600}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Flexible Scheduling</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Book appointments that fit your schedule, available 7 days a week.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>

          {/* Stats Section */}
          <FadeIn delay={700}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Professional Masseurs</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                  <p className="text-muted-foreground">Average Rating</p>
                </CardContent>
              </Card>
        </div>
          </FadeIn>
      </main>
    </div>
    </PageTransition>
  );
}
