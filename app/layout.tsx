import icono from "@/public/favicon.png";

export const metadata = {
  title: 'Qori Wayra Travel',
  description: 'Descubre tours por el Camino Inca, Machu Picchu y más con Qori Wayra Travel.',
  keywords: ['viajes Perú', 'Machu Picchu', 'Camino Inca', 'turismo Cusco', 'Qori Wayra'],
  icons: {
    icon: icono.src,
  },
  authors: [{ name: 'Qori Wayra Travel', url: 'https://www.qoriwayra-travel.com' }],
  robots: {
    index: true,
    follow: true,
    // Para desactivar en staging podrías poner index:false
  },
  openGraph: {
    title: 'Qori Wayra Travel',
    description: 'Únete a nuestras aventuras guiadas por el Valle Sagrado y Machu Picchu.',
    url: 'https://www.qoriwayra-travel.com',
    siteName: 'Qori Wayra Travel',
    locale: 'es_PE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.qoriwayra-travel.com',
    languages: {
      'en-US': 'https://www.qoriwayra-travel.com/en/landing',
      'es-PE': 'https://www.qoriwayra-travel.com/es/landing',
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
