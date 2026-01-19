import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishDate: z.coerce.date(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  notes: notesCollection,
};
