'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Winery } from '@/data/wineries';
import { Phone, MapPin, Clock } from 'lucide-react';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

export default function Map({ wineries }: { wineries: Winery[] }) {
  const center: [number, number] = [-33.2000, -68.9000];

  return (
    <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer center={center} zoom={10} scrollWheelZoom={true} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {wineries.map((winery) => (
          <Marker key={winery.id} position={[winery.lat, winery.lng]} icon={customIcon}>
            <Popup>
              <div className="p-1 max-w-[200px]">
                <h3 className="font-bold text-gray-900 text-sm">{winery.name}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 my-1">
                  <MapPin className="w-3 h-3" /> {winery.zone}
                </p>
                <a
                  href={`https://wa.me/${winery.whatsapp}?text=Hola! Vi su disponibilidad en la web y me gustaría consultar cupo para visitar ${winery.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 text-white text-xs font-semibold py-1 px-2 rounded flex items-center justify-center gap-1 mt-2"
                >
                  <Phone className="w-3 h-3" /> Consultar WhatsApp
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
