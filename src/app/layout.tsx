import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mendoza Wine Pass | Tours y Bodegas',
  description: 'Consultá disponibilidad y coordiná visitas a bodegas en Mendoza.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* CSS de Leaflet para los estilos del mapa */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
