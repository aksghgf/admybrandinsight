export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  color: string;
}

export interface ChartData {
  name: string;
  value: number;
  revenue?: number;
  users?: number;
  conversions?: number;
  date?: string;
}

export interface TableData {
  id: string;
  campaign: string;
  channel: string;
  clicks: number;
  conversions: number;
  revenue: number;
  ctr: number;
  status: 'active' | 'paused' | 'completed';
  date: string;
}

export interface DashboardFilters {
  dateRange: string;
  channel: string;
  status: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}