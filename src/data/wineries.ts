export interface Winery {
  id: string;
  name: string;
  zone: 'Luján de Cuyo' | 'Valle de Uco' | 'Maipú';
  address: string;
  lat: number;
  lng: number;
  days: string;
  hours: string;
  whatsapp: string;
  rating: number;
  tags: string[];
}

export const WINERIES: Winery[] = [
  {
    id: 'catena-zapata',
    name: 'Bodega Catena Zapata',
    zone: 'Luján de Cuyo',
    address: 'Cobos s/n, Agrelo',
    lat: -33.1539,
    lng: -68.9168,
    days: 'Mar a Dom',
    hours: '10:00 a 17:00 hs',
    whatsapp: '5492610000000',
    rating: 4.9,
    tags: ['Almuerzo', 'Reserva Previa', 'Idiomas']
  },
  {
    id: 'zuccardi-valle-de-uco',
    name: 'Zuccardi Valle de Uco',
    zone: 'Valle de Uco',
    address: 'Costa Canal Uco s/n, San Carlos',
    lat: -33.6822,
    lng: -69.1764,
    days: 'Mié a Lun',
    hours: '10:00 a 18:00 hs',
    whatsapp: '5492610000001',
    rating: 4.9,
    tags: ['Almuerzo 5 Pasos', 'Arquitectura']
  },
  {
    id: 'enemigo-wines',
    name: 'Casa Vigil (El Enemigo)',
    zone: 'Maipú',
    address: 'Videla Aranda 7008, Chachingo',
    lat: -33.0135,
    lng: -68.7423,
    days: 'Todos los días',
    hours: '09:30 a 23:00 hs',
    whatsapp: '5492610000002',
    rating: 4.8,
    tags: ['Cena', 'Almuerzo', 'Atardecer']
  }
];
