'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Calendar,
  Users,
  Settings,
  Star,
  MapPin,
  BarChart3,
  MessageSquare,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { useAuth } from '@/hooks/use-auth';

const customerNavItems = [
  {
    title: 'Dashboard',
    href: '/customer',
    icon: Home,
  },
  {
    title: 'Bookings',
    href: '/customer/bookings',
    icon: Calendar,
  },
  {
    title: 'Find Masseurs',
    href: '/customer/search',
    icon: MapPin,
  },
  {
    title: 'Favorites',
    href: '/customer/favorites',
    icon: Star,
  },
  {
    title: 'Messages',
    href: '/customer/messages',
    icon: MessageSquare,
  },
  {
    title: 'Profile',
    href: '/customer/profile',
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
    title: 'Bookings',
    href: '/masseur/bookings',
    icon: Calendar,
  },
  {
    title: 'Clients',
    href: '/masseur/clients',
    icon: Users,
  },
  {
    title: 'Services',
    href: '/masseur/services',
    icon: Settings,
  },
  {
    title: 'Reviews',
    href: '/masseur/reviews',
    icon: Star,
  },
  {
    title: 'Analytics',
    href: '/masseur/analytics',
    icon: BarChart3,
  },
  {
    title: 'Messages',
    href: '/masseur/messages',
    icon: MessageSquare,
  },
  {
    title: 'Profile',
    href: '/masseur/profile',
    icon: User,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems =
    user?.role === 'masseur' ? masseurNavItems : customerNavItems;

  return (
    <FadeIn delay={300}>
      <aside
        className={cn(
          'bg-background hidden flex-col border-r transition-all duration-300 md:flex',
          isCollapsed ? 'w-16' : 'w-64'
        )}
      >
        <div className="flex-1 overflow-y-auto">
          <nav className="space-y-2 p-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <SlideUp key={item.href} delay={400 + index * 100}>
                  <Link href={item.href}>
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className={cn(
                        'w-full justify-start',
                        isCollapsed && 'px-2'
                      )}
                    >
                      <Icon
                        className={cn('h-4 w-4', isCollapsed ? 'mr-0' : 'mr-2')}
                      />
                      {!isCollapsed && (
                        <span className="truncate">{item.title}</span>
                      )}
                    </Button>
                  </Link>
                </SlideUp>
              );
            })}
          </nav>
        </div>

        {/* Collapse button */}
        <div className="border-t p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full"
          >
            {isCollapsed ? 'Expand' : 'Collapse'}
          </Button>
        </div>
      </aside>
    </FadeIn>
  );
}
