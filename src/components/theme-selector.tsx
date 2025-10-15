'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Moon, Palette, Sun, Zap, ZapIcon, ZapOff } from 'lucide-react';
import { useThemeContext } from './theme-provider';

export function ThemeSelector() {
  const {
    currentTheme,
    isDarkMode,
    animationSpeed,
    availableThemes,
    setTheme,
    toggleDarkMode,
    setAnimationSpeed,
  } = useThemeContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Theme Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Theme Selection */}
        <div className="px-2 py-1.5">
          <div className="text-muted-foreground mb-2 text-xs font-medium">
            Theme
          </div>
          <div className="grid grid-cols-2 gap-1">
            {availableThemes.map(theme => (
              <Button
                key={theme}
                variant={currentTheme === theme ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setTheme(theme)}
                className="h-8 justify-start text-xs"
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Dark Mode Toggle */}
        <div className="px-2 py-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isDarkMode ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <span className="text-sm">Dark Mode</span>
            </div>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode}
              className="scale-75"
            />
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Animation Speed */}
        <div className="px-2 py-1.5">
          <div className="text-muted-foreground mb-2 text-xs font-medium">
            Animation Speed
          </div>
          <div className="space-y-1">
            {[
              { value: 'slow', label: 'Slow', icon: ZapOff },
              { value: 'normal', label: 'Normal', icon: Zap },
              { value: 'fast', label: 'Fast', icon: ZapIcon },
            ].map(({ value, label, icon: Icon }) => (
              <Button
                key={value}
                variant={animationSpeed === value ? 'default' : 'ghost'}
                size="sm"
                onClick={() =>
                  setAnimationSpeed(value as 'slow' | 'normal' | 'fast')
                }
                className="h-8 w-full justify-start text-xs"
              >
                <Icon className="mr-2 h-3 w-3" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
