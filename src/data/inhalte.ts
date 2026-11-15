import { getCollection } from 'astro:content';

/**
 * Entwürfe zeigen wir lokal (npm run dev) und in Netlify-Vorschauen (CONTEXT=deploy-preview),
 * aber nie auf der Live-Seite (CONTEXT=production).
 */
export const zeigeEntwuerfe = import.meta.env.DEV || (process.env.CONTEXT !== undefined && process.env.CONTEXT !== 'production');

/** Alle veröffentlichten Ratgeber, neueste zuerst. */
export async function veroeffentlichteRatgeber() {
  const alle = await getCollection('ratgeber', ({ data }) => zeigeEntwuerfe || !data.entwurf);
  return alle.sort((a, b) => b.data.stand.getTime() - a.data.stand.getTime());
}

/** Alle sichtbaren Produkte, bewertete zuerst (höchste Punktzahl oben), dann alphabetisch. */
export async function sichtbareProdukte() {
  const alle = await getCollection('produkte', ({ data }) => zeigeEntwuerfe || !data.entwurf);
  return alle.sort((a, b) => {
    const pa = a.data.punkte ?? -1;
    const pb = b.data.punkte ?? -1;
    if (pa !== pb) return pb - pa;
    return a.data.marke.localeCompare(b.data.marke, 'de');
  });
}

export function datum(d: Date): string {
  return d.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
}

/** Geschätzte Lesezeit in Minuten (rund 200 Wörter pro Minute, HTML-Bausteine nicht mitgezählt). */
export function lesezeit(text: string | undefined): number {
  const ohneHtml = (text ?? '').replace(/<[^>]+>/g, ' ');
  const woerter = ohneHtml.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(woerter / 200));
}
