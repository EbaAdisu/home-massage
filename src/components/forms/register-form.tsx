'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Loader2, User, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

import { useAuth } from '@/hooks/use-auth';

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
import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';

const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name must be at most 50 characters'),
    lastName: z
      .string()
      .min(2, 'Last name must be at least 2 characters')
      .max(50, 'Last name must be at most 50 characters'),
    phone: z
      .string()
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number must be at most 15 digits')
      .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
    email: z
      .string()
      .email('Please enter a valid email address')
      .optional()
      .or(z.literal('')),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(100, 'Password must be at most 100 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      ),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, isLoading } = useAuth();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    await register({
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <FadeIn delay={300}>
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
          <CardDescription>
            Join our platform and start your wellness journey today
          </CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <SlideUp delay={400}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      {...form.register('firstName')}
                      className={
                        form.formState.errors.firstName
                          ? 'border-destructive pl-10'
                          : 'pl-10'
                      }
                    />
                  </div>
                  {form.formState.errors.firstName && (
                    <p className="text-destructive text-sm">
                      {form.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      {...form.register('lastName')}
                      className={
                        form.formState.errors.lastName
                          ? 'border-destructive pl-10'
                          : 'pl-10'
                      }
                    />
                  </div>
                  {form.formState.errors.lastName && (
                    <p className="text-destructive text-sm">
                      {form.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={500}>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
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

            <SlideUp delay={600}>
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <div className="relative">
                  <Mail className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...form.register('email')}
                    className={
                      form.formState.errors.email
                        ? 'border-destructive pl-10'
                        : 'pl-10'
                    }
                  />
                </div>
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </SlideUp>

            <SlideUp delay={700}>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    {...form.register('password')}
                    className={
                      form.formState.errors.password
                        ? 'border-destructive pr-10'
                        : 'pr-10'
                    }
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {form.formState.errors.password && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>
            </SlideUp>

            <SlideUp delay={800}>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    {...form.register('confirmPassword')}
                    className={
                      form.formState.errors.confirmPassword
                        ? 'border-destructive pr-10'
                        : 'pr-10'
                    }
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {form.formState.errors.confirmPassword && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </SlideUp>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <SlideUp delay={900}>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </Button>
            </SlideUp>

            <SlideUp delay={1000}>
              <div className="text-muted-foreground text-center text-sm">
                Already have an account?{' '}
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
