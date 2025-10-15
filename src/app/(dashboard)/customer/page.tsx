import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Star } from 'lucide-react';

export default function CustomerDashboard() {
  return (
    <div className="space-y-6">
      <FadeIn delay={300}>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
          <p className="text-muted-foreground">
            Manage your bookings and discover new massage therapists
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SlideUp delay={400}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Upcoming Bookings
              </CardTitle>
              <Calendar className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-muted-foreground text-xs">
                +2 from last month
              </p>
            </CardContent>
          </Card>
        </SlideUp>

        <SlideUp delay={500}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Bookings
              </CardTitle>
              <Clock className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-muted-foreground text-xs">
                +4 from last month
              </p>
            </CardContent>
          </Card>
        </SlideUp>

        <SlideUp delay={600}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Favorite Masseurs
              </CardTitle>
              <Star className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-muted-foreground text-xs">
                +1 from last month
              </p>
            </CardContent>
          </Card>
        </SlideUp>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SlideUp delay={700}>
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>
                Your latest massage appointments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                  <Calendar className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Deep Tissue Massage</p>
                  <p className="text-muted-foreground text-xs">
                    Sarah Johnson • Tomorrow 2:00 PM
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                  <Calendar className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Swedish Massage</p>
                  <p className="text-muted-foreground text-xs">
                    Mike Chen • Dec 15, 3:30 PM
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        </SlideUp>

        <SlideUp delay={800}>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <MapPin className="mr-2 h-4 w-4" />
                Find Masseurs Nearby
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Book New Appointment
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Star className="mr-2 h-4 w-4" />
                View Favorites
              </Button>
            </CardContent>
          </Card>
        </SlideUp>
      </div>
    </div>
  );
}
