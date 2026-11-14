# Umweltbewusster Alltag

Ehrlicher, nicht-kommerzieller Ratgeber: Wer nach der nachhaltigsten Lösung für eine Alltagsfrage sucht, soll hier die beste ehrliche Antwort finden. Betreiber: Florian. Sprache der Seite: Deutsch.

Technik: Astro 5, statisch, gehostet bei Netlify. `npm run build` muss fehlerfrei laufen, bevor ein Pull Request entsteht.

## Inhalte

- Ratgeber: `src/content/ratgeber/<slug>.md`, Lexikon: `src/content/lexikon/<slug>.md`. Pflichtfelder siehe `src/content.config.ts`.
- `entwurf: true` blendet einen Ratgeber im Live-Build aus.
- Themenbereiche der Ratgeber stehen in `src/data/bereiche.ts`.
- Alltagsgegenstände (Bereiche, Unterkategorien, Florians Kriterien) stehen in `src/data/alltag.ts`. Bereiche mit `aktiv: false` erscheinen als „Kommt bald“.
- Produkte: `src/content/produkte/<marke-produkt>.md`. `entwurf: true` (Standard) zeigt ein Produkt nur lokal und in Netlify-Vorschauen.

## Bevor ein Text entsteht

Vor jedem Text, der veröffentlicht werden soll, Florian fragen, was ihm bei genau diesem Thema wichtig ist. Erst danach schreiben.

## Regeln für jeden Ratgeber

1. Titel ist eine echte Suchfrage („Was ist nachhaltiger: …?“). `beschreibung` ist ein Satz mit dem Fazit, höchstens 160 Zeichen.
2. `fazit`: zwei bis drei Sätze mit der klaren Empfehlung.
3. Rangfolge immer: vermeiden → weiter nutzen, reparieren, gebraucht, leihen → bester Neukauf.
4. Jede Zahl braucht eine Quelle in `quellen`, und die Quellseite muss tatsächlich geöffnet worden sein. Unabhängige Quellen bevorzugen (Umweltbundesamt, Öko-Institut, ifeu, Verbraucherzentrale, begutachtete Studien). Herstellerangaben als solche kennzeichnen.
5. Unsicherheit offen benennen. Einschätzungen ohne Zahl als Einschätzung kennzeichnen.
6. Keine Affiliate-Links, keine Produktwerbung, keine Shop-Links als Empfehlung (Ausnahme: Produktseiten, siehe unten).
7. Kurze Sätze, Zwischenüberschriften als Unterfragen, Abschnitt „Typische Irrtümer“ am Ende.
8. `stand` auf das Datum der Recherche setzen.

Neue Beiträge kommen immer als Pull Request mit Netlify-Vorschau. Florian liest und gibt frei, nichts wird direkt auf `main` veröffentlicht.

## Regeln für Produktseiten

1. Die Punktzahl (`punkte`, 0 bis 10) vergibt nur Florian. Nie selbst eintragen; ohne Punktzahl zeigt die Seite „Bewertung folgt“.
2. Jedes Kriterium aus `kriterienKleidung` bekommt einen Status (`gut`, `teilweise`, `fehlt`, `offen`) und einen kurzen, belegten Text. `offen` heißt: keine Angaben gefunden oder Florian entscheidet (z. B. Aussehen).
3. Kreislauf nach Cradle to Cradle ist das wichtigste Kriterium. Faire Arbeitsbedingungen werden nicht bewertet.
4. Wirbt ein Hersteller mit CO₂-Ausgleich oder „klimaneutral“: genau erklären, wie (welche Projekte, vermeiden oder dauerhaft entfernen), und Florian entscheiden lassen, ob das zählt.
5. Preis: mit vergleichbarer Ware großer Modeketten (z. B. C&A, H&M) vergleichen. Auf der Seite die Kette nicht namentlich nennen, sondern „große Modeketten“ schreiben, mit Stand (Monat/Jahr).
6. `shop` verlinkt eine seriöse Seite, auf der man das Produkt wirklich kaufen kann, ohne Affiliate-Parameter.
7. Herstellerangaben als solche kennzeichnen, eigene Einschätzungen als „Einschätzung“.
8. Reparatur nur bei Hosen & Jeans, Jacken und Taschen/Rucksäcken bewerten (`reparaturUnterkategorien`), bei allen anderen Unterkategorien weglassen.
9. Fehlen Angaben (z. B. Verpackung, Haltbarkeit, Aussehen), vor dem ersten Entwurf Florian fragen. Er hat viele Produkte selbst getestet. Seine Erfahrungen in der Ich-Form eintragen („Bei meiner Bestellung …“).
