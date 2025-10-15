'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar as CalendarIcon, Clock, Plus, Settings } from 'lucide-react';
import { useState } from 'react';

export default function AvailabilityPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const toggleTimeSlot = (time: string) => {
    setSelectedTimeSlots(prev => 
      prev.includes(time) 
        ? prev.filter(t => t !== time)
        : [...prev, time]
    );
  };

  return (
    <div className="space-y-6">
      <FadeIn delay={300}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Availability</h1>
            <p className="text-muted-foreground">
              Manage your available time slots for bookings
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Time Slot
            </Button>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <SlideUp delay={400}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5" />
                Calendar
              </CardTitle>
              <CardDescription>
                Select dates to manage your availability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </SlideUp>

        {/* Time Slots */}
        <SlideUp delay={500}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Time Slots
              </CardTitle>
              <CardDescription>
                Select available time slots for {selectedDate?.toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTimeSlots.includes(time) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleTimeSlot(time)}
                    className="justify-start"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </SlideUp>

        {/* Availability Summary */}
        <SlideUp delay={600}>
          <Card>
            <CardHeader>
              <CardTitle>Availability Summary</CardTitle>
              <CardDescription>
                Your current availability status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">This Week</span>
                <Badge variant="secondary">5 days available</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Next Week</span>
                <Badge variant="outline">3 days available</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Hours</span>
                <Badge variant="default">40 hours</Badge>
              </div>
              <div className="pt-4 border-t">
                <Button className="w-full" variant="outline">
                  Set Recurring Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </SlideUp>
      </div>
    </div>
  );
}
