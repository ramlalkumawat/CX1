import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SERVICES } from '@/data/services';
import ServicePageClient from '@/components/ServicePageClient';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | CampaignX',
    };
  }

  return {
    title: `${service.name} | CampaignX Election Strategy & Technology Rajasthan`,
    description: `${service.shortDesc} Expert deployment in Jaipur, Udaipur, Jodhpur, Kota, and all districts of Rajasthan. Book a strategy audit today.`,
    keywords: service.keywords.join(', '),
    alternates: {
      canonical: `https://www.campaignx.in/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: RouteParams) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-brand-dark">Service Not Found</h1>
          <Link href="/" className="mt-4 inline-block text-brand-blue font-bold">
            Back to Command Center
          </Link>
        </div>
      </div>
    );
  }

  return <ServicePageClient service={service} />;
}
