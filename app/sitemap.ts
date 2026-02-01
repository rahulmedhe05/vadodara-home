import { MetadataRoute } from 'next';

const BASE_URL = 'https://vadodarahomes.in';

// All area slugs
const areas = [
  'ajwa-road', 'akota', 'alkapuri', 'atladara', 'bhayli', 'bill', 'chhani',
  'dabhoi-road', 'danteshwar', 'diwalipura', 'ellora-park', 'fatehgunj', 'gorwa',
  'gotri', 'harni', 'jetalpur', 'kaladarshan', 'kalali', 'kareli', 'karelibagh',
  'karelibaug', 'karodia', 'lalbaug', 'laxmipura', 'makarpura', 'manjalpur',
  'nandesari', 'navapura', 'new-sama-road', 'new-vip-road', 'nizampura',
  'old-padra-road', 'padra', 'panigate', 'pratapnagar', 'productivity-road',
  'race-course', 'race-course-circle', 'raopura', 'refinery-road', 'salatwada',
  'sama', 'sama-savli-road', 'sayajigunj', 'sevasi', 'sindhrot', 'subhanpura',
  'tandalja', 'tarsali', 'tp-13', 'undera', 'vadsar-road', 'vasna-bhayli',
  'vasna-bhayli-road', 'vasna-road', 'vemali', 'villas-for-sale', 'vip-road',
  'vishwamitri', 'wadi', 'waghodia', 'waghodia-road'
];

// All keyword slugs
const keywords = [
  'real-estate-in-vadodara', 'real-estate-agents-near-me-in-vadodara',
  'real-estate-near-me-in-vadodara', 'property-consultant-in-vadodara',
  'real-estate-consultant-in-vadodara', 'buy-property-in-vadodara',
  'buy-commercial-property-in-vadodara', 'flats-for-sale-near-me-in-vadodara',
  'flats-for-sale-in-vadodara', '1-bhk-flat-for-sale-in-vadodara',
  '2-bhk-flat-for-sale-in-vadodara', '3-bhk-flat-for-sale-in-vadodara',
  'apartments-for-sale-in-vadodara', 'houses-for-sale-in-vadodara',
  'villas-for-sale-in-vadodara', 'ready-to-move-flats-in-vadodara',
  'office-space-for-sale-in-vadodara', 'office-space-for-rent-in-vadodara',
  'commercial-property-for-sale-in-vadodara', 'commercial-property-for-rent-in-vadodara',
  'shop-for-sale-in-vadodara', 'shop-for-rent-in-vadodara',
  'showroom-space-in-vadodara', 'industrial-property-in-vadodara',
  'commercial-property-in-vadodara', 'new-residential-projects-in-vadodara',
  'independent-house-for-sale-in-vadodara', 'showroom-for-sale-in-vadodara',
  'it-office-space-for-sale-in-vadodara', 'commercial-plots-for-sale-in-vadodara'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Home page
  const homePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/vadodara`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Area pages - high priority for local SEO
  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${BASE_URL}/${area}-vadodara`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Keyword pages - high priority for service SEO
  const keywordPages: MetadataRoute.Sitemap = keywords.map((keyword) => ({
    url: `${BASE_URL}/${keyword}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...homePages, ...areaPages, ...keywordPages];
}
