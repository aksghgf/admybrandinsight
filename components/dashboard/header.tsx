'use client';

import React from 'react';
import { Bell, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from './theme-toggle';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b glass shadow-lg">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 hover:bg-accent/50 transition-all duration-200"
            onClick={onMenuClick}
          >
            <Menu className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 gradient-animate rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xs sm:text-sm">A</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ADmyBRAND Insights
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search Bar - Hidden on mobile */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search campaigns..."
              className="w-48 lg:w-64 pl-10 transition-all duration-300 focus:w-56 lg:focus:w-80 focus:shadow-lg focus:ring-2 focus:ring-blue-500/20 bg-background/50 backdrop-blur"
            />
          </div>
          
          {/* Mobile Search Button */}
          <Button variant="ghost" size="sm" className="sm:hidden p-2 hover:bg-accent/50 transition-all duration-200">
            <Search className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="sm" className="relative hover:bg-accent/50 transition-all duration-200 p-2">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse shadow-lg"></span>
          </Button>
          
          <ThemeToggle />
          
          <Button variant="ghost" size="sm" className="hover:bg-accent/50 transition-all duration-200 p-2">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}