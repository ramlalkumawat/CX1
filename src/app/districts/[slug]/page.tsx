import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { DISTRICTS } from '@/data/districts';
import DistrictPageClient from '@/components/DistrictPageClient';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DISTRICTS.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);

  if (!district) {
    return {
      title: 'District Not Found | CampaignX',
    };
  }

  return {
    title: `Election Management Company ${district.name} | Political Consulting`,
    description: `CampaignX is the leading political campaign strategy agency & election marketing consultant in ${district.name}, Rajasthan. Mapped for ${district.assemblySeats} assembly seats and ${district.totalBooths} booths.`,
    keywords: district.localKeywords.join(', '),
    alternates: {
      canonical: `https://www.campaignx.in/districts/${district.slug}`,
    },
  };
}

export default async function DistrictPage({ params }: RouteParams) {
  const { slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);

  if (!district) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-brand-dark">District Not Found</h1>
          <Link href="/" className="mt-4 inline-block text-brand-blue font-bold">
            Back to Command Center
          </Link>
        </div>
      </div>
    );
  }

  return <DistrictPageClient district={district} />;
}
