'use client';

import { useState } from 'react';
import { WINERIES } from '@/data/wineries';
import MapWrapper from '@/components/MapWrapper';
import { MapPin, Clock, Phone, Wine, Star } from 'lucide-react';

export default function Home() {
  const [selectedZone, setSelectedZone] = useState<string>('Todas');

  const filteredWineries = WINERIES.filter((w) => 
    selectedZone === 'Todas' || w.zone === selectedZone
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wine className="w-6 h-6 text-purple-900" />
            <span className="font-extrabold text-lg text-purple-950">Mendoza Wine Pass</span>
          </div>
          <span className="text-xs bg-purple-100 text-purple-800 font-semibold px-2 py-1 rounded-full">MVP Demo</span>
        </div>
      </header>

      <section className="max-w-7xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl font-bold mb-1">Bodegas y Tours en Mendoza</h1>
        <p className="text-slate-600 text-sm mb-4">Consultá disponibilidad y coordiná por WhatsApp directo.</p>

        {/* Botones de Filtro */}
        <div className="flex gap-2 overflow-x-auto pb-4">
          {['Todas', 'Luján de Cuyo', 'Valle de Uco', 'Maipú'].map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                selectedZone === zone ? 'bg-purple-900 text-white' : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Layout en columna para móvil / lado a lado en pantalla grande */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            {filteredWineries.map((winery) => (
              <div key={winery.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <h2 className="font-bold text-slate-900">{winery.name}</h2>
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-600">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {winery.rating}
                  </span>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-1 mb-1"><MapPin className="w-3 h-3" /> {winery.address}</p>
                <p className="text-xs text-slate-600 flex items-center gap-1 mb-3"><Clock className="w-3 h-3" /> {winery.days} ({winery.hours})</p>
                <a
                  href={`https://wa.me/${winery.whatsapp}?text=Hola! Vi su disponibilidad en la web y me gustaría consultar cupo para visitar ${winery.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-1"
                >
                  <Phone className="w-3 h-3" /> Consultar Reserva Directa
                </a>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 h-[450px]">
            <MapWrapper wineries={filteredWineries} />
          </div>
        </div>
      </section>
    </main>
  );
}
