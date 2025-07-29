'use client';

import React from 'react';
import { ArrowDown, ArrowUp, DollarSign, Target, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricCard as MetricCardType } from '@/lib/types';
import { cn } from '@/lib/utils';

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp
};

interface MetricCardProps {
  data: MetricCardType;
  loading?: boolean;
}

export function MetricCard({ data, loading }: MetricCardProps) {
  const Icon = iconMap[data.icon as keyof typeof iconMap];
  
  if (loading) {
    return (
      <Card className="transition-all duration-300 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            <div className="h-4 bg-muted rounded animate-pulse w-24"></div>
          </CardTitle>
          <div className="h-4 w-4 bg-muted rounded animate-pulse"></div>
        </CardHeader>
        <CardContent>
          <div className="h-8 bg-muted rounded animate-pulse w-20 mb-2"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-16"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.05] hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20 border-0 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {data.title}
        </CardTitle>
        <div className="relative">
          <Icon className={`h-5 w-5 ${data.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`} />
          <div className={`absolute inset-0 ${data.color} opacity-20 blur-md scale-150 group-hover:opacity-40 transition-opacity duration-300`}></div>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
          {data.value}
        </div>
        <CardDescription className="flex items-center">
          {data.changeType === 'increase' ? (
            <ArrowUp className="h-4 w-4 text-green-500 mr-1 animate-bounce" />
          ) : (
            <ArrowDown className="h-4 w-4 text-red-500 mr-1 animate-bounce" />
          )}
          <span className={cn(
            "font-semibold transition-all duration-300",
            data.changeType === 'increase' ? 'text-green-500 group-hover:text-green-400' : 'text-red-500 group-hover:text-red-400'
          )}>
            {Math.abs(data.change)}%
          </span>
          <span className="text-muted-foreground ml-1 group-hover:text-muted-foreground/80 transition-colors duration-300">
            from last month
          </span>
        </CardDescription>
      </CardContent>
    </Card>
  );
}