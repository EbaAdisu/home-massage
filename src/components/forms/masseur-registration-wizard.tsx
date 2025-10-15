'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  DollarSign,
  Loader2,
  User,
} from 'lucide-react';
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
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

const masseurRegistrationSchema = z.object({
  // Step 1: Basic Info
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

  // Step 2: Professional Info
  bio: z
    .string()
    .min(50, 'Bio must be at least 50 characters')
    .max(500, 'Bio must be at most 500 characters'),
  experience: z
    .string()
    .min(1, 'Please select your experience level'),
  certifications: z.string().optional(),

  // Step 3: Services
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  basePrice: z
    .number()
    .min(50, 'Base price must be at least $50')
    .max(500, 'Base price must be at most $500'),
  travelFee: z
    .number()
    .min(0, 'Travel fee cannot be negative')
    .max(100, 'Travel fee must be at most $100'),

  // Step 4: Availability
  availability: z.object({
    monday: z.boolean(),
    tuesday: z.boolean(),
    wednesday: z.boolean(),
    thursday: z.boolean(),
    friday: z.boolean(),
    saturday: z.boolean(),
    sunday: z.boolean(),
  }),
  startTime: z.string(),
  endTime: z.string(),
});

type MasseurRegistrationData = z.infer<typeof masseurRegistrationSchema>;

const serviceOptions = [
  { id: 'full-body', label: 'Full Body Massage', icon: '🧘‍♀️' },
  { id: 'deep-tissue', label: 'Deep Tissue Massage', icon: '💪' },
  { id: 'swedish', label: 'Swedish Massage', icon: '🌸' },
  { id: 'hot-stone', label: 'Hot Stone Therapy', icon: '🔥' },
  { id: 'prenatal', label: 'Prenatal Massage', icon: '🤱' },
  { id: 'sports', label: 'Sports Massage', icon: '🏃‍♂️' },
  { id: 'couples', label: 'Couples Massage', icon: '👫' },
  { id: 'foot', label: 'Foot Massage', icon: '🦶' },
];

const experienceLevels = [
  { value: 'beginner', label: 'Beginner (0-2 years)' },
  { value: 'intermediate', label: 'Intermediate (2-5 years)' },
  { value: 'experienced', label: 'Experienced (5-10 years)' },
  { value: 'expert', label: 'Expert (10+ years)' },
];

export function MasseurRegistrationWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const form = useForm<MasseurRegistrationData>({
    resolver: zodResolver(masseurRegistrationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      bio: '',
      experience: '',
      certifications: '',
      services: [],
      basePrice: 100,
      travelFee: 20,
      availability: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false,
      },
      startTime: '09:00',
      endTime: '18:00',
    },
  });


  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      // Handle successful registration
    } catch {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  const toggleService = (serviceId: string) => {
    const newServices = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    setSelectedServices(newServices);
    form.setValue('services', newServices);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
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
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      {...form.register('lastName')}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={500}>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative">
                  <User className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    {...form.register('phone')}
                    className="pl-10"
                  />
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={600}>
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <div className="relative">
                  <User className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...form.register('email')}
                    className="pl-10"
                  />
                </div>
              </div>
            </SlideUp>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <SlideUp delay={400}>
              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your massage experience, specialties, and what makes you unique..."
                  {...form.register('bio')}
                  className="min-h-24"
                />
                <p className="text-muted-foreground text-xs">
                  {form.watch('bio')?.length || 0}/500 characters
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={500}>
              <div className="space-y-3">
                <Label>Experience Level</Label>
                <RadioGroup
                  value={form.watch('experience')}
                  onValueChange={(value) => form.setValue('experience', value)}
                  className="grid grid-cols-1 gap-3"
                >
                  {experienceLevels.map(level => (
                    <div key={level.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={level.value} id={level.value} />
                      <Label htmlFor={level.value} className="cursor-pointer">
                        {level.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </SlideUp>

            <SlideUp delay={600}>
              <div className="space-y-2">
                <Label htmlFor="certifications">Certifications (Optional)</Label>
                <Textarea
                  id="certifications"
                  placeholder="List any relevant certifications, licenses, or training..."
                  {...form.register('certifications')}
                  className="min-h-20"
                />
              </div>
            </SlideUp>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <SlideUp delay={400}>
              <div className="space-y-2">
                <Label>Services You Offer</Label>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map(service => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`flex items-center space-x-2 rounded-lg border p-3 text-left transition-colors ${
                        selectedServices.includes(service.id)
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-input hover:bg-muted'
                      }`}
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span className="text-sm font-medium">{service.label}</span>
                      {selectedServices.includes(service.id) && (
                        <Check className="ml-auto h-4 w-4" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={500}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="basePrice">Base Price (per hour)</Label>
                  <div className="relative">
                    <DollarSign className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                    <Input
                      id="basePrice"
                      type="number"
                      placeholder="100"
                      {...form.register('basePrice', { valueAsNumber: true })}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="travelFee">Travel Fee</Label>
                  <div className="relative">
                    <DollarSign className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                    <Input
                      id="travelFee"
                      type="number"
                      placeholder="20"
                      {...form.register('travelFee', { valueAsNumber: true })}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <SlideUp delay={400}>
              <div className="space-y-3">
                <Label>Available Days</Label>
                <div className="grid grid-cols-7 gap-2">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div
                      key={day}
                      className="flex flex-col items-center space-y-2 rounded-lg border p-3"
                    >
                      <input
                        type="checkbox"
                        id={day.toLowerCase()}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        checked={form.watch(`availability.${day.toLowerCase()}` as any)}
                        onChange={(e) => 
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          form.setValue(`availability.${day.toLowerCase()}` as any, e.target.checked)
                        }
                        className="rounded"
                      />
                      <Label htmlFor={day.toLowerCase()} className="text-xs font-medium cursor-pointer">
                        {day.slice(0, 3)}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={500}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input
                    id="startTime"
                    type="time"
                    {...form.register('startTime')}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time</Label>
                  <Input
                    id="endTime"
                    type="time"
                    {...form.register('endTime')}
                  />
                </div>
              </div>
            </SlideUp>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <FadeIn delay={300}>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Create Your Masseur Profile
          </CardTitle>
          <CardDescription>
            Complete your professional profile to start offering massage services
          </CardDescription>
          <Progress value={(currentStep / 4) * 100} className="mt-4" />
        </CardHeader>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {renderStepContent()}
          </CardContent>

          <CardFooter className="flex justify-between">
            <SlideUp delay={700}>
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            </SlideUp>

            <SlideUp delay={800}>
              {currentStep === 4 ? (
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating profile...
                    </>
                  ) : (
                    'Complete Registration'
                  )}
                </Button>
              ) : (
                <Button type="button" onClick={nextStep}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </SlideUp>
          </CardFooter>
        </form>
      </Card>
    </FadeIn>
  );
}
