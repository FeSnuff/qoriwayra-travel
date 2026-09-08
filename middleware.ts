import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware de idioma y rutas heredadas.
 *
 * Cambios respecto a la versión anterior:
 *   - `/` ya no manda a `/es/landing`. El home vive en `/es`, que es donde
 *     Google espera la portada. `/[locale]/landing` queda redirigido.
 *   - Se eliminó `protectedRoutes`, que forzaba el locale en una sola ruta
 *     (`/camino-inca/camino-inca-2d`) sin motivo aparente.
 *   - El idioma inicial se detecta con Accept-Language en vez de asumir español.
 *   - Las URLs viejas de tours redirigen 308 a las nuevas, para que ningún
 *     enlace ya compartido por WhatsApp caiga en un 404.
 */

const locales = ["es", "en"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "es";

const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** Rutas de la v1 -> slug de la v2. Sin prefijo de idioma. */
const LEGACY: Record<string, Record<Locale, string>> = {
  "/landing": { es: "", en: "" },
  "/tour-a-machupicchu/mapi-full-day": { es: "/tours/machu-picchu-full-day", en: "/tours/machu-picchu-full-day" },
  "/tour-a-machupicchu/mapi-by-train": { es: "/tours/machu-picchu-en-tren-2d1n", en: "/tours/machu-picchu-by-train-2d1n" },
  "/tour-a-machupicchu/mapi-by-car": { es: "/tours/machu-picchu-por-hidroelectrica-2d1n", en: "/tours/machu-picchu-by-car-2d1n" },
  "/one-day/siete-colores": { es: "/tours/montana-7-colores-vinicunca", en: "/tours/rainbow-mountain-vinicunca" },
  "/one-day/tour-palccoyo": { es: "/tours/montana-palccoyo", en: "/tours/palccoyo-rainbow-mountain" },
  "/one-day/siete-lagunas": { es: "/tours/7-lagunas-de-ausangate", en: "/tours/seven-lakes-ausangate" },
  "/camino-inca/camino-inca-2d": { es: "/tours/camino-inca-2-dias", en: "/tours/inca-trail-2-days" },
  "/camino-inca/camino-inca-4d": { es: "/tours/camino-inca-4-dias", en: "/tours/inca-trail-4-days" },
  "/camino-inca/mapi-by-salkantay": { es: "/tours/salkantay-trek-machu-picchu", en: "/tours/salkantay-trek-machu-picchu" },
  "/one-day/laguna-humantay": { es: "/tours/laguna-humantay-full-day", en: "/tours/humantay-lake-day-trip" },
  "/valle-sagrado/valle-sagrado-tradicional": { es: "/tours/valle-sagrado-tradicional", en: "/tours/sacred-valley-classic" },
  "/valle-sagrado/valle-sagrado-vip": { es: "/tours/valle-sagrado-vip", en: "/tours/sacred-valley-vip" },
  "/valle-sagrado/valle-sagrado-sur": { es: "/tours/valle-sur-cusco", en: "/tours/south-valley-cusco" },
  "/valle-sagrado/maras-moray": { es: "/tours/maras-moray-salineras", en: "/tours/maras-moray-salt-mines" },
  "/one-day/city-tour-cusco": { es: "/tours/city-tour-cusco", en: "/tours/cusco-city-tour" },
  "/one-day/tour-mistico": { es: "/tours/tour-mistico-cusco", en: "/tours/mystical-tour-cusco" },
  "/one-day/waqrapukara": { es: "/tours/waqrapukara-full-day", en: "/tours/waqrapukara-day-trip" },
};

function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const wantsEnglish = header
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase())
    .some((tag) => tag.startsWith("en"));
  return wantsEnglish ? "en" : defaultLocale;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const segments = pathname.split("/").filter(Boolean);

  // 1. Raíz -> idioma detectado
  if (segments.length === 0) {
    url.pathname = `/${preferredLocale(request)}`;
    return NextResponse.redirect(url);
  }

  // 2. Sin prefijo de idioma -> anteponerlo
  if (!isLocale(segments[0])) {
    url.pathname = `/${preferredLocale(request)}${pathname}`;
    return NextResponse.redirect(url);
  }

  // 3. Rutas de la v1 -> nuevas
  const locale = segments[0];
  const rest = "/" + segments.slice(1).join("/");
  const target = LEGACY[rest];
  if (target) {
    url.pathname = `/${locale}${target[locale]}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next|api|img|images|favicon|sitemap|robots|.*\\..*).*)"],
};
