'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const forgotPasswordSchema = z.object({
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be at most 15 digits')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch {
      // Error handling would go here
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <FadeIn delay={300}>
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Check Your Phone</CardTitle>
            <CardDescription>
              We&apos;ve sent a password reset link to your phone number
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SlideUp delay={400}>
              <div className="rounded-lg bg-green-50 p-4 text-center">
                <div className="text-green-600 text-sm">
                  Password reset link sent successfully!
                </div>
                <div className="text-muted-foreground text-xs mt-1">
                  Please check your phone for the reset link.
                </div>
              </div>
            </SlideUp>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <SlideUp delay={500}>
              <Button asChild className="w-full">
                <Link href="/login">Back to Sign In</Link>
              </Button>
            </SlideUp>
          </CardFooter>
        </Card>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={300}>
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
          <CardDescription>
            Enter your phone number and we&apos;ll send you a reset link
          </CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <SlideUp delay={400}>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    {...form.register('phone')}
                    className={
                      form.formState.errors.phone
                        ? 'border-destructive pl-10'
                        : 'pl-10'
                    }
                  />
                </div>
                {form.formState.errors.phone && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
            </SlideUp>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <SlideUp delay={500}>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending reset link...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </Button>
            </SlideUp>

            <SlideUp delay={600}>
              <div className="text-muted-foreground text-center text-sm">
                Remember your password?{' '}
                <Link
                  href="/login"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </SlideUp>
          </CardFooter>
        </form>
      </Card>
    </FadeIn>
  );
}
