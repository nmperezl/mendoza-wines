'use client';

import dynamic from 'next/dynamic';
import { Winery } from '@/data/wineries';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
      Cargando mapa...
    </div>
  ),
});

export default function MapWrapper({ wineries }: { wineries: Winery[] }) {
  return <Map wineries={wineries} />;
}
