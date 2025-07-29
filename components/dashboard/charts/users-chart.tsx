'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartData } from '@/lib/types';

interface UsersChartProps {
  data: ChartData[];
  loading?: boolean;
}

export function UsersChart({ data, loading }: UsersChartProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Users by Device</CardTitle>
          <CardDescription>User distribution across devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full bg-muted rounded animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] relative">
      <CardHeader>
        <CardTitle>Users by Device</CardTitle>
        <CardDescription>User distribution across different devices</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="name" 
              className="text-sm"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              className="text-sm"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
            />
            <Tooltip 
              formatter={(value: number) => [value.toLocaleString(), 'Users']}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                zIndex: 1000
              }}
              cursor={{ fill: 'hsl(var(--accent))', opacity: 0.3 }}
            />
            <Bar 
              dataKey="users" 
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              className="transition-all duration-300 hover:opacity-80"
              style={{ cursor: 'pointer' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}