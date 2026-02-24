import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number().int(),
    published: z.boolean().default(false),
    status: z.enum(["upcoming", "ongoing", "past"]).default("upcoming"),
    type: z.enum(["workshop", "talk", "panel", "summer-school", "other"]).default("workshop"),
    tagline: z.string().optional(),
    track: z.enum(['technical', 'human-centered']).optional(),
    accent: z.string().optional(),
    accent2: z.string().optional(),
    order: z.number().optional(),
    nav: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
  }),
});

export const collections = { events };
