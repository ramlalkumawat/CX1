import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import WhatsAppButton from '@/components/WhatsAppButton';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CampaignX | Election Management & Political Consulting Company Rajasthan',
  description: 'CampaignX is Rajasthan\'s leading election management, political consulting & campaign technology company. We specialize in war rooms, voter CRM, digital marketing, AI voice calls, and booth management across Jaipur, Jodhpur, Udaipur, and all 33 districts.',
  keywords: 'Election Management Company Rajasthan, Political Consulting Jaipur, Election Campaign Agency Udaipur, Election Marketing Kota, Political Strategy Bhilwara, Election Consultant Jodhpur, Booth Management Rajasthan, Political Digital Marketing Rajasthan, Election Software Rajasthan, Political Campaign Company Jaipur, Panna Pramukhs Rajasthan',
  openGraph: {
    title: 'CampaignX | Election Management & Political Consulting Rajasthan',
    description: 'Rajasthan\'s leading election management, political consulting & campaign technology company. Dominate elections with scientific survey research, advanced voter CRM, and AI operations.',
    url: 'https://www.campaignx.in',
    siteName: 'CampaignX',
    images: [
      {
        url: 'https://www.campaignx.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CampaignX Election Management & Technology Company',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CampaignX | Election Management & Political Consulting Company',
    description: 'Advance your election campaign in Rajasthan with scientific analytics, voter CRM, AI dialing, and micro-targeted digital campaigns.',
    images: ['https://www.campaignx.in/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.campaignx.in',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'CampaignX',
  'url': 'https://www.campaignx.in',
  'logo': 'https://www.campaignx.in/logo.png',
  'sameAs': [
    'https://www.facebook.com/share/18ziWwo382/',
    'https://www.instagram.com/_campaignx?igsh=MXRscXJyNXkzN3NpMQ=='
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+91-6375983593',
    'contactType': 'sales',
    'areaServed': 'IN',
    'availableLanguage': ['Hindi', 'English']
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'CampaignX - Election Management & Political Consulting Company',
  'image': 'https://www.campaignx.in/logo.png',
  'telephone': '+91-6375983593',
  'email': 'hello.campaignx@gmail.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'IT Park Road, Mansarovar',
    'addressLocality': 'Jaipur',
    'addressRegion': 'Rajasthan',
    'postalCode': '302020',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '26.8530',
    'longitude': '75.7600'
  },
  'url': 'https://www.campaignx.in',
  'priceRange': '₹₹₹',
  'areaServed': {
    '@type': 'AdministrativeArea',
    'name': 'Rajasthan'
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://www.campaignx.in'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col">
        <Providers>
          {children}
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
