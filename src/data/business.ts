import { BusinessSetup, MortgageService, Training } from '../types';

export const businessSetupServices: BusinessSetup[] = [
  {
    id: '1',
    type: 'freezone',
    title: 'Freezone Company Setup',
    description: 'Establish your business in one of UAE\'s 40+ free zones with 100% ownership, tax benefits, and simplified procedures.',
    pricing: {
      starting: 15000,
      currency: 'AED'
    },
    timeline: '3-5 business days',
    features: [
      '100% Foreign Ownership',
      '0% Corporate Tax',
      '0% Personal Income Tax',
      '100% Repatriation of Profits',
      'No Currency Restrictions',
      'Multiple Visa Options',
      'Virtual Office Available',
      'Bank Account Assistance'
    ],
    requirements: [
      'Passport copies of shareholders',
      'Proof of address',
      'Business plan (for some free zones)',
      'NOC from current sponsor (if applicable)'
    ],
    faq: [
      { question: 'Which free zone is best for my business?', answer: 'It depends on your business activity, budget, and visa requirements. We\'ll help you choose the right one.' },
      { question: 'Can I operate anywhere in UAE with a freezone license?', answer: 'Freezone companies operate within their designated zone but can trade internationally. For mainland operations, additional permissions may be needed.' },
      { question: 'How many visas can I get?', answer: 'Visa allocation depends on the free zone and office space. Typically, 1-6 visas are included in standard packages.' }
    ]
  },
  {
    id: '2',
    type: 'mainland',
    title: 'Mainland Company Setup',
    description: 'Register your company on the UAE mainland for unrestricted trading within the UAE market and government contracts.',
    pricing: {
      starting: 25000,
      currency: 'AED'
    },
    timeline: '5-10 business days',
    features: [
      'Trade Anywhere in UAE',
      'Government Contracts Eligible',
      'No Restriction on Business Activities',
      'Multiple Branch Offices',
      'Unlimited Visa Quota (with office)',
      'Local Market Access',
      'Prestigious Business Address'
    ],
    requirements: [
      'Passport copies of shareholders',
      'Emirates ID (for UAE residents)',
      'Tenancy contract (Ejari)',
      'Initial approval fees',
      'Trade name reservation'
    ],
    faq: [
      { question: 'Do I need a local partner?', answer: 'As of 2021, most activities allow 100% foreign ownership. Some strategic sectors still require local partnership.' },
      { question: 'What\'s the difference between mainland and freezone?', answer: 'Mainland companies can trade directly within the UAE, while freezone companies have restrictions but offer 100% ownership and tax benefits.' },
      { question: 'Can I convert my freezone company to mainland?', answer: 'Yes, but it involves a new registration process. We can assist with the transition.' }
    ]
  },
  {
    id: '3',
    type: 'offshore',
    title: 'Offshore Company Formation',
    description: 'Set up an offshore company for international trading, asset protection, and tax optimization.',
    pricing: {
      starting: 8000,
      currency: 'AED'
    },
    timeline: '3-5 business days',
    features: [
      'Asset Protection',
      'Tax Optimization',
      'Privacy & Confidentiality',
      'No Minimum Capital',
      'No Physical Office Required',
      'International Banking',
      'Property Ownership (JAFZA)'
    ],
    requirements: [
      'Passport copies',
      'Proof of address',
      'Bank reference letter',
      'CV/Profile of shareholders'
    ],
    faq: [
      { question: 'Can an offshore company do business in UAE?', answer: 'No, offshore companies cannot conduct business within the UAE. They are designed for international operations.' },
      { question: 'Which offshore jurisdiction is best?', answer: 'JAFZA, RAK ICC, and Ajman Offshore are popular choices. Each has different benefits and costs.' }
    ]
  }
];

