'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';
import {
    BarChart3,
    Calendar,
    Home,
    Settings,
    Star,
    User,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
