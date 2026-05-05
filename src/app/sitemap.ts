import { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const routes = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/services/managed-services`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/services/cybersecurity`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/services/cloud-solutions`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/services/software`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/services/hardware`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/solutions`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/cookie-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map(route => ({ ...route, lastModified: now }));
}
