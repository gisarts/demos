export interface Release {
  version: string;
  date: string;
  title: string;
  latest?: boolean;
  items: string[];
}

export const releases: Release[] = [
  {
    version: 'v1.7.3',
    date: 'September 2026',
    title: 'Rondleiding en vernieuwde formulieren',
    latest: true,
    items: [
      'Een interactieve rondleiding vervangt de oude handleiding. Kies een hoofdstuk of loop alles in één keer door; de rondleiding toont alleen de onderdelen die in uw configuratie aan staan.',
      'Staan er veel registraties in beeld, dan bundelt de kaart ze tot genummerde bolletjes in de huisstijl. Zoomt u in tot een overzichtelijk aantal, dan verschijnen de vlakken zelf weer, in hun eigen kleur.',
      'Formulieren met duizenden registraties laden sneller en tonen alle registraties op de kaart, niet alleen de eerste duizend. Een registratie openen gaat ook merkbaar sneller.',
      'In het formulieroverzicht staan Aan mij gekoppeld, Geschiedenis en Gearchiveerd samen onder één knop Weergave, en een ontbrekende foto toont een nette melding.',
      'Per formulier instellen welke tekenvormen beschikbaar zijn en welke kop erboven staat.',
      'Het beheerscherm van een formulier legt bij elke optie uit wat die doet. Met Rechten afdwingen bepaalt u of de rechten per keuze-optie gelden; staat die uit, dan kan iedereen met toegang bewerken.',
      'Een veld kan de indiener automatisch mailen zodra iemand anders het wijzigt, en met een veldconditie zet u een antwoord vast, bijvoorbeeld zodra er een update is gegeven.',
      'Notificaties per keuze-optie gaan alleen nog uit bij een echte wijziging, en Eigen notificaties alleen naar de maker van de registratie.',
      'Rechten, notificaties en tekeninstellingen van een formulier blijven bewaard bij het opslaan van andere wijzigingen, en Geldig vanaf werkt nu ook zonder einddatum.',
      'Een registratie kan niet meer per ongeluk zonder ingevulde gegevens op de kaart belanden.',
      'Elke openbare configuratie heeft een eigen webadres: een kopie krijgt automatisch een nieuwe naam, zodat een gedeelde link blijft werken.',
      'Betere weergave op telefoons met een notch of afgeronde schermhoeken, en kaartgroepen staan weer in de juiste volgorde.',
    ],
  },
  {
    version: 'v1.7.2',
    date: 'Augustus 2026',
    title: 'Rustiger kaartbeeld',
    items: [
      'Lagen die op het huidige zoomniveau niets tonen staan gedimd in de legenda, zodat meteen duidelijk is waarom een kaart niet zichtbaar is.',
      'Bronvermeldingen van de gebruikte kaartlagen staan nu op de kaart zelf.',
      'Wisselen naar een ander tabblad tijdens het bewerken sluit de bewerkmodus netjes af, in plaats van onzichtbaar door te laten lopen.',
      'Configuraties met tientallen kaarten openen zonder wachttijd, en slepen en zoomen blijft vloeiend met veel lagen aan.',
      'Lagen kiezen bij het instellen van een kaart gaat via een opgeruimd en sneller venster.',
      'Zoekingangen zijn samengevoegd tot herbruikbare records en centraal te beheren onder Extra > Zoekingangen, met resultaten die op relevantie zijn gerangschikt.',
    ],
  },
  {
    version: 'v1.7.1',
    date: 'Juli 2026',
    title: 'De legenda naar eigen hand',
    items: [
      'Per configuratie de volgorde van kaarten en kaartgroepen in de legenda bepalen, zodat het meest gebruikte bovenaan staat.',
      'Eigen legenda-keuzes blijven staan wanneer de beheerder kaarten toevoegt of aanpast: alleen zelf gewijzigde onderdelen worden bewaard.',
      'Kaarten die al in een kaartgroep zitten verschijnen niet meer daarnaast nog eens los in dezelfde configuratie.',
      'De beheerschermen onthouden op welke pagina u gebleven was.',
      'Is de server even niet bereikbaar, dan is dat direct zichtbaar.',
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
    version: 'v1.6.6',
    date: 'April/mei 2026',
    title: 'Kaarten toevoegen zonder uitzoekwerk',
    items: [
      'Een kaartlaag toevoegen rechtstreeks uit de landelijke PDOK-catalogus of uit de datacatalogus: zoeken, kiezen, klaar. De instellingen worden automatisch ingevuld.',
      'Tot 30 dagen ingelogd blijven op een vertrouwd apparaat, met in de statistieken inzicht vanaf welke apparaten is ingelogd.',
      'Als organisatie een eigen wachtwoordbeleid instellen.',
      'Openbare kaartpagina’s worden via een automatische sitemap beter gevonden in zoekmachines.',
      'Bij het exporteren zelf kiezen in welke projectie de gegevens worden geleverd.',
      'Excel-, Shape-, GeoPackage- en GeoJSON-bestanden importeren via één vaste, snellere route.',
    ],
  },
  {
    version: 'v1.6.5',
    date: 'Maart 2026',
    title: 'Kaarten in uw eigen stijl',
    items: [
      'Vectorkaarten opmaken met eigen kleuren, symbolen en labels, met andere instellingen per zoomniveau zodat de kaart nooit vol staat.',
      'Ondersteuning voor OGC API Features als kaartbron.',
      'Alle lagen in de legenda met één knop aan- of uitzetten.',
      'Nieuwe achtergrondkiezer met voorbeeldafbeeldingen, zodat u ziet wat u kiest.',
      'Een openbare configuratie eerst zelf bekijken voordat de link gedeeld wordt.',
      'Een eigen organisatiepagina voor het beheren van instellingen en huisstijl.',
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
    date: 'Juli-november 2025',
    title: 'Van melding tot afronding',
    items: [
      'Registraties in fases afwerken en archiveren wat klaar is, zodat het overzicht schoon blijft.',
      'Een registratie toewijzen aan een collega; in het overzicht is zichtbaar wie waaraan werkt.',
      'Een formulierendashboard dat in één oogopslag laat zien hoe de registraties ervoor staan.',
      'GeoJSON-, DGN- en ECW-bestanden toevoegen aan de kaarten.',
      'E-mails in uw eigen huisstijl, met een testmail vooraf en de verzendstatus achteraf.',
      'Schuine luchtfoto’s van Streetsmart en Cyclomedia zelf instellen.',
      'Een kaartlaag die niet beschikbaar is, is meteen herkenbaar in de legenda.',
      'Werken met datum- en tijdvelden in tabellen en sorteren op elke kolom.',
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
