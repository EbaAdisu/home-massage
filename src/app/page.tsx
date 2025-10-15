'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { PageTransition } from '@/components/animations/page-transition';
import { SlideUp } from '@/components/animations/slide-up';
import { ThemeSelector } from '@/components/theme-selector';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  Users
} from 'lucide-react';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <FadeIn>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h1 className="text-2xl font-bold text-foreground">
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
        <section className="relative py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="space-y-8">
                <FadeIn>
                  <Badge variant="secondary" className="mb-4">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Professional Massage Therapy
                  </Badge>
                </FadeIn>
                
                <SlideUp>
                  <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Relax & Rejuvenate
                    <span className="text-primary block">at Home</span>
                  </h2>
                </SlideUp>
                
                <FadeIn delay={200}>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Connect with certified massage therapists in your area. 
                    Book appointments, read reviews, and enjoy professional 
                    massage services in the comfort of your own home.
                  </p>
                </FadeIn>

                <FadeIn delay={400}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <MapPin className="h-5 w-5 mr-2" />
                      Find Masseurs Near You
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg">
                      <Users className="h-5 w-5 mr-2" />
                      Become a Masseur
                    </Button>
                  </div>
                </FadeIn>

                <FadeIn delay={600}>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Licensed Professionals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Insured & Bonded</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>5-Star Rated</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative">
                <FadeIn delay={300}>
                  <div className="relative">
                    <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                          <Heart className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground">Professional Massage</h3>
                        <p className="text-muted-foreground">At your convenience</p>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                      <Star className="h-8 w-8 text-accent" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Why Choose MassageAtHome?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Experience the benefits of professional massage therapy in your own space
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn delay={200}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Wellness Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Professional massage therapy focused on your wellness, relaxation, and overall health improvement.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Trusted Professionals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      All masseurs are verified professionals with proper certifications, insurance, and background checks.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={400}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Quality Guaranteed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Read reviews and ratings from other customers before booking. Quality service guaranteed.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={500}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Flexible Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Book appointments that fit your schedule, available 7 days a week with flexible timing.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={600}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Convenient Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      No need to travel - our therapists come to your home, office, or preferred location.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={700}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Easy Booking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Simple online booking system with instant confirmation and real-time availability.
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-lg text-muted-foreground">Happy Customers</p>
                    <p className="text-sm text-muted-foreground mt-2">Satisfied clients across the city</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <p className="text-lg text-muted-foreground">Professional Masseurs</p>
                    <p className="text-sm text-muted-foreground mt-2">Licensed and certified therapists</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                    <p className="text-lg text-muted-foreground">Average Rating</p>
                    <p className="text-sm text-muted-foreground mt-2">Based on 200+ reviews</p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Ready to Experience Professional Massage?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book your first appointment today and discover the benefits of professional massage therapy in your own home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Now
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
