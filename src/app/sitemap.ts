import { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { DISTRICTS } from '@/data/districts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.campaignx.in';

  // Base routes
  const routes = [
    '',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  // Service routes
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // District routes
  const districtRoutes = DISTRICTS.map((district) => ({
    url: `${baseUrl}/districts/${district.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes, ...districtRoutes];
}
