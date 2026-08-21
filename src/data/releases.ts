export interface Release {
  version: string;
  date: string;
  title: string;
  latest?: boolean;
  items: string[];
}

export const releases: Release[] = [
  {
    version: 'v1.8.0',
    date: 'Augustus 2026',
    title: '3D-viewer volledig vernieuwd',
    latest: true,
    items: [
      'De 3D-viewer bouwt nu zijn eigen kaarten op: achtergrond, WMTS en 3D Tiles in de ingestelde volgorde, met een correcte startpositie van de camera op basis van de kaartextent.',
      'Klikken op een gebouw in 3D leest de eigen kenmerken uit de tileset en markeert precies dat gebouw, ook bij meerdere tegels.',
      'Herstijling van de 3D-legenda, zoekbalk en de meet- en infotools voor een rustiger en consistenter beeld.',
      'Achtergrondkeuze in 3D werkt weer betrouwbaar: er is steeds precies één achtergrond actief, zonder dubbele lagen.',
      'Zoekingangen zijn samengevoegd tot herbruikbare records en centraal te beheren onder Extra > Zoekingangen, met resultaten die op relevantie zijn gerangschikt.',
      'De buffertool toont de gekozen straal direct naast de schuifregelaar.',
    ],
  },
  {
    version: 'v1.7.0',
    date: 'Juni 2026',
    title: 'Vernieuwde interface & snellere viewer',
    items: [
      'Volledig vernieuwde en consistente interface voor alle beheerschermen (gebruikers, kaarten en configuraties).',
      'Snellere laadtijden door slim en gefaseerd laden van onderdelen en compactere bestanden.',
      'Vernieuwde, uniforme iconografie voor een rustiger en herkenbaarder beeld.',
      'Verbeteringen in het beheer en gebruik van formulieren.',
      'Panoramax-integratie: open 360°-streetview rechtstreeks in de viewer.',
    ],
  },
  {
    version: 'v1.6.4',
    date: 'Februari 2026',
    title: 'Verbeterslag beheer formulieren',
    items: [
      'Verbeterslag in het beheer van de formulieren.',
      'Mails koppelen middels een morph-relatie.',
      'Fixes voor verhoogde stabiliteit.',
      'Optimalisaties middels meer individuele componenten.',
    ],
  },
  {
    version: 'v1.6.3',
    date: 'December 2025',
    title: 'Update formulier-rechten',
    items: [
      'Formulieren zijn geoptimaliseerd.',
      'Formulier-rechten zijn vereenvoudigd.',
      'Mogelijkheid om tijdens het printen te annuleren.',
    ],
  },
  {
    version: 'v1.6.2',
    date: 'November 2025',
    title: 'Kleine verbeteringen en bugfixes',
    items: [
      'Email white-labeling wordt middels de database ingeladen.',
      'E-mails worden gelogd met status.',
      'Mogelijkheid om de Streetsmart-obliques direct te configureren.',
    ],
  },
  {
    version: 'v1.6.1',
    date: 'Juni 2025',
    title: 'Kleine verbeteringen en bugfixes',
    items: [
      'Bewerken van formulieren met geavanceerde instellingen voor beheerders.',
      'Rechtstreeks zoeken op databasetabellen voor een zoekingang op maat.',
      'Redlining bewaren in een configuratie zodat collega’s hier inzicht op hebben.',
    ],
  },
];

export interface RoadmapEntry {
  period: string;
  status?: string;
  items?: string[];
}

export const roadmap: RoadmapEntry[] = [
  {
    period: '2026',
    items: [
      'API-first architectuur: volledige implementatie Cook Datacatalogus (OGC API voor Features, Tiles en Records).',
      'Slimme datakwaliteit: automatische datavalidaties via ETL (FME Flow).',
      'Datacatalogus-uitbreiding: meer soorten datadistributie.',
      'Uitbreiding koppelingen: integratie met DSO (Digitaal Stelsel Omgevingswet).',
      '3D-viewing op basis van Three.js (zonder Cesium): textured meshes, LiDAR point clouds en doorsnedes/profielen.',
    ],
  },
  {
    period: '2027',
    status: 'TBA',
  },
  {
    period: '2028-2029',
    status: 'TBA',
  },
];
