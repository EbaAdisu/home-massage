import { RegisterForm } from '@/components/forms/register-form';

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>
        <p className="text-muted-foreground">
          Join our massage platform and start your wellness journey
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}
