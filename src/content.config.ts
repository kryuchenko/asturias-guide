import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string().optional(),
    lang: z.string().default('ru'),
    source: z.object({ label: z.string(), url: z.string() }).optional(),
  }),
});

export const collections = { guides };
