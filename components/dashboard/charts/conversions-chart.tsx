'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartData } from '@/lib/types';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

interface ConversionsChartProps {
  data: ChartData[];
  loading?: boolean;
}

export function ConversionsChart({ data, loading }: ConversionsChartProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Conversions by Channel</CardTitle>
          <CardDescription>Conversion distribution by marketing channel</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] sm:h-[300px] w-full bg-muted rounded animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] relative">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg sm:text-xl">Conversions by Channel</CardTitle>
        <CardDescription className="text-sm">Conversion distribution across marketing channels</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              dataKey="conversions"
              nameKey="name"
              style={{ cursor: 'pointer' }}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  className="transition-all duration-300 hover:opacity-80"
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [value.toLocaleString(), 'Conversions']}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                zIndex: 1000,
                fontSize: '12px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}