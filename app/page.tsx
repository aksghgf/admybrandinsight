'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { OverviewCards } from '@/components/dashboard/overview-cards';
import { RevenueChart } from '@/components/dashboard/charts/revenue-chart';
import { UsersChart } from '@/components/dashboard/charts/users-chart';
import { ConversionsChart } from '@/components/dashboard/charts/conversions-chart';
import { DataTable } from '@/components/dashboard/data-table';
import PricingCalculator from '@/components/pricing-calculator';
import DemoVideoSection from '@/components/demo-video-section';
import { 
  metricCards as initialMetricCards,
  revenueData,
  usersData,
  conversionsData,
  tableData,
  generateRealTimeData
} from '@/lib/mock-data';
import { MetricCard } from '@/lib/types';

export default function Dashboard() {
  const [metricCards, setMetricCards] = useState<MetricCard[]>(initialMetricCards);
  const [loading, setLoading] = useState(true);
  const [focusedSection, setFocusedSection] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulate real-time updates every 30 seconds
    const interval = setInterval(() => {
      const realTimeData = generateRealTimeData();
      setMetricCards(prev => [
        { ...prev[0], value: `$${realTimeData.revenue.toLocaleString()}` },
        { ...prev[1], value: realTimeData.users.toLocaleString() },
        { ...prev[2], value: realTimeData.conversions.toLocaleString() },
        { ...prev[3], value: `${realTimeData.growth}%` }
      ]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    if (focusedSection === sectionId) {
      // If clicking the same section, unfocus it
      setFocusedSection(null);
    } else {
      // Focus on the clicked section
      setFocusedSection(sectionId);
    }
  };

  const getSectionClasses = (sectionId: string) => {
    const baseClasses = 'dashboard-section float-animation';
    
    if (!focusedSection) {
      return `${baseClasses} opacity-100`;
    }
    
    if (focusedSection === sectionId) {
      return `${baseClasses} focused opacity-100 z-20`;
    }
    
    return `${baseClasses} reduced-opacity z-10`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 space-y-6 sm:space-y-8 overflow-auto min-h-screen">
          {/* Header Section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Dashboard Overview
              </h2>
            </div>
            <p className="text-muted-foreground/80 text-sm sm:text-base lg:text-lg ml-3 sm:ml-4">
              Welcome to your analytics dashboard. Here's what's happening with your campaigns.
            </p>
          </div>

          {/* Overview Cards */}
          <div 
            className={getSectionClasses('overview-cards')}
            onClick={() => handleSectionClick('overview-cards')}
            style={{ cursor: 'pointer' }}
          >
            <OverviewCards cards={metricCards} loading={loading} />
          </div>

          {/* Pricing Calculator & Demo Video Section - Horizontal Layout */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch animate-fade-in-up">
            <div className="flex-1">
              <PricingCalculator />
            </div>
            <div className="flex-1">
              <DemoVideoSection />
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3">
            <div 
              className={`lg:col-span-2 ${getSectionClasses('revenue-chart')}`}
              onClick={() => handleSectionClick('revenue-chart')}
              style={{ cursor: 'pointer' }}
            >
              <RevenueChart data={revenueData} loading={loading} />
            </div>
            <div 
              className={getSectionClasses('users-chart')}
              onClick={() => handleSectionClick('users-chart')}
              style={{ cursor: 'pointer' }}
            >
              <UsersChart data={usersData} loading={loading} />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3">
            <div 
              className={getSectionClasses('conversions-chart')}
              onClick={() => handleSectionClick('conversions-chart')}
              style={{ cursor: 'pointer' }}
            >
              <ConversionsChart data={conversionsData} loading={loading} />
            </div>
            <div 
              className={`lg:col-span-2 ${getSectionClasses('data-table')}`}
              onClick={() => handleSectionClick('data-table')}
              style={{ cursor: 'pointer' }}
            >
              <DataTable data={tableData} loading={loading} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}