import { MasseurRegistrationWizard } from '@/components/forms/masseur-registration-wizard';

export default function MasseurRegisterPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Join as a Masseur</h1>
        <p className="text-muted-foreground">
          Create your professional profile and start offering massage services
        </p>
      </div>
      <MasseurRegistrationWizard />
    </div>
  );
}