export const mortgageServices: MortgageService[] = [
  {
    id: '1',
    title: 'Home Mortgage',
    description: 'Finance your dream home in the UAE with competitive interest rates and flexible repayment terms up to 25 years.',
    eligibility: [
      'Minimum salary AED 15,000',
      'Minimum 6 months employment',
      'Age 21-65 years',
      'Valid UAE residency'
    ],
    features: [
      'Up to 80% financing for residents',
      'Up to 50% financing for non-residents',
      'Interest rates from 3.99%',
      'Terms up to 25 years',
      'Fixed and variable rate options',
      'Early settlement options',
      'Free property valuation',
      'Dedicated mortgage advisor'
    ],
    faq: [
      { question: 'How much can I borrow?', answer: 'Typically up to 80% of the property value for residents, depending on your income and credit profile.' },
      { question: 'What documents do I need?', answer: 'Passport, visa, Emirates ID, salary certificate, 6 months bank statements, and property documents.' },
      { question: 'How long does approval take?', answer: 'Pre-approval takes 2-3 days. Full approval after property selection takes 5-10 working days.' }
    ]
  },
  {
    id: '2',
    title: 'Commercial Mortgage',
    description: 'Finance commercial properties, offices, or retail spaces with tailored mortgage solutions for businesses.',
    eligibility: [
      'Minimum 2 years business operation',
      'Positive financial statements',
      'Valid trade license',
      'Property in approved locations'
    ],
    features: [
      'Up to 60% financing',
      'Competitive business rates',
      'Terms up to 15 years',
      'Multiple property financing',
      'Refinancing options',
      'Expert advisory services'
    ],
    faq: [
      { question: 'Can I mortgage off-plan properties?', answer: 'Yes, select developers and projects qualify for off-plan financing.' },
      { question: 'Are there additional fees?', answer: 'Processing fee (1%), property valuation fee, and mortgage registration fee (0.25% of loan amount).' }
    ]
  },
  {
    id: '3',
    title: 'Personal Loan',
    description: 'Access funds for any personal need with competitive personal loan options from UAE banks.',
    eligibility: [
      'Minimum salary AED 5,000',
      'Minimum 3 months employment',
      'Age 21-60 years',
      'Valid UAE residency'
    ],
    features: [
      'Up to 20x salary financing',
      'Interest rates from 5.99%',
      'Terms up to 4 years',
      'Quick approval process',
      'No collateral required',
      'Salary transfer optional'
    ],
    faq: [
      { question: 'What can I use a personal loan for?', answer: 'Personal loans can be used for any purpose - travel, education, home renovation, debt consolidation, etc.' }
    ]
  }
];

export const trainingCourses: Training[] = [
  {
    id: '1',
    title: 'Real Estate Investment Masterclass',
    category: 'Real Estate',
    duration: '2 Days',
    price: 2999,
    currency: 'AED',
    description: 'Learn the secrets of successful real estate investment in the UAE from industry expert Yahia Fadlallah with 22 years of market experience.',
    highlights: [
      'Market analysis techniques',
      'Off-plan investment strategies',
      'ROI calculation methods',
      'Negotiation tactics',
      'Portfolio building',
      'Risk management',
      'Network access',
      'Certificate of completion'
    ],
    schedule: [
      'Day 1: Market Fundamentals & Analysis',
      'Day 2: Investment Strategies & Portfolio Building'
    ],
    instructor: 'Yahia Fadlallah',
    featured: true
  },
  {
    id: '2',
    title: 'Real Estate Broker Certification',
    category: 'Real Estate',
    duration: '5 Days',
    price: 4999,
    currency: 'AED',
    description: 'Comprehensive training program to become a certified real estate broker in Dubai, including RERA exam preparation.',
    highlights: [
      'RERA regulations',
      'Property valuation',
      'Sales techniques',
      'Legal documentation',
      'Client management',
      'Market research',
      'RERA exam preparation',
      'Job placement assistance'
    ],
    schedule: [
      'Days 1-2: Regulations & Legal Framework',
      'Days 3-4: Sales & Marketing',
      'Day 5: Exam Preparation & Assessment'
    ],
    instructor: 'Yahia Fadlallah & Industry Experts',
    featured: true
  },
  {
    id: '3',
    title: 'Property Management Professional',
    category: 'Real Estate',
    duration: '3 Days',
    price: 3499,
    currency: 'AED',
    description: 'Master the art of property management, from tenant relations to maintenance and financial reporting.',
    highlights: [
      'Tenant screening',
      'Lease management',
      'Maintenance coordination',
      'Financial reporting',
      'Legal compliance',
      'Technology tools',
      'Case studies',
      'Professional certification'
    ],
    schedule: [
      'Day 1: Fundamentals & Legal',
      'Day 2: Operations & Technology',
      'Day 3: Financial Management'
    ],
    featured: false
  },
  {
    id: '4',
    title: 'Investment Analysis & Portfolio Management',
    category: 'Investment',
    duration: '2 Days',
    price: 3999,
    currency: 'AED',
    description: 'Learn advanced investment analysis techniques and portfolio management strategies for building wealth.',
    highlights: [
      'Financial analysis',
      'Portfolio diversification',
      'Risk assessment',
      'Market timing',
      'Alternative investments',
      'Tax optimization',
      'Retirement planning',
      'Wealth preservation'
    ],
    schedule: [
      'Day 1: Analysis Techniques',
      'Day 2: Portfolio Management'
    ],
    instructor: 'Yahia Fadlallah',
    featured: true
  }
];

export const getBusinessSetupByType = (type: string) =>
  businessSetupServices.filter(b => b.type === type);

export const getFeaturedTrainings = () =>
  trainingCourses.filter(t => t.featured);
