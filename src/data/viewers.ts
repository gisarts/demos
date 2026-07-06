export interface Viewer {
  title: string;
  image: string;
  url: string;
  source: string;
  featured?: boolean;
}

/** Live-demo viewers. `image` is relative to /public/img. */
export const viewers: Viewer[] = [
  {
    title: 'Wandelroutes',
    image: '/img/wandelroutes.webp',
    url: 'https://cook.gisarts.nl/cook/wandelroutes',
    source: 'Wandelroutes',
    featured: true,
  },
  {
    title: 'Milieu & Energie',
    image: '/img/milleu.webp',
    url: 'https://cook.gisarts.nl/cook/energietransitie',
    source: 'RIVM, oplaadpalen.nl',
  },
  {
    title: 'Wandel 4-daagse',
    image: '/img/vierdaagse.webp',
    url: 'https://cook.gisarts.nl/cook/vierdaagse',
    source: 'Nijmegen',
  },
  {
    title: '3D Demo',
    image: '/img/3d.webp',
    url: 'https://cook.gisarts.nl/cook/3d/three-dimensional',
    source: '3D BAG',
  },
  {
    title: 'Data exporteren',
    image: '/img/data-export.webp',
    url: 'https://cook.gisarts.nl/cook/fme',
    source: 'FME Flow',
  },
  {
    title: 'Reizen van James Cook',
    image: '/img/endeavour.webp',
    url: 'https://cook.gisarts.nl/cook/jamescook',
    source: 'James Cook',
  },
  {
    title: 'Bonnebladen',
    image: '/img/bonnebladen.webp',
    url: 'https://cook.gisarts.nl/cook/bonnebladen',
    source: 'Historisch',
  },
  {
    title: 'Windturbines',
    image: '/img/windturbines.webp',
    url: 'https://cook.gisarts.nl/cook/windturbines',
    source: 'Energie',
  },
  {
    title: 'Begraafplaatsen',
    image: '/img/hta_edamvolendam.webp',
    url: 'https://www.gishta.nl/cook/edamvolendam',
    source: 'Edam-Volendam',
  },
  {
    title: 'Rioleringen',
    image: '/img/gwsw_denhaag.webp',
    url: 'https://www.viewer-duopp.nl/cook/gwsw_denhaag',
    source: 'GWSW Den Haag',
  },
  {
    title: 'Strooiroutes',
    image: '/img/lvc_strooiroutes.webp',
    url: 'https://www.gislandvancuijk.nl/cook/gladheidsbestrijding',
    source: 'Land van Cuijk',
  },
  {
    title: 'Verkeersborden',
    image: '/img/verkeersborden.webp',
    url: 'https://cook.gisarts.nl/cook/verkeer',
    source: 'Verkeer',
  },
  {
    title: 'AHN3 Hoogtekaart',
    image: '/img/AHN3.webp',
    url: 'https://cook.gisarts.nl/cook/ahn',
    source: 'Point Cloud',
  },
  {
    title: 'Spoorwegen',
    image: '/img/spoorwegen.webp',
    url: 'https://cook.gisarts.nl/cook/spoorwegen',
    source: 'Infrastructuur',
  },
  {
    title: 'World',
    image: '/img/world.webp',
    url: 'https://cook.gisarts.nl/cook/world',
    source: 'Wereldwijd',
  },
];
