import { UserProfileForm } from '@/components/forms/user-profile-form';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your personal information and account settings
        </p>
      </div>
      <UserProfileForm />
    </div>
  );
}
