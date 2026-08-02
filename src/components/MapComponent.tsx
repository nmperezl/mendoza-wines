'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

export default function MapComponent({ wineries }: { wineries: any[] }) {
  const center: [number, number] = [-33.2000, -68.9000];

  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={true} className="w-full h-full z-0">
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {wineries.map((winery) => (
        <Marker key={winery.id} position={[winery.lat, winery.lng]} icon={customIcon}>
          <Popup>
            <div className="p-1">
              <h3 className="font-bold text-slate-900 text-sm">{winery.name}</h3>
              <p className="text-xs text-slate-500 my-1">📍 {winery.zone}</p>
              <a
                href={`https://wa.me/${winery.whatsapp}?text=Hola! Vi su disponibilidad en la web y me gustaría consultar cupo para visitar ${winery.name}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 text-white text-xs font-bold py-1 px-2 rounded text-center mt-2"
              >
                💬 WhatsApp
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
