/**
 * Übersicht der Alltagsgegenstände. Bereiche mit `aktiv: false` erscheinen als „kommt bald“.
 * Unterkategorien werden nach und nach befüllt.
 */
export interface Unterkategorie {
  slug: string;
  name: string;
}

export interface AlltagsBereich {
  slug: string;
  name: string;
  beschreibung: string;
  icon: 'kleidung' | 'bad' | 'haushalt' | 'kueche' | 'garten' | 'reisen';
  aktiv: boolean;
  unterkategorien: Unterkategorie[];
}

export const alltagsBereiche: AlltagsBereich[] = [
  {
    slug: 'kleidung',
    name: 'Kleidung & Accessoires',
    beschreibung: 'Von Unterwäsche bis Jacke, dazu Schuhe, Accessoires und Taschen.',
    icon: 'kleidung',
    aktiv: true,
    unterkategorien: [
      { slug: 'unterwaesche', name: 'Unterwäsche' },
      { slug: 'socken', name: 'Socken' },
      { slug: 't-shirts', name: 'T-Shirts' },
      { slug: 'pullover-hoodies', name: 'Pullover & Hoodies' },
      { slug: 'hosen-jeans', name: 'Hosen & Jeans' },
      { slug: 'jacken', name: 'Jacken' },
      { slug: 'schuhe', name: 'Schuhe' },
      { slug: 'sportkleidung', name: 'Sportkleidung' },
      { slug: 'accessoires', name: 'Accessoires' },
      { slug: 'taschen', name: 'Taschen' },
    ],
  },
  {
    slug: 'bad-koerperpflege',
    name: 'Bad & Körperpflege',
    beschreibung: 'Zahnbürste, Seife, Duschgel, WC-Duft und mehr.',
    icon: 'bad',
    aktiv: false,
    unterkategorien: [],
  },
  {
    slug: 'haushalt-putzen',
    name: 'Haushalt & Putzen',
    beschreibung: 'Putzmittel, Spülmaschinen-Tabs, Wäsche, Mülleimer.',
    icon: 'haushalt',
    aktiv: false,
    unterkategorien: [],
  },
  {
    slug: 'kueche',
    name: 'Küche',
    beschreibung: 'Geschirr, Flaschen, Vorratsdosen und Küchengeräte.',
    icon: 'kueche',
    aktiv: false,
    unterkategorien: [],
  },
  {
    slug: 'garten',
    name: 'Garten & Balkon',
    beschreibung: 'Rasenmäher, Werkzeug, Erde und Pflanzen.',
    icon: 'garten',
    aktiv: false,
    unterkategorien: [],
  },
  {
    slug: 'freizeit-reisen',
    name: 'Freizeit & Reisen',
    beschreibung: 'Reisetasche, Rucksack, Sport- und Freizeitbedarf.',
    icon: 'reisen',
    aktiv: false,
    unterkategorien: [],
  },
];

/** Slugs aller Bereiche. Ratgeber ordnen sich über `bereich` einem dieser Bereiche zu. */
export const alltagSlugs = alltagsBereiche.map((b) => b.slug) as [string, ...string[]];

export function alltagName(slug: string): string {
  return findeBereich(slug)?.name ?? slug;
}

export function findeBereich(slug: string) {
  return alltagsBereiche.find((b) => b.slug === slug);
}

export function findeUnterkategorie(bereichSlug: string, slug: string) {
  return findeBereich(bereichSlug)?.unterkategorien.find((u) => u.slug === slug);
}

/** Florians Bewertungskriterien für Kleidung, in seiner Reihenfolge. */
export const kriterienKleidung = [
  { key: 'kreislauf', name: 'Kreislauf (Cradle to Cradle)', frage: 'Kann das Material vollständig zurück in die Natur oder wird es zu neuer Kleidung? Nimmt der Hersteller Altes zurück?' },
  { key: 'reparatur', name: 'Reparatur', frage: 'Nur bei Hosen, Jacken und Taschen: Wie einfach und transparent lässt sich das Produkt reparieren?' },
  { key: 'transparenz', name: 'Transparenz', frage: 'Erfährt man, wie das Produkt hergestellt wurde und was später damit passiert?' },
  { key: 'haltbarkeit', name: 'Haltbarkeit', frage: 'Hält das Produkt lange, mindestens ein Jahr in gutem Zustand?' },
  { key: 'klima', name: 'Klimabilanz', frage: 'Werden Emissionen gesenkt und der Rest nachvollziehbar und wirksam ausgeglichen?' },
  { key: 'siegel', name: 'Siegel', frage: 'Gibt es unabhängige Siegel wie Cradle to Cradle oder Grüner Knopf?' },
  { key: 'versand', name: 'Versand & Verpackung', frage: 'Wie ressourcenschonend ist der Versand?' },
  { key: 'preis', name: 'Preis', frage: 'Höchstens doppelt so teuer wie vergleichbare Ware großer Modeketten? Gibt es ein Abo, bei dem der Hersteller Eigentümer bleibt?' },
  { key: 'aussehen', name: 'Aussehen', frage: 'Sieht es modern aus?' },
] as const;

export type KriteriumKey = (typeof kriterienKleidung)[number]['key'];

/** Reparatur bewertet Florian nur bei hochwertigen Teilen (Hosen, Jacken, Rucksäcke und Taschen). */
export const reparaturUnterkategorien = ['hosen-jeans', 'jacken', 'taschen'];

/** Die Kriterien, die für eine Unterkategorie gelten. */
export function kriterienFuer(unterkategorie: string) {
  return kriterienKleidung.filter((k) => k.key !== 'reparatur' || reparaturUnterkategorien.includes(unterkategorie));
}

export type Status = 'gut' | 'teilweise' | 'fehlt' | 'offen';

export const statusLabel: Record<Status, string> = {
  gut: 'Erfüllt',
  teilweise: 'Teilweise',
  fehlt: 'Fehlt',
  offen: 'Offen',
};

/** Zählt, wie viele Kriterien eines Produkts welchen Status haben. */
export function zaehleStatus(kriterien: Record<string, { status: Status } | undefined>) {
  const zahl: Record<Status, number> = { gut: 0, teilweise: 0, fehlt: 0, offen: 0 };
  for (const k of Object.values(kriterien)) if (k) zahl[k.status] += 1;
  return zahl;
}
