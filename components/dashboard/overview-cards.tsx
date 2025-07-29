'use client';

import React from 'react';
import { MetricCard } from './metric-card';
import { MetricCard as MetricCardType } from '@/lib/types';

interface OverviewCardsProps {
  cards: MetricCardType[];
  loading?: boolean;
}

export function OverviewCards({ cards, loading }: OverviewCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <MetricCard key={index} data={card} loading={loading} />
      ))}
    </div>
  );
}