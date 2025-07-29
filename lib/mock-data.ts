import { MetricCard, ChartData, TableData } from './types';

export const metricCards: MetricCard[] = [
  {
    title: 'Total Revenue',
    value: '$124,560',
    change: 12.5,
    changeType: 'increase',
    icon: 'DollarSign',
    color: 'text-green-600'
  },
  {
    title: 'Active Users',
    value: '8,429',
    change: 8.2,
    changeType: 'increase',
    icon: 'Users',
    color: 'text-blue-600'
  },
  {
    title: 'Conversions',
    value: '1,234',
    change: -3.1,
    changeType: 'decrease',
    icon: 'Target',
    color: 'text-purple-600'
  },
  {
    title: 'Growth Rate',
    value: '23.4%',
    change: 5.7,
    changeType: 'increase',
    icon: 'TrendingUp',
    color: 'text-orange-600'
  }
];

export const revenueData: ChartData[] = [
  { name: 'Jan', revenue: 45000, date: '2024-01' },
  { name: 'Feb', revenue: 52000, date: '2024-02' },
  { name: 'Mar', revenue: 48000, date: '2024-03' },
  { name: 'Apr', revenue: 61000, date: '2024-04' },
  { name: 'May', revenue: 78000, date: '2024-05' },
  { name: 'Jun', revenue: 89000, date: '2024-06' },
  { name: 'Jul', revenue: 94000, date: '2024-07' },
  { name: 'Aug', revenue: 103000, date: '2024-08' },
  { name: 'Sep', revenue: 98000, date: '2024-09' },
  { name: 'Oct', revenue: 115000, date: '2024-10' },
  { name: 'Nov', revenue: 124000, date: '2024-11' },
  { name: 'Dec', revenue: 124560, date: '2024-12' }
];

export const usersData: ChartData[] = [
  { name: 'Desktop', users: 4250, value: 4250 },
  { name: 'Mobile', users: 3180, value: 3180 },
  { name: 'Tablet', users: 999, value: 999 }
];

export const conversionsData: ChartData[] = [
  { name: 'Email', conversions: 450, value: 450 },
  { name: 'Social', conversions: 320, value: 320 },
  { name: 'Search', conversions: 280, value: 280 },
  { name: 'Direct', conversions: 184, value: 184 }
];

export const tableData: TableData[] = [
  {
    id: '1',
    campaign: 'Holiday Sale 2024',
    channel: 'Google Ads',
    clicks: 12450,
    conversions: 234,
    revenue: 23400,
    ctr: 1.88,
    status: 'active',
    date: '2024-12-01'
  },
  {
    id: '2',
    campaign: 'Black Friday Special',
    channel: 'Facebook Ads',
    clicks: 8920,
    conversions: 156,
    revenue: 18720,
    ctr: 1.75,
    status: 'completed',
    date: '2024-11-29'
  },
  {
    id: '3',
    campaign: 'Winter Collection',
    channel: 'Instagram',
    clicks: 6780,
    conversions: 89,
    revenue: 12340,
    ctr: 1.31,
    status: 'active',
    date: '2024-12-05'
  },
  {
    id: '4',
    campaign: 'Year End Clearance',
    channel: 'LinkedIn',
    clicks: 4320,
    conversions: 67,
    revenue: 8950,
    ctr: 1.55,
    status: 'paused',
    date: '2024-12-10'
  },
  {
    id: '5',
    campaign: 'New Customer Promo',
    channel: 'Twitter',
    clicks: 5670,
    conversions: 92,
    revenue: 11280,
    ctr: 1.62,
    status: 'active',
    date: '2024-12-08'
  },
  {
    id: '6',
    campaign: 'Retargeting Campaign',
    channel: 'Google Display',
    clicks: 9850,
    conversions: 178,
    revenue: 19650,
    ctr: 1.81,
    status: 'active',
    date: '2024-12-12'
  }
];

export const generateRealTimeData = () => {
  const variance = (Math.random() - 0.5) * 0.1; // ±5% variance
  return {
    revenue: Math.round(124560 * (1 + variance)),
    users: Math.round(8429 * (1 + variance)),
    conversions: Math.round(1234 * (1 + variance)),
    growth: Math.round(23.4 * (1 + variance) * 10) / 10
  };
};