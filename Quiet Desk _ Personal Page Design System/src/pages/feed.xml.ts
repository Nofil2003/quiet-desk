import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles');
  const sorted = articles.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  return rss({
    title: 'quiet desk',
    description: "nofil's ramblings — cs, music, and late-night thoughts.",
    site: context.site!,
    items: sorted.map((a) => ({
      title: a.data.title,
      pubDate: new Date(a.data.date),
      description: a.data.dek,
      link: `/articles/${a.slug}/`,
    })),
  });
}
