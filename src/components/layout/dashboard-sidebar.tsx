'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { useAuth } from '@/hooks/use-auth';
import { BarChart3, Calendar, Home, Settings, Star, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const customerNavItems = [
  {
    title: 'Dashboard',
    href: '/customer',
    icon: Home,
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: User,
  },
];

const masseurNavItems = [
  {
    title: 'Dashboard',
    href: '/masseur',
    icon: Home,
  },
  {
    title: 'Services',
    href: '/masseur/services',
    icon: Settings,
  },
  {
    title: 'Availability',
    href: '/masseur/availability',
    icon: Calendar,
  },
  {
    title: 'Portfolio',
    href: '/masseur/portfolio',
    icon: Star,
  },
  {
    title: 'Earnings',
    href: '/masseur/earnings',
    icon: BarChart3,
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: User,
  },
];

function SidebarContentComponent() {
  const pathname = usePathname();
  const { user } = useAuth();
  const { state } = useSidebar();

  // Determine if user is on masseur pages or customer pages
  const isMasseurPage = pathname.startsWith('/masseur');
  const isCustomerPage = pathname.startsWith('/customer');

  // Use role from user store, but also consider current path
  const isMasseur = user?.role === 'masseur' || isMasseurPage;
  const isCustomer = user?.role === 'customer' || isCustomerPage;

  const navItems = isMasseur ? masseurNavItems : customerNavItems;

  return (
    <FadeIn delay={300}>
      <SidebarHeader>
        <div
          className={`flex items-center px-2 py-2 ${state === 'collapsed' ? 'justify-center' : 'gap-2'}`}
        >
          <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Home className="size-4" />
          </div>
          {state === 'expanded' && (
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {isMasseur ? 'Masseur Portal' : 'Customer Portal'}
              </span>
              <span className="truncate text-xs">
                {user?.firstName} {user?.lastName}
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <SlideUp key={item.href} delay={400 + index * 100}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.title}
                      >
                        <Link href={item.href}>
                          <Icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SlideUp>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {/* Empty footer - toggle button moved to main navbar */}
      </SidebarFooter>
    </FadeIn>
  );
}

export function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon" className="overflow-hidden">
      <SidebarContentComponent />
    </Sidebar>
  );
}
