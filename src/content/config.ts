import { defineCollection, z } from 'astro:content';

const eventos = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    invitados: z.array(z.string()),
    description: z.string(),
    isFeatured: z.boolean().default(false), // Para el evento principal de jóvenes
  }),
});

export const collections = { eventos };