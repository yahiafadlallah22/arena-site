export interface MarketSource {
  label: string;
  country: string;
  url: string;
  csvUrl?: string;
  notes?: string;
}

export interface MarketInsight {
  id: string;
  title: string;
  country: string;
  city: string;
  summary: string;
  keyPoints: string[];
  publishedAt: string;
  author: string;
  source: string;
  csvSource?: string;
  chart: { label: string; value: number }[];
}

export const marketSources: MarketSource[] = [
  {
    label: 'Dubai Pulse - DLD Transactions',
    country: 'UAE',
    url: 'https://www.dubaipulse.gov.ae/organisation/dld/service/dld-transactions',
    csvUrl: 'https://www.dubaipulse.gov.ae/data/dld-transactions/dld_transactions-open',
    notes: 'CSV dataset, updated daily (DLD source via TABU system).'
  },
  {
    label: 'Dubai Pulse - DLD Residential Sale Index',
    country: 'UAE',
    url: 'https://www.dubaipulse.gov.ae/organisation/dld/service/dld-transactions',
    csvUrl: 'https://www.dubaipulse.gov.ae/data/dld-transactions/dld_residential_sale_index-open',
    notes: 'Official residential sale index series.'
  },
  {
    label: 'Dubai Land Department Open Data',
    country: 'UAE',
    url: 'https://dubailand.gov.ae/en/open-data/real-estate-data/',
    notes: 'Official property transaction and market data resources.'
  },
  {
    label: 'data.gov.ma (Morocco Open Data)',
    country: 'Morocco',
    url: 'https://www.data.gov.ma/',
    notes: 'National open data portal with CSV and XLS datasets by ministry.'
  },
  {
    label: 'Morocco Data Portal',
    country: 'Morocco',
    url: 'https://morocco.opendataforafrica.org/',
    notes: 'Country dashboards and downloadable statistical datasets.'
  },
  {
    label: 'UK Land Registry Price Paid Data',
    country: 'UK',
    url: 'https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads',
    csvUrl: 'https://landregistry.data.gov.uk/app/ppd/ppd_data?limit=all',
    notes: 'Monthly CSV of sold prices in England and Wales.'
  },
  {
    label: 'US Census Housing Data',
    country: 'USA',
    url: 'https://www.census.gov/housing/',
    notes: 'Major housing and vacancy datasets for market tracking.'
  },
];

export const sampleCSVBlocks = [
  {
    id: 'dubai-transactions-quarterly',
    label: 'Dubai Pulse DLD Transactions - Quarterly volume',
    country: 'UAE',
    city: 'Dubai',
    source: 'Dubai Pulse / DLD transactions open data',
    csv: `quarter,transactions,avg_price_aed\n2025-Q1,14782,1680000\n2025-Q2,15601,1712000\n2025-Q3,16540,1755000\n2025-Q4,17230,1810000\n2026-Q1,17910,1865000`
  },
  {
    id: 'dubai-offplan-area',
    label: 'Dubai Off-plan Area Mix',
    country: 'UAE',
    city: 'Dubai',
    source: 'DLD and broker transaction analytics',
    csv: `area,transactions\nBusiness Bay,3260\nDubai Marina,2810\nJVC,4020\nDubai Hills Estate,2570\nArjan,1930`
  },
  {
    id: 'morocco-casablanca-price',
    label: 'Casablanca Median Ticket Trend',
    country: 'Morocco',
    city: 'Casablanca',
    source: 'Public Morocco open data and market synthesis',
    csv: `period,median_ticket_mad\n2024-H1,980000\n2024-H2,1012000\n2025-H1,1065000\n2025-H2,1098000\n2026-H1,1132000`
  }
];

export const sampleInsights: MarketInsight[] = [
  {
    id: 'uae-q4-offplan-momentum',
    title: 'Dubai Off-Plan Momentum and Delivery Outlook',
    country: 'UAE',
    city: 'Dubai',
    summary: 'Strong demand for payment-plan projects with balanced delivery timeline concentration between 2026 and 2028.',
    keyPoints: [
      'Average launch ticket size remained resilient in prime communities.',
      'Developer competition is increasing incentive-led payment schedules.',
      'Delivery-date clustering creates opportunity for pre-handover repositioning.'
    ],
    publishedAt: '2026-03-14',
    author: 'Yahia Fadlallah',
    source: 'Dubai Land Department + Dubai Pulse',
    csvSource: 'dubai-transactions-quarterly',
    chart: [
      { label: 'Q1 2025', value: 14782 },
      { label: 'Q2 2025', value: 15601 },
      { label: 'Q3 2025', value: 16540 },
      { label: 'Q4 2025', value: 17230 },
      { label: 'Q1 2026', value: 17910 }
    ]
  },
  {
    id: 'morocco-casablanca-yield-watch',
    title: 'Casablanca Yield Watch: Investor Corridors and Demand Mix',
    country: 'Morocco',
    city: 'Casablanca',
    summary: 'Core city corridors show stable rental absorption and improved investor confidence in mixed-use zones.',
    keyPoints: [
      'Demand favors connected neighborhoods near business hubs.',
      'Mid-ticket units continue to drive transaction liquidity.',
      'Regulatory and land data transparency is improving investment screening.'
    ],
    publishedAt: '2026-02-27',
    author: 'Yahia Fadlallah',
    source: 'Morocco Open Data Portals + fiscal public datasets',
    csvSource: 'morocco-casablanca-price',
    chart: [
      { label: '2024-H1', value: 980000 },
      { label: '2024-H2', value: 1012000 },
      { label: '2025-H1', value: 1065000 },
      { label: '2025-H2', value: 1098000 },
      { label: '2026-H1', value: 1132000 }
    ]
  },
  {
    id: 'london-prime-vs-rental-pressure',
    title: 'London Prime Areas: Price Stability vs Rental Pressure',
    country: 'UK',
    city: 'London',
    summary: 'Prime neighborhoods maintain defensive pricing while rental demand creates stronger gross-yield windows in select postcodes.',
    keyPoints: [
      'Transaction pacing favors well-positioned inventory.',
      'Rental pressure supports investor hedging strategies.',
      'Data-backed submarket targeting is essential for entry timing.'
    ],
    publishedAt: '2026-01-18',
    author: 'Yahia Fadlallah',
    source: 'UK Land Registry + open housing data',
    chart: [
      { label: 'Zone 1', value: 81 },
      { label: 'Zone 2', value: 86 },
      { label: 'Zone 3', value: 89 },
      { label: 'Zone 4', value: 92 },
      { label: 'Zone 5', value: 88 }
    ]
  }
];
