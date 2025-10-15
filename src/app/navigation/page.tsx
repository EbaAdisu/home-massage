'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart3,
  Calendar,
  DollarSign,
  ExternalLink,
  HelpCircle,
  Home,
  Image,
  Key,
  LogIn,
  Settings,
  User,
  UserPlus,
  Users
} from 'lucide-react';
import Link from 'next/link';

const navigationPages = [
  // Public Pages
  {
    category: 'Public Pages',
    pages: [
      {
        name: 'Homepage',
        url: '/',
        description: 'Landing page with theme selection and overview',
        icon: Home,
        access: 'Public',
        color: 'bg-blue-500'
      },
      {
        name: 'Login',
        url: '/login',
        description: 'User authentication and sign-in',
        icon: LogIn,
        access: 'Public',
        color: 'bg-green-500'
      },
      {
        name: 'Register',
        url: '/register',
        description: 'Customer account registration',
        icon: UserPlus,
        access: 'Public',
        color: 'bg-purple-500'
      },
      {
        name: 'Forgot Password',
        url: '/forgot-password',
        description: 'Password recovery and reset',
        icon: Key,
        access: 'Public',
        color: 'bg-orange-500'
      },
      {
        name: 'Masseur Registration',
        url: '/masseur-register',
        description: '4-step masseur onboarding wizard',
        icon: User,
        access: 'Public',
        color: 'bg-teal-500'
      }
    ]
  },
  // Customer Pages
  {
    category: 'Customer Pages',
    pages: [
      {
        name: 'Customer Dashboard',
        url: '/customer',
        description: 'Customer overview and booking management',
        icon: Users,
        access: 'Customer',
        color: 'bg-indigo-500'
      },
      {
        name: 'Profile Management',
        url: '/profile',
        description: 'User profile editing and settings',
        icon: Settings,
        access: 'Authenticated',
        color: 'bg-pink-500'
      }
    ]
  },
  // Masseur Pages
  {
    category: 'Masseur Pages',
    pages: [
      {
        name: 'Masseur Dashboard',
        url: '/masseur',
        description: 'Business overview and metrics',
        icon: BarChart3,
        access: 'Masseur',
        color: 'bg-emerald-500'
      },
      {
        name: 'Service Management',
        url: '/masseur/services',
        description: 'Create and manage massage services',
        icon: Settings,
        access: 'Masseur',
        color: 'bg-cyan-500'
      },
      {
        name: 'Availability Management',
        url: '/masseur/availability',
        description: 'Set schedule and available time slots',
        icon: Calendar,
        access: 'Masseur',
        color: 'bg-amber-500'
      },
      {
        name: 'Portfolio Gallery',
        url: '/masseur/portfolio',
        description: 'Upload and manage portfolio images',
        icon: Image,
        access: 'Masseur',
        color: 'bg-rose-500'
      },
      {
        name: 'Earnings Tracking',
        url: '/masseur/earnings',
        description: 'Financial analytics and transaction history',
        icon: DollarSign,
        access: 'Masseur',
        color: 'bg-lime-500'
      }
    ]
  }
];

const userJourneys = [
  {
    title: 'New Customer Journey',
    description: 'Complete onboarding for new customers',
    steps: [
      { page: 'Homepage', url: '/', description: 'Start here' },
      { page: 'Register', url: '/register', description: 'Create account' },
      { page: 'Customer Dashboard', url: '/customer', description: 'Explore features' },
      { page: 'Profile', url: '/profile', description: 'Complete setup' }
    ],
    color: 'bg-blue-500'
  },
  {
    title: 'Masseur Onboarding',
    description: 'Complete masseur registration and setup',
    steps: [
      { page: 'Homepage', url: '/', description: 'Start here' },
      { page: 'Masseur Register', url: '/masseur-register', description: '4-step wizard' },
      { page: 'Masseur Dashboard', url: '/masseur', description: 'Business overview' },
      { page: 'Services', url: '/masseur/services', description: 'Set up services' },
      { page: 'Availability', url: '/masseur/availability', description: 'Set schedule' },
      { page: 'Portfolio', url: '/masseur/portfolio', description: 'Upload images' },
      { page: 'Earnings', url: '/masseur/earnings', description: 'Track performance' }
    ],
    color: 'bg-emerald-500'
  },
  {
    title: 'Returning User',
    description: 'Quick access for existing users',
    steps: [
      { page: 'Homepage', url: '/', description: 'Start here' },
      { page: 'Login', url: '/login', description: 'Sign in' },
      { page: 'Dashboard', url: '/customer or /masseur', description: 'Role-based dashboard' }
    ],
    color: 'bg-purple-500'
  }
];

export default function NavigationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-6">
      <div className="container mx-auto max-w-6xl">
        <FadeIn delay={300}>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Platform Navigation Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete guide to all pages and how to access them
            </p>
          </div>
        </FadeIn>

        <Tabs defaultValue="pages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pages">All Pages</TabsTrigger>
            <TabsTrigger value="journeys">User Journeys</TabsTrigger>
            <TabsTrigger value="help">Help & Support</TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-6">
            {navigationPages.map((category, categoryIndex) => (
              <SlideUp key={category.category} delay={400 + categoryIndex * 100}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                      {category.category}
                    </CardTitle>
                    <CardDescription>
                      {category.category === 'Public Pages' && 'Accessible to everyone'}
                      {category.category === 'Customer Pages' && 'Available to customers'}
                      {category.category === 'Masseur Pages' && 'Available to masseurs'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.pages.map((page) => (
                        <Card key={page.name} className="group hover:shadow-lg transition-all duration-200">
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg ${page.color} text-white`}>
                                <page.icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="font-semibold text-sm">{page.name}</h3>
                                  <Badge variant="outline" className="text-xs">
                                    {page.access}
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground mb-3">
                                  {page.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  <code className="text-xs bg-muted px-2 py-1 rounded">
                                    {page.url}
                                  </code>
                                  <Button asChild size="sm" variant="ghost" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link href={page.url}>
                                      <ExternalLink className="h-4 w-4" />
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SlideUp>
            ))}
          </TabsContent>

          <TabsContent value="journeys" className="space-y-6">
            {userJourneys.map((journey, journeyIndex) => (
              <SlideUp key={journey.title} delay={400 + journeyIndex * 100}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${journey.color} mr-3`}></div>
                      {journey.title}
                    </CardTitle>
                    <CardDescription>{journey.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {journey.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                            {stepIndex + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{step.page}</h4>
                              <Badge variant="outline" className="text-xs">
                                {step.url}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                          <Button asChild size="sm" variant="ghost">
                            <Link href={step.url}>
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SlideUp>
            ))}
          </TabsContent>

          <TabsContent value="help" className="space-y-6">
            <SlideUp delay={400}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="mr-2 h-5 w-5" />
                    Quick Help
                  </CardTitle>
                  <CardDescription>
                    Common questions and troubleshooting tips
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Can&apos;t access dashboard?</h4>
                      <p className="text-sm text-muted-foreground">
                        Make sure you&apos;re logged in. Try logging out and back in.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Page not loading?</h4>
                      <p className="text-sm text-muted-foreground">
                        Check your internet connection and refresh the page.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Theme not changing?</h4>
                      <p className="text-sm text-muted-foreground">
                        Refresh the page after selecting a new theme.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Mobile issues?</h4>
                      <p className="text-sm text-muted-foreground">
                        Try switching between landscape and portrait orientation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>

            <SlideUp delay={500}>
              <Card>
                <CardHeader>
                  <CardTitle>Keyboard Shortcuts</CardTitle>
                  <CardDescription>
                    Useful shortcuts for faster navigation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                      <span className="text-sm">Search</span>
                      <code className="text-xs bg-background px-2 py-1 rounded">Ctrl + /</code>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                      <span className="text-sm">Close modals</span>
                      <code className="text-xs bg-background px-2 py-1 rounded">Esc</code>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                      <span className="text-sm">Navigate elements</span>
                      <code className="text-xs bg-background px-2 py-1 rounded">Tab</code>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                      <span className="text-sm">Go back</span>
                      <code className="text-xs bg-background px-2 py-1 rounded">Alt + ←</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>

            <SlideUp delay={600}>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>
                    Need more help? Contact our support team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-3">
                    <Button asChild variant="outline" className="justify-start">
                      <Link href="/contact">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Contact Support
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-start">
                      <Link href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Return to Homepage
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
