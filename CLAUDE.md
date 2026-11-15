# Umweltbewusster Alltag

Ehrlicher, nicht-kommerzieller Ratgeber: Wer nach der nachhaltigsten Lösung für eine Alltagsfrage sucht, soll hier die beste ehrliche Antwort finden. Betreiber: Florian. Sprache der Seite: Deutsch.

Technik: Astro 5, statisch, gehostet bei Netlify. `npm run build` muss fehlerfrei laufen, bevor ein Pull Request entsteht.

## Inhalte

- Ratgeber: `src/content/ratgeber/<slug>.md`, Lexikon: `src/content/lexikon/<slug>.md`. Pflichtfelder siehe `src/content.config.ts`.
- `entwurf: true` blendet einen Ratgeber im Live-Build aus.
- Ratgeber gehören zu einem Bereich der Alltagsgegenstände: `bereich` ist ein Slug aus `src/data/alltag.ts` (z. B. `kleidung`). Sie erscheinen oben auf der Bereichsseite und unter /ratgeber/. Eigene Themenseiten (/themen/) gibt es nicht mehr.
- Alltagsgegenstände (Bereiche, Unterkategorien, Florians Kriterien) stehen in `src/data/alltag.ts`. Bereiche mit `aktiv: false` erscheinen als „Kommt bald“.
- Wunschvorstellung: Jede Unterkategorie kann in `src/data/alltag.ts` ein Feld `wunsch` haben (Kasten „Meine Wunschvorstellung“ oben auf der Kategorieseite). Den Inhalt gibt nur Florian vor, nie selbst ausdenken (Florian, 2026-11-15). Im passenden Ratgeber dazu einen Abschnitt „Wie sähe der nachhaltigste … aus?“ mit echten Beispielen.
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

## Gestaltung längerer Texte

Längere Ratgeber und Lexikon-Einträge nie als reinen Fließtext (Florian, 2026-11-15). Immer einbauen, direkt vor dem Absatz, neben dem es stehen soll (auf großen Bildschirmen steht es am Rand, auf dem Handy im Text):

- Randzitat in großer Schrift: `<aside class="rand randzitat"><p>Wichtige Aussage.</p><small>Quelle oder „Einschätzung“</small></aside>`
- Grafik-Kasten: `<aside class="rand grafik"><p class="grafik-titel">Titel</p> … </aside>`, z. B. Rangfolge mit `<ol class="stufen">` (`<li class="stufe-top">` hebt den besten Schritt hervor).
- Kreisläufe: biologisch in Grün (`kreislauf bio`), technisch in Silber (`kreislauf tech`). Beispiel in `src/content/ratgeber/kompostierbare-produkte.md`.
- Große Zahl über die volle Breite in der Bereichsfarbe: `<div class="grosse-zahl"><strong>100 g</strong><p>Was die Zahl bedeutet.</p><small>Quelle</small></div>`, direkt nach dem Absatz mit der Zahl.
- Titelbild: `titelbild: /bilder/<slug>.svg` und `titelbildAlt` im Frontmatter; eigene, bunte SVG-Illustration in `public/bilder/` (erscheint im Artikelkopf und auf der Startseite).
- Magazin-Look „Modern und farbig“ (Florian, 2026-11-15): Jeder Bereich hat eine Erkennungsfarbe (`farbe` in `src/data/alltag.ts`), Überschriften in Bricolage Grotesque. Gilt für alle Seiten: Jede Seite beginnt mit `SeitenKopf` (farbiger Kopf, `slot="kopf"` in `Base`), Karten haben dunklen Rand mit versetztem Schatten.
- Bilder nur mit geklärter Lizenz (eigene Fotos, freie Lizenz oder Erlaubnis), sonst eigene Illustration als SVG.

## Regeln für Produktseiten

1. Die Punktzahl (`punkte`, 0 bis 10) vergibt nur Florian. Nie selbst eintragen; ohne Punktzahl zeigt die Seite „Bewertung folgt“.
2. Jedes Kriterium aus `kriterienKleidung` bekommt einen Status (`gut`, `teilweise`, `fehlt`, `offen`) und einen kurzen, belegten Text. `offen` ist nur erlaubt, wenn Florian es ausdrücklich freigibt (Florian, 2026-11-15). Fehlen Angaben, erst weiter recherchieren und dann Florian gezielt fragen.
3. Kreislauf nach Cradle to Cradle ist das wichtigste Kriterium. Faire Arbeitsbedingungen werden nicht bewertet.
4. Wirbt ein Hersteller mit CO₂-Ausgleich oder „klimaneutral“: genau erklären, wie (welche Projekte, vermeiden oder dauerhaft entfernen), und Florian entscheiden lassen, ob das zählt.
5. Preis: mit vergleichbarer Ware großer Modeketten (z. B. C&A, H&M) vergleichen. Auf der Seite die Kette nicht namentlich nennen, sondern „große Modeketten“ schreiben, mit Stand (Monat/Jahr).
6. `shop` verlinkt eine seriöse Seite, auf der man das Produkt wirklich kaufen kann, ohne Affiliate-Parameter.
7. Herstellerangaben als solche kennzeichnen, eigene Einschätzungen als „Einschätzung“.
8. Reparatur nur bei Hosen & Jeans, Jacken, Taschen/Rucksäcken und Schuhen bewerten (`reparaturUnterkategorien`), bei allen anderen Unterkategorien weglassen.
9. Fehlen Angaben (z. B. Verpackung, Haltbarkeit, Aussehen), vor dem ersten Entwurf Florian fragen. Er hat viele Produkte selbst getestet. Seine Erfahrungen in der Ich-Form eintragen („Bei meiner Bestellung …“).
10. Leder ist nur in Ordnung, wenn alle fünf Bedingungen erfüllt sind (Florian, 2026-11-15): chromfrei gegerbt, ohne Kunststoffbeschichtung, Abbaubarkeit per Test belegt, Rücknahme durch den Hersteller, Sohle tauschbar. Produkte mit Leder bekommen dafür das Feld `leder` (Leder-Check, siehe `lederKriterien`). Die Herkunft der Häute muss nicht streng geprüft werden.
11. Schuhe: Die Laufsohle soll biologisch abbaubar sein (Abrieb). Keine Merinowolle. Ein Produkt muss online oder in einem Laden in Deutschland kaufbar sein.
12. Klima: Keiner gleicht aus heißt, keiner ist CO₂-negativ, dann `fehlt`. Eingesparte Emissionen im Text nennen.
