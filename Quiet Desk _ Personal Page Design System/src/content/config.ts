import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    pinned: z.boolean().optional().default(false),
    dek: z.string(),
    readTime: z.string().optional(),
  }),
});

export const collections = { articles };
