'use client';

import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b glass shadow-lg">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-animate rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ADmyBRAND Insights
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search campaigns..."
              className="w-64 pl-10 transition-all duration-300 focus:w-80 focus:shadow-lg focus:ring-2 focus:ring-blue-500/20 bg-background/50 backdrop-blur"
            />
          </div>
          
          <Button variant="ghost" size="sm" className="relative hover:bg-accent/50 transition-all duration-200">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse shadow-lg"></span>
          </Button>
          
          <ThemeToggle />
          
          <Button variant="ghost" size="sm" className="hover:bg-accent/50 transition-all duration-200">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}