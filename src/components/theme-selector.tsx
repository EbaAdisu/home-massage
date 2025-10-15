'use client';

import React from 'react';
import { useThemeContext } from './theme-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Palette, Moon, Sun, Zap, ZapOff, ZapIcon } from 'lucide-react';

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
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Theme Settings
        </CardTitle>
        <CardDescription>
          Customize your massage platform experience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Theme Selection */}
        <div className="space-y-2">
          <Label htmlFor="theme-select">Theme</Label>
          <Select value={currentTheme} onValueChange={setTheme}>
            <SelectTrigger>
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              {availableThemes.map((theme) => (
                <SelectItem key={theme} value={theme}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isDarkMode ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
            <Label htmlFor="dark-mode">Dark Mode</Label>
          </div>
          <Switch
            id="dark-mode"
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
          />
        </div>

        {/* Animation Speed */}
        <div className="space-y-2">
          <Label htmlFor="animation-speed">Animation Speed</Label>
          <Select value={animationSpeed} onValueChange={setAnimationSpeed}>
            <SelectTrigger>
              <SelectValue placeholder="Select animation speed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="slow">
                <div className="flex items-center gap-2">
                  <ZapOff className="h-4 w-4" />
                  Slow
                </div>
              </SelectItem>
              <SelectItem value="normal">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Normal
                </div>
              </SelectItem>
              <SelectItem value="fast">
                <div className="flex items-center gap-2">
                  <ZapIcon className="h-4 w-4" />
                  Fast
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Theme Preview */}
        <div className="space-y-2">
          <Label>Preview</Label>
          <div className="grid grid-cols-2 gap-2">
            {availableThemes.slice(0, 4).map((theme) => (
              <Button
                key={theme}
                variant={currentTheme === theme ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme(theme)}
                className="justify-start"
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
