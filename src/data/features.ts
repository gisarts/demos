export interface Feature {
  title: string;
  description: string;
  icon: string;
  /** shown on the homepage highlight grid */
  highlight?: boolean;
}

/**
 * Volledige feature-inventaris, afgeleid van de Cook-applicatie
 * (docs/FEATURES.md). Elke feature verwijst naar een icoon-sleutel
 * die in Icon.astro is uitgewerkt.
 */
export const features: Feature[] = [
  {
    title: 'Viewer & navigatie',
    description:
      'Snelle OpenLayers-kaart met pannen, zoomen, geolocatie, coördinaten ophalen en het wisselen van achtergrondkaarten — met deep links naar elke extent of element.',
    icon: 'map',
    highlight: true,
  },
  {
    title: 'Legenda & lagenbeheer',
    description:
      'Beheer kaarten en groepen in een hiërarchische legenda: lagen aan/uit, transparantie per laag, metadata bekijken en styling volledig naar wens aanpassen.',
    icon: 'layers',
    highlight: true,
  },
  {
    title: 'Informatie opvragen',
    description:
      'Klik op een object of selecteer alles binnen een polygoon, cirkel of buffer. Cook toont attributen, grafieken en gekoppelde formulieren in het detailpaneel en grid.',
    icon: 'info',
    highlight: true,
  },
  {
    title: 'Tekenen, meten & redlining',
    description:
      'Meet afstanden, oppervlakten en omtrekken, of teken vrije markeringen in lijnen, vlakken, punten en tekst. Bewerk vectorlagen met snapping en undo.',
    icon: 'ruler',
    highlight: true,
  },
  {
    title: 'Zoeken op adres & object',
    description:
      'Vind in een oogwenk adressen, percelen en objecten met de ingebouwde zoeker — gevoed door de PDOK-locatieserver en uw eigen kaartlagen.',
    icon: 'search',
  },
  {
    title: 'Filters & querybuilder',
    description:
      'Definieer filters op vector- en WMS-lagen met CQL, of bouw visuele queries op attribuutvoorwaarden. Resultaten verschijnen direct in grid en detailpaneel.',
    icon: 'filter',
    highlight: true,
  },
  {
    title: 'Printen & export',
    description:
      'Genereer professionele kaarten met vooraf ingestelde print-sjablonen naar PDF, en exporteer data naar Shapefile, GML, Excel en meer.',
    icon: 'printer',
  },
  {
    title: 'Delen van kaarten',
    description:
      'Deel uw weergave met één klik via een directe link. De ontvanger opent exact dezelfde extent inclusief actieve lagen en het juiste zoomniveau.',
    icon: 'share',
  },
  {
    title: '360°, panorama & obliques',
    description:
      'Bekijk cyclorama- en streetview-beelden, schuine luchtfoto’s (obliques), VR-foto’s en de open Panoramax-streetview, rechtstreeks in de viewer.',
    icon: 'panorama',
    highlight: true,
  },
  {
    title: '3D-weergave',
    description:
      'Een volwaardige 3D-omgeving met terrain-tiles, eigen legenda, info- en meet-tools, en camera-besturing — tot op de centimeter nauwkeurig.',
    icon: 'cube',
    highlight: true,
  },
  {
    title: 'Formulieren & meldingen',
    description:
      'Dynamische formulieren voor registraties en inspecties op locatie, met foto- en bestandsbijlagen, geometrie, handtekeningen en automatische e-mailmeldingen.',
    icon: 'clipboard',
  },
  {
    title: 'Infographics & dashboards',
    description:
      'Stel zelf dashboards en infographics samen die live data uit het datawarehouse tonen in grafieken, tabellen en kaartwidgets.',
    icon: 'chart',
  },
  {
    title: 'Eigen kaarten importeren',
    description:
      'Maak nieuwe kaarten vanuit CSV, XLSX, KML, DWG, Shapefile of een externe WMS-service — zonder technische kennis.',
    icon: 'upload',
  },
  {
    title: 'Custom extents',
    description:
      'Bewaar de huidige kaartweergave onder een naam en spring er later in één klik naartoe. Beheer opgeslagen locaties per configuratie.',
    icon: 'bookmark',
  },
  {
    title: 'Configuraties & rechten',
    description:
      'Eén gebruiker, meerdere configuraties. Configuraties sturen vrijwel elke UI-optie en tool aan, met publieke (anonieme) kaarten waar gewenst.',
    icon: 'sliders',
  },
  {
    title: 'Account, SSO & 2FA',
    description:
      'Veilige login met two-factor authenticatie, wachtwoordherstel, remote login en Single Sign-On (Azure). Autorisatie op basis van rollen.',
    icon: 'shield',
  },
  {
    title: 'PWA & offline',
    description:
      'Cook is als Progressive Web App te installeren en werkt online én offline in het veld, op elk apparaat — via een service worker.',
    icon: 'offline',
  },
  {
    title: 'API-integraties',
    description:
      'Naadloze koppelingen met Cyclomedia, Kavel10, Azure SSO en Google Maps, plus een REST/OGC-API als bron voor kaarten, formulieren en dashboards.',
    icon: 'api',
  },
];

export const highlightFeatures = features.filter((f) => f.highlight);
