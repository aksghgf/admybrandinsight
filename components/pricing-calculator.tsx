import React, { useState } from 'react';

const CAMPAIGN_TYPES = [
  { label: 'Social Media', value: 'social', base: 500 },
  { label: 'Search Engine', value: 'search', base: 700 },
  { label: 'Display Ads', value: 'display', base: 600 },
  { label: 'Video Campaign', value: 'video', base: 900 },
];

const ADDONS = [
  { label: 'Advanced Analytics', value: 'analytics', price: 150 },
  { label: 'A/B Testing', value: 'abtest', price: 100 },
  { label: 'Priority Support', value: 'support', price: 80 },
];

export default function PricingCalculator() {
  const [campaignType, setCampaignType] = useState(CAMPAIGN_TYPES[0].value);
  const [duration, setDuration] = useState(1); // in months
  const [budget, setBudget] = useState(1000);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const basePrice = CAMPAIGN_TYPES.find(c => c.value === campaignType)?.base || 0;
  const addonsPrice = selectedAddons.reduce((sum, addon) => {
    const found = ADDONS.find(a => a.value === addon);
    return sum + (found ? found.price : 0);
  }, 0);
  const total = basePrice * duration + budget + addonsPrice;

  const handleAddonChange = (addon: string) => {
    setSelectedAddons(prev =>
      prev.includes(addon)
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };

  return (
    <div className="max-w-xl mx-auto bg-card/80 rounded-xl shadow-lg p-6 space-y-6 mt-6">
      <h2 className="text-2xl font-bold mb-2 text-center">Pricing Calculator</h2>
      <div className="space-y-4">
        {/* Campaign Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Campaign Type</label>
          <select
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
            value={campaignType}
            onChange={e => setCampaignType(e.target.value)}
          >
            {CAMPAIGN_TYPES.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
        {/* Duration */}
        <div>
          <label className="block text-sm font-medium mb-1">Duration (months)</label>
          <input
            type="number"
            min={1}
            max={24}
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
          />
        </div>
        {/* Budget */}
        <div>
          <label className="block text-sm font-medium mb-1">Ad Budget ($)</label>
          <input
            type="number"
            min={100}
            step={100}
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />
        </div>
        {/* Add-ons */}
        <div>
          <label className="block text-sm font-medium mb-1">Add-ons</label>
          <div className="flex flex-wrap gap-3">
            {ADDONS.map(addon => (
              <label key={addon.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedAddons.includes(addon.value)}
                  onChange={() => handleAddonChange(addon.value)}
                  className="accent-blue-500"
                />
                <span className="text-sm">{addon.label} (+${addon.price})</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Total */}
      <div className="mt-6 text-center">
        <span className="text-lg font-semibold">Estimated Total: </span>
        <span className="text-2xl font-bold text-blue-600">${total.toLocaleString()}</span>
      </div>
    </div>
  );
} 