'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Carga dinámica de Leaflet para evitar error de SSR en Vercel
const MapWithNoSSR = dynamic(
  () => import('../components/MapComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[400px] bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-medium">
        Cargando mapa de bodegas...
      </div>
    )
  }
);

export const WINERIES = [
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

export default function Home() {
  const [selectedZone, setSelectedZone] = useState('Todas');

  const filteredWineries = WINERIES.filter(
    (w) => selectedZone === 'Todas' || w.zone === selectedZone
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-8">
      <header className="max-w-7xl mx-auto flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍷</span>
          <span className="font-extrabold text-xl tracking-tight text-purple-950">
            Mendoza Wine Pass
          </span>
        </div>
        <span className="text-xs bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full">
          MVP Demo
        </span>
      </header>

      <section className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">
          Consultá e itinerá bodegas sin vueltas
        </h1>
        <p className="text-slate-600 text-sm mb-6">
          Horarios actualizados, ubicación exacta y contacto directo de reservas.
        </p>

        {/* Filtros */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
          {['Todas', 'Luján de Cuyo', 'Valle de Uco', 'Maipú'].map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedZone === zone
                  ? 'bg-purple-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Grilla principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[500px]">
          <div className="lg:col-span-5 space-y-4">
            {filteredWineries.map((winery) => (
              <div
                key={winery.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="font-bold text-lg text-slate-900">{winery.name}</h2>
                    <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2 py-1 rounded-md flex items-center gap-1">
                      ⭐ {winery.rating}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-1">📍 {winery.address}</p>
                  <p className="text-xs text-slate-600 mb-3">🕒 {winery.days} ({winery.hours})</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {winery.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${winery.whatsapp}?text=Hola! Vi su disponibilidad en la web y me gustaría consultar cupo para visitar ${winery.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 px-4 rounded-xl text-center transition-colors shadow-sm"
                >
                  💬 Consultar Reserva Directa
                </a>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <MapWithNoSSR wineries={filteredWineries} />
          </div>
        </div>
      </section>
    </main>
  );
}
