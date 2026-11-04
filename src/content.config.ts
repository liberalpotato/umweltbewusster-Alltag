import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { bereichSlugs } from './data/bereiche';

const quelle = z.object({
  titel: z.string(),
  url: z.string().url(),
  hinweis: z.string().optional(),
});

const ratgeber = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ratgeber' }),
  schema: z.object({
    titel: z.string(),
    beschreibung: z.string().max(160),
    bereich: z.enum(bereichSlugs),
    fazit: z.string(),
    stand: z.coerce.date(),
    entwurf: z.boolean().default(false),
    quellen: z.array(quelle).min(1),
  }),
});

const lexikon = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lexikon' }),
  schema: z.object({
    begriff: z.string(),
    beschreibung: z.string().max(160),
    stand: z.coerce.date(),
    quellen: z.array(quelle).min(1),
  }),
});

export const collections = { ratgeber, lexikon };
