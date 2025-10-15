import { MasseurServicesManagement } from '@/components/features/masseur-services-management';

export default function MasseurServicesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Service Management</h1>
        <p className="text-muted-foreground">
          Manage your massage services, pricing, and availability
        </p>
      </div>
      <MasseurServicesManagement />
    </div>
  );
}
