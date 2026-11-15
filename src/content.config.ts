import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { alltagSlugs } from './data/alltag';

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
    /** Slug eines Bereichs aus src/data/alltag.ts, z. B. 'kleidung'. */
    bereich: z.enum(alltagSlugs),
    fazit: z.string(),
    stand: z.coerce.date(),
    entwurf: z.boolean().default(false),
    /** Titelbild aus public/bilder/, z. B. '/bilder/mein-beitrag.svg'. Nur mit geklärter Lizenz. */
    titelbild: z.string().optional(),
    titelbildAlt: z.string().optional(),
    quellen: z.array(quelle).min(1),
  }),
});

const lexikon = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lexikon' }),
  schema: z.object({
    begriff: z.string(),
    beschreibung: z.string().max(160),
    stand: z.coerce.date(),
    titelbild: z.string().optional(),
    titelbildAlt: z.string().optional(),
    quellen: z.array(quelle).min(1),
  }),
});

const kriterium = z.object({
  /** gut = erfüllt, teilweise = teilweise erfüllt, fehlt = nicht erfüllt, offen = keine Angaben gefunden oder Florian entscheidet */
  status: z.enum(['gut', 'teilweise', 'fehlt', 'offen']),
  text: z.string(),
});

const produkte = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produkte' }),
  schema: z.object({
    name: z.string(),
    marke: z.string(),
    bereich: z.string(),
    unterkategorie: z.string(),
    beschreibung: z.string().max(160),
    kurz: z.string(),
    material: z.string(),
    preis: z.string(),
    shop: z.object({ name: z.string(), url: z.string().url() }),
    /** Punktzahl 0–10, vergibt ausschließlich Florian. Leer = „Bewertung folgt“. */
    punkte: z.number().min(0).max(10).optional(),
    /** Kurzer Tipp von Florian, erscheint auf der Produktseite unter dem Shop-Knopf. */
    tipp: z.string().optional(),
    kriterien: z.object({
      kreislauf: kriterium,
      /** Nur bei Hosen, Jacken und Taschen (siehe reparaturUnterkategorien). */
      reparatur: kriterium.optional(),
      transparenz: kriterium,
      haltbarkeit: kriterium,
      klima: kriterium,
      siegel: kriterium,
      versand: kriterium,
      preis: kriterium,
      aussehen: kriterium,
    }),
    pluspunkte: z.array(z.string()),
    minuspunkte: z.array(z.string()),
    stand: z.coerce.date(),
    /** Entwürfe erscheinen nur lokal und in Netlify-Vorschauen, nicht auf der Live-Seite. */
    entwurf: z.boolean().default(true),
    quellen: z.array(quelle).min(1),
  }),
});

export const collections = { ratgeber, lexikon, produkte };
