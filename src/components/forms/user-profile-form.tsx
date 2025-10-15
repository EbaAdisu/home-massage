'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Camera, Check, Loader2, Mail, Phone, User } from 'lucide-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/use-auth';

const profileSchema = z.object({
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
});

type ProfileFormData = z.infer<typeof profileSchema>;

export function UserProfileForm() {
  const { user, updateProfile, uploadAvatar, isLoading } = useAuth();
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      phone: user?.phone || '',
      email: user?.email || '',
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    await updateProfile(data);
  };

  const handleAvatarUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Invalid file type', {
        description: 'Please select an image file.',
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File too large', {
        description: 'Please select an image smaller than 5MB.',
      });
      return;
    }

    setIsUploading(true);
    try {
      await uploadAvatar(file);
    } catch {
      // Error handling is done in the hook
    } finally {
      setIsUploading(false);
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <FadeIn delay={300}>
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Profile Settings</CardTitle>
          <CardDescription>
            Update your personal information and profile picture
          </CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {/* Avatar Section */}
            <SlideUp delay={400}>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={user?.avatar} alt="Profile picture" />
                    <AvatarFallback className="text-lg">
                      {user ? getInitials(user.firstName, user.lastName) : 'JD'}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    type="button"
                    size="sm"
                    className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                  >
                    {isUploading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Camera className="h-4 w-4" />
                    )}
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {user?.role === 'customer'
                      ? 'Customer'
                      : user?.role === 'masseur'
                        ? 'Masseur'
                        : 'Admin'}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {user?.isVerified ? (
                      <span className="flex items-center text-green-600">
                        <Check className="mr-1 h-3 w-3" />
                        Verified
                      </span>
                    ) : (
                      'Not verified'
                    )}
                  </p>
                </div>
              </div>
            </SlideUp>

            {/* Form Fields */}
            <SlideUp delay={500}>
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

            <SlideUp delay={600}>
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

            <SlideUp delay={700}>
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
          </CardContent>

          <div className="px-6 pb-6">
            <SlideUp delay={800}>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating profile...
                  </>
                ) : (
                  'Update Profile'
                )}
              </Button>
            </SlideUp>
          </div>
        </form>
      </Card>
    </FadeIn>
  );
}
