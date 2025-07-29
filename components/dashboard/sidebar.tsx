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
  Users,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  onClose?: () => void;
}

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

export function Sidebar({ onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = React.useState('overview');

  const handleItemClick = (itemId: string) => {
    console.log(`Navigating to: ${itemId}`);
    setActiveItem(itemId);
    // Close sidebar on mobile after navigation
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-64 lg:w-64 border-r bg-card/50 backdrop-blur-sm min-h-screen relative z-50">
      {/* Mobile Close Button */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="p-2 hover:bg-accent/50"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "w-full flex items-center justify-start px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer relative z-20",
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
                "mr-2 sm:mr-3 h-4 w-4 transition-all duration-200",
                isActive && "text-blue-600 dark:text-blue-400"
              )} />
              <span className="truncate">{item.label}</span>
            </Button>
          );
        })}
      </nav>
    </div>
  );
}