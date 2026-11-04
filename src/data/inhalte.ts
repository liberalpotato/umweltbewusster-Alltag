import { getCollection } from 'astro:content';

/** Alle veröffentlichten Ratgeber, neueste zuerst. Entwürfe erscheinen nur lokal (npm run dev). */
export async function veroeffentlichteRatgeber() {
  const alle = await getCollection('ratgeber', ({ data }) => import.meta.env.DEV || !data.entwurf);
  return alle.sort((a, b) => b.data.stand.getTime() - a.data.stand.getTime());
}

export function datum(d: Date): string {
  return d.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
}
