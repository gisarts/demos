# Cook marketingsite

Astro + Tailwind (Node 18, statische build). Alle zichtbare teksten staan in
`src/data/*.ts` (`features.ts`, `releases.ts`, `site.ts`) en in de `.astro`-pagina's
en componenten onder `src/pages/` en `src/components/`.

## Schrijfregels voor teksten (verplicht)

- **Geen em- of en-streepjes.** Gebruik nooit `—` (em-dash) of `–` (en-dash) in
  zichtbare tekst. Dit zijn typische "AI-streepjes". Herschrijf de zin met een
  komma, dubbele punt of een nieuwe zin in plaats van een streepje.
  - Gebruik bij een terzijde/uitleg een komma: `... in het veld, ook bij ...`
  - Gebruik bij een opsomming of toelichting een dubbele punt: `Cook: you name it ...`
  - Voor jaartallen/reeksen een gewoon koppelteken zonder spaties: `2026-2029`.
- **Menselijk maar professioneel.** Schrijf zoals een deskundige collega zou
  spreken: helder, direct, actief en zonder marketing-opsmuk. Vermijd holle
  superlatieven en AI-clichés ("naadloos" gestapeld, "in een oogwenk", overdreven
  enthousiasme). Correct, verzorgd Nederlands; u-vorm voor de klant.
- **Consistentie.** Nederlandse tekst, behalve gevestigde Engelse (product)termen.
  Vaktermen zoals GIS, PWA, OGC, AVG blijven zoals ze zijn.

Controleer na het bewerken van teksten dat er geen `—` of `–` meer in `src/` staat:

```sh
grep -rn "—\|–" src/
```
