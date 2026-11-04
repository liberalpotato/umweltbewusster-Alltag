export interface Bereich {
  slug: string;
  name: string;
  beschreibung: string;
}

export const bereiche: Bereich[] = [
  {
    slug: 'kochen-essen',
    name: 'Kochen & Essen',
    beschreibung: 'Ernährung, Einkaufen, sparsam kochen und Lebensmittel retten.',
  },
  {
    slug: 'wohnen-haushalt',
    name: 'Wohnen & Haushalt',
    beschreibung: 'Strom, Heizen, Waschen, Putzen und Möbel.',
  },
  {
    slug: 'mobilitaet',
    name: 'Mobilität',
    beschreibung: 'Alltagswege, Auto oder nicht, Urlaub und Reisen.',
  },
  {
    slug: 'kleidung-konsum',
    name: 'Kleidung & Konsum',
    beschreibung: 'Weniger kaufen, gebraucht, reparieren und Materialien.',
  },
];

export const bereichSlugs = bereiche.map((b) => b.slug) as [string, ...string[]];

export function bereichName(slug: string): string {
  return bereiche.find((b) => b.slug === slug)?.name ?? slug;
}
