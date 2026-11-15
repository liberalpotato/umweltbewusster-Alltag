/**
 * Übersicht der Alltagsgegenstände. Bereiche mit `aktiv: false` erscheinen als „kommt bald“.
 * Unterkategorien werden nach und nach befüllt.
 */
export interface Unterkategorie {
  slug: string;
  name: string;
  /**
   * Florians Wunschvorstellung: Wie sähe das nachhaltigste Modell für diese Kategorie aus?
   * Gibt nur Florian vor (2026-11-15). Erscheint als Kasten oben auf der Kategorieseite.
   */
  wunsch?: { text: string; schritte: string[] };
}

export interface AlltagsBereich {
  slug: string;
  name: string;
  beschreibung: string;
  icon: 'kleidung' | 'bad' | 'haushalt' | 'kueche' | 'garten' | 'reisen';
  /** Erkennungsfarbe des Bereichs (Magazin-Look), siehe .farbe-* in global.css */
  farbe: 'beere' | 'himmel' | 'orange' | 'sonne' | 'mint' | 'lila';
  aktiv: boolean;
  unterkategorien: Unterkategorie[];
}

export const alltagsBereiche: AlltagsBereich[] = [
  {
    slug: 'kleidung',
    name: 'Kleidung & Accessoires',
    beschreibung: 'Von Unterwäsche bis Jacke, dazu Schuhe, Accessoires und Taschen.',
    icon: 'kleidung',
    farbe: 'beere',
    aktiv: true,
    unterkategorien: [
      { slug: 'unterwaesche', name: 'Unterwäsche' },
      { slug: 'socken', name: 'Socken' },
      { slug: 't-shirts', name: 'T-Shirts' },
      { slug: 'pullover-hoodies', name: 'Pullover & Hoodies' },
      { slug: 'hosen-jeans', name: 'Hosen & Jeans' },
      { slug: 'jacken', name: 'Jacken' },
      {
        slug: 'schuhe',
        name: 'Schuhe',
        wunsch: {
          text: 'Die Sohle nutzt sich ab, der Rest des Schuhs kann viel länger halten. Ideal wäre deshalb ein Schuh, den der Hersteller nur vermietet. Er bleibt Eigentümer und kümmert sich darum, dass der Schuh möglichst lange genutzt wird.',
          schritte: [
            'Du mietest den Schuh, statt ihn zu kaufen.',
            'Ist er abgenutzt oder gefällt er dir nicht mehr, gibst du ihn zurück.',
            'Der Hersteller prüft ihn, reinigt ihn, repariert ihn und erneuert die Sohle.',
            'Dann geht der Schuh an die nächste Person.',
          ],
        },
      },
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
    farbe: 'himmel',
    aktiv: false,
    unterkategorien: [],
  },
  {
    slug: 'haushalt-putzen',
    name: 'Haushalt & Putzen',
    beschreibung: 'Putzmittel, Spülmaschinen-Tabs, Wäsche, Mülleimer.',
    icon: 'haushalt',
    farbe: 'orange',
    aktiv: false,
    unterkategorien: [],
  },
  {
    slug: 'kueche',
    name: 'Küche',
    beschreibung: 'Geschirr, Flaschen, Vorratsdosen und Küchengeräte.',
    icon: 'kueche',
    farbe: 'sonne',
    aktiv: false,
    unterkategorien: [],
  },
  {
    slug: 'garten',
    name: 'Garten & Balkon',
    beschreibung: 'Rasenmäher, Werkzeug, Erde und Pflanzen.',
    icon: 'garten',
    farbe: 'mint',
    aktiv: false,
    unterkategorien: [],
  },
  {
    slug: 'freizeit-reisen',
    name: 'Freizeit & Reisen',
    beschreibung: 'Reisetasche, Rucksack, Sport- und Freizeitbedarf.',
    icon: 'reisen',
    farbe: 'lila',
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
  { key: 'reparatur', name: 'Reparatur', frage: 'Nur bei Hosen, Jacken, Taschen und Schuhen: Wie einfach und transparent lässt sich das Produkt reparieren?' },
  { key: 'transparenz', name: 'Transparenz', frage: 'Erfährt man, wie das Produkt hergestellt wurde und was später damit passiert?' },
  { key: 'haltbarkeit', name: 'Haltbarkeit', frage: 'Hält das Produkt lange, mindestens ein Jahr in gutem Zustand?' },
  { key: 'klima', name: 'Klimabilanz', frage: 'Werden Emissionen gesenkt und der Rest nachvollziehbar und wirksam ausgeglichen?' },
  { key: 'siegel', name: 'Siegel', frage: 'Gibt es unabhängige Siegel wie Cradle to Cradle oder Grüner Knopf?' },
  { key: 'versand', name: 'Versand & Verpackung', frage: 'Wie ressourcenschonend ist der Versand?' },
  { key: 'preis', name: 'Preis', frage: 'Höchstens doppelt so teuer wie vergleichbare Ware großer Modeketten? Gibt es ein Abo, bei dem der Hersteller Eigentümer bleibt?' },
  { key: 'aussehen', name: 'Aussehen & Tragegefühl', frage: 'Sieht es modern aus, und wie trägt es sich?' },
] as const;

export type KriteriumKey = (typeof kriterienKleidung)[number]['key'];

/** Reparatur bewertet Florian nur bei hochwertigen Teilen (Hosen, Jacken, Rucksäcke und Taschen, Schuhe). */
export const reparaturUnterkategorien = ['hosen-jeans', 'jacken', 'taschen', 'schuhe'];

/**
 * Florians Leder-Check (2026-11-15): Leder ist nur in Ordnung, wenn alle fünf Bedingungen erfüllt sind.
 * Wird auf Produktseiten mit Leder als eigene Checkliste gezeigt (Feld `leder`).
 */
export const lederKriterien = [
  { key: 'chromfrei', name: 'Chromfrei gegerbt', frage: 'Wurde pflanzlich, mit Zeolith oder anders ohne Chrom gegerbt?' },
  { key: 'beschichtung', name: 'Ohne Kunststoffbeschichtung', frage: 'Ist das Leder frei von Kunststoff-Finish?' },
  { key: 'abbautest', name: 'Abbaubarkeit belegt', frage: 'Zeigt ein Test, dass sich das Leder abbaut?' },
  { key: 'ruecknahme', name: 'Rücknahme', frage: 'Nimmt der Hersteller alte Schuhe zurück?' },
  { key: 'sohle', name: 'Sohle tauschbar', frage: 'Lässt sich die Sohle erneuern?' },
] as const;

export type LederKey = (typeof lederKriterien)[number]['key'];

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
