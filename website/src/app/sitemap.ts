import type { MetadataRoute } from 'next';
import BLOGS from '@/data/blogs.json';
import { SITE_URL } from '@/config/site';

export const dynamic = 'force-static';

const STATIC_PATHS: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services/meguru', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/adet', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/service', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/news', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/recruit', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy/itool', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = STATIC_PATHS.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
  const articles = BLOGS.flatMap((blog) => blog.articles).map((article) => ({
    url: `${SITE_URL}/blog/${article.id}`,
    changeFrequency: 'yearly' as const,
    priority: 0.4,
  }));
  return [...pages, ...articles];
}
