# Umweltbewusster Alltag

Ehrlicher, nicht-kommerzieller Ratgeber: Wer nach der nachhaltigsten Lösung für eine Alltagsfrage sucht, soll hier die beste ehrliche Antwort finden. Betreiber: Florian. Sprache der Seite: Deutsch.

Technik: Astro 5, statisch, gehostet bei Netlify. `npm run build` muss fehlerfrei laufen, bevor ein Pull Request entsteht.

## Inhalte

- Ratgeber: `src/content/ratgeber/<slug>.md`, Lexikon: `src/content/lexikon/<slug>.md`. Pflichtfelder siehe `src/content.config.ts`.
- `entwurf: true` blendet einen Ratgeber im Live-Build aus.
- Themenbereiche stehen in `src/data/bereiche.ts`.

## Regeln für jeden Ratgeber

1. Titel ist eine echte Suchfrage („Was ist nachhaltiger: …?“). `beschreibung` ist ein Satz mit dem Fazit, höchstens 160 Zeichen.
2. `fazit`: zwei bis drei Sätze mit der klaren Empfehlung.
3. Rangfolge immer: vermeiden → weiter nutzen, reparieren, gebraucht, leihen → bester Neukauf.
4. Jede Zahl braucht eine Quelle in `quellen`, und die Quellseite muss tatsächlich geöffnet worden sein. Unabhängige Quellen bevorzugen (Umweltbundesamt, Öko-Institut, ifeu, Verbraucherzentrale, begutachtete Studien). Herstellerangaben als solche kennzeichnen.
5. Unsicherheit offen benennen. Einschätzungen ohne Zahl als Einschätzung kennzeichnen.
6. Keine Affiliate-Links, keine Produktwerbung, keine Shop-Links als Empfehlung.
7. Kurze Sätze, Zwischenüberschriften als Unterfragen, Abschnitt „Typische Irrtümer“ am Ende.
8. `stand` auf das Datum der Recherche setzen.

Neue Beiträge kommen immer als Pull Request mit Netlify-Vorschau. Florian liest und gibt frei, nichts wird direkt auf `main` veröffentlicht.
