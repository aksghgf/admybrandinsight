'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartData } from '@/lib/types';

interface RevenueChartProps {
  data: ChartData[];
  loading?: boolean;
}

export function RevenueChart({ data, loading }: RevenueChartProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>Monthly revenue over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full bg-muted rounded animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] bg-gradient-to-br from-background to-muted/10 border-0 shadow-lg overflow-hidden relative">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          Revenue Trend
        </CardTitle>
        <CardDescription className="text-muted-foreground/80">
          Monthly revenue performance over the year
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-20" stroke="hsl(var(--muted-foreground))" />
            <XAxis 
              dataKey="name" 
              className="text-xs"
              tick={{ fontSize: 12 }}
              stroke="hsl(var(--muted-foreground))"
            />
            <YAxis 
              className="text-xs"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              stroke="hsl(var(--muted-foreground))"
            />
            <Tooltip 
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000
              }}
              cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 2, strokeDasharray: '5 5' }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="url(#colorRevenue)" 
              strokeWidth={4}
              dot={{ 
                fill: '#3B82F6', 
                strokeWidth: 2, 
                r: 5, 
                filter: 'drop-shadow(0 2px 4px rgba(59,130,246,0.3))',
                cursor: 'pointer'
              }}
              activeDot={{ 
                r: 8, 
                fill: '#3B82F6', 
                stroke: '#fff', 
                strokeWidth: 3, 
                filter: 'drop-shadow(0 4px 8px rgba(59,130,246,0.4))',
                cursor: 'pointer'
              }}
            />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}