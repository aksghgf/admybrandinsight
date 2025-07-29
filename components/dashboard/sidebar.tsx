'use client';

import React from 'react';
import { 
  BarChart3, 
  Calendar, 
  Database, 
  Home, 
  Settings, 
  Target, 
  TrendingUp,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const sidebarItems = [
  { id: 'overview', icon: Home, label: 'Overview' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'audience', icon: Users, label: 'Audience' },
  { id: 'campaigns', icon: Target, label: 'Campaigns' },
  { id: 'performance', icon: TrendingUp, label: 'Performance' },
  { id: 'schedule', icon: Calendar, label: 'Schedule' },
  { id: 'data-sources', icon: Database, label: 'Data Sources' },
  { id: 'settings', icon: Settings, label: 'Settings' }
];

export function Sidebar() {
  const [activeItem, setActiveItem] = React.useState('overview');

  const handleItemClick = (itemId: string) => {
    console.log(`Navigating to: ${itemId}`);
    setActiveItem(itemId);
  };

  return (
    <div className="w-64 border-r bg-card/50 backdrop-blur-sm min-h-screen relative z-10">
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "w-full flex items-center justify-start px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer relative z-20",
                "hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] hover:shadow-md",
                "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:z-30",
                "active:scale-[0.98] active:shadow-sm",
                isActive 
                  ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-lg z-30" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ pointerEvents: 'auto' }}
            >
              <item.icon className={cn(
                "mr-3 h-4 w-4 transition-all duration-200",
                isActive && "text-blue-600 dark:text-blue-400"
              )} />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}