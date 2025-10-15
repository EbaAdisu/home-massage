'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { HoverLift } from '@/components/animations/hover-lift';
import { PageTransition } from '@/components/animations/page-transition';
import { SlideUp } from '@/components/animations/slide-up';
import { StaggerChildren } from '@/components/animations/stagger-children';
import { ThemeSelector } from '@/components/theme-selector';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

export default function Home() {
  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        {/* Header */}
        <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <FadeIn>
                <div className="flex items-center gap-2">
                  <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
                    <Heart className="text-primary-foreground h-5 w-5" />
                  </div>
                  <h1 className="text-foreground text-2xl font-bold">
                    MassageAtHome
                  </h1>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <ThemeSelector />
              </FadeIn>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              {/* Hero Content */}
              <div className="space-y-8">
                <FadeIn>
                  <Badge variant="secondary" className="mb-4">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Professional Massage Therapy
                  </Badge>
                </FadeIn>

                <SlideUp>
                  <h2 className="text-foreground text-5xl leading-tight font-bold lg:text-6xl">
                    Relax & Rejuvenate
                    <span className="text-primary block">at Home</span>
                  </h2>
                </SlideUp>

                <FadeIn delay={200}>
                  <p className="text-muted-foreground text-xl leading-relaxed">
                    Connect with certified massage therapists in your area. Book
                    appointments, read reviews, and enjoy professional massage
                    services in the comfort of your own home.
                  </p>
                </FadeIn>

                <StaggerChildren delay={400}>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-300 hover:scale-105"
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      Find Masseurs Near You
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="transform transition-all duration-300 hover:scale-105"
                    >
                      <Users className="mr-2 h-5 w-5" />
                      Become a Masseur
                    </Button>
                  </div>
                </StaggerChildren>

                <FadeIn delay={600}>
                  <div className="text-muted-foreground flex items-center gap-6 text-sm">
                    <div className="hover:text-primary flex transform cursor-pointer items-center gap-2 transition-colors duration-300 hover:scale-105">
                      <CheckCircle className="text-primary h-4 w-4" />
                      <span>Licensed Professionals</span>
                    </div>
                    <div className="hover:text-primary flex transform cursor-pointer items-center gap-2 transition-colors duration-300 hover:scale-105">
                      <Shield className="text-primary h-4 w-4" />
                      <span>Insured & Bonded</span>
                    </div>
                    <div className="hover:text-primary flex transform cursor-pointer items-center gap-2 transition-colors duration-300 hover:scale-105">
                      <Award className="text-primary h-4 w-4" />
                      <span>5-Star Rated</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative">
                <FadeIn delay={300}>
                  <div className="relative">
                    <div className="from-primary/20 to-accent/20 flex h-96 w-full items-center justify-center rounded-2xl bg-gradient-to-br">
                      <div className="space-y-4 text-center">
                        <div className="bg-primary/20 mx-auto flex h-24 w-24 items-center justify-center rounded-full">
                          <Heart className="text-primary h-12 w-12" />
                        </div>
                        <h3 className="text-foreground text-2xl font-semibold">
                          Professional Massage
                        </h3>
                        <p className="text-muted-foreground">
                          At your convenience
                        </p>
                      </div>
                    </div>
                    <div className="bg-accent/20 absolute -top-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full">
                      <Star className="text-accent h-8 w-8" />
                    </div>
                    <div className="bg-secondary/20 absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full">
                      <Clock className="text-secondary h-6 w-6" />
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <FadeIn>
                <h2 className="text-foreground mb-4 text-4xl font-bold">
                  Why Choose MassageAtHome?
                </h2>
                <p className="text-muted-foreground text-xl">
                  Experience the benefits of professional massage therapy in
                  your own space
                </p>
              </FadeIn>
            </div>

            <StaggerChildren delay={200}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <HoverLift>
                  <Card className="group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300">
                        <Heart className="text-primary h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">Wellness Focus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Professional massage therapy focused on your wellness,
                        relaxation, and overall health improvement.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift>
                  <Card className="group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300">
                        <Shield className="text-primary h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">
                        Trusted Professionals
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        All masseurs are verified professionals with proper
                        certifications, insurance, and background checks.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift>
                  <Card className="group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300">
                        <Star className="text-primary h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">
                        Quality Guaranteed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Read reviews and ratings from other customers before
                        booking. Quality service guaranteed.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift>
                  <Card className="group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300">
                        <Calendar className="text-primary h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">
                        Flexible Scheduling
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Book appointments that fit your schedule, available 7
                        days a week with flexible timing.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift>
                  <Card className="group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300">
                        <MapPin className="text-primary h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">
                        Convenient Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        No need to travel - our therapists come to your home,
                        office, or preferred location.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift>
                  <Card className="group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300">
                        <Phone className="text-primary h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">Easy Booking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Simple online booking system with instant confirmation
                        and real-time availability.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </HoverLift>
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <StaggerChildren delay={200}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <HoverLift>
                  <Card className="group border-0 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="pt-8 pb-8">
                      <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300">
                        <Users className="text-primary h-8 w-8" />
                      </div>
                      <div className="text-primary mb-2 text-4xl font-bold">
                        500+
                      </div>
                      <p className="text-muted-foreground text-lg">
                        Happy Customers
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        Satisfied clients across the city
                      </p>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift>
                  <Card className="group border-0 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="pt-8 pb-8">
                      <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300">
                        <Award className="text-primary h-8 w-8" />
                      </div>
                      <div className="text-primary mb-2 text-4xl font-bold">
                        50+
                      </div>
                      <p className="text-muted-foreground text-lg">
                        Professional Masseurs
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        Licensed and certified therapists
                      </p>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift>
                  <Card className="group border-0 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="pt-8 pb-8">
                      <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300">
                        <Star className="text-primary h-8 w-8" />
                      </div>
                      <div className="text-primary mb-2 text-4xl font-bold">
                        4.9
                      </div>
                      <p className="text-muted-foreground text-lg">
                        Average Rating
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        Based on 200+ reviews
                      </p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-foreground mb-4 text-4xl font-bold">
                Ready to Experience Professional Massage?
              </h2>
              <SlideUp delay={200}>
                <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
                  Book your first appointment today and discover the benefits of
                  professional massage therapy in your own home.
                </p>
              </SlideUp>
              <StaggerChildren delay={400}>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-300 hover:scale-105"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="transform transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Button>
                </div>
              </StaggerChildren>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
