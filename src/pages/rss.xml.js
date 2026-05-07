import rss from '@astrojs/rss';
import { newsEntries } from '../data/news/index.js';

export function GET(context) {
  return rss({
    title: 'ToolNav — AI Tools News',
    description: 'Short takes on product updates, launches, and pricing changes across the tools we cover. No hype — just what matters.',
    site: context.site,
    items: newsEntries.map((entry) => ({
      title: entry.title,
      pubDate: new Date(entry.date),
      description: entry.summary,
      link: `/news/${entry.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
