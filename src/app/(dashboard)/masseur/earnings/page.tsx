'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Calendar, DollarSign, Download, TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const earningsData = [
  { month: 'Jan', earnings: 2400, bookings: 12 },
  { month: 'Feb', earnings: 3200, bookings: 16 },
  { month: 'Mar', earnings: 2800, bookings: 14 },
  { month: 'Apr', earnings: 3600, bookings: 18 },
  { month: 'May', earnings: 4200, bookings: 21 },
  { month: 'Jun', earnings: 3800, bookings: 19 },
];

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "#2563eb",
  },
  bookings: {
    label: "Bookings",
    color: "#60a5fa",
  },
};

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      <FadeIn delay={300}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Earnings</h1>
            <p className="text-muted-foreground">
              Track your earnings and performance metrics
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Filter Period
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SlideUp delay={400}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$20,000</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
        </SlideUp>

        <SlideUp delay={500}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,800</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>
        </SlideUp>

        <SlideUp delay={600}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
              <p className="text-xs text-muted-foreground">
                +5 from last month
              </p>
            </CardContent>
          </Card>
        </SlideUp>

        <SlideUp delay={700}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Badge variant="secondary">4.9/5</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9</div>
              <p className="text-xs text-muted-foreground">
                Based on 100 reviews
              </p>
            </CardContent>
          </Card>
        </SlideUp>
      </div>

      {/* Earnings Chart */}
      <SlideUp delay={800}>
        <Card>
          <CardHeader>
            <CardTitle>Earnings Overview</CardTitle>
            <CardDescription>
              Monthly earnings and booking trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <BarChart accessibilityLayer data={earningsData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="earnings" fill="var(--color-earnings)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </SlideUp>

      {/* Recent Transactions */}
      <SlideUp delay={900}>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Your latest earnings and payments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 1, client: 'Sarah Johnson', service: 'Swedish Massage', amount: 120, date: '2024-01-15', status: 'completed' },
                { id: 2, client: 'Mike Chen', service: 'Deep Tissue', amount: 150, date: '2024-01-14', status: 'completed' },
                { id: 3, client: 'Emma Davis', service: 'Hot Stone', amount: 180, date: '2024-01-13', status: 'pending' },
                { id: 4, client: 'John Smith', service: 'Sports Massage', amount: 140, date: '2024-01-12', status: 'completed' },
              ].map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">{transaction.client}</p>
                    <p className="text-sm text-muted-foreground">{transaction.service}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${transaction.amount}</p>
                    <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </SlideUp>
    </div>
  );
}
