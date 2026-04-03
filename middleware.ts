import { NextRequest, NextResponse } from 'next/server';

// 1. Definir tipos seguros
const locales = ['es', 'en'] as const;
type Locale = typeof locales[number];
const defaultLocale: Locale = 'es';
const protectedRoutes = ['/camino-inca/camino-inca-2d']; // Rutas que requieren validación estricta

// 2. Función de validación de locale
const validateLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const pathSegments = pathname.split('/').filter(Boolean);

  // 3. Validación y corrección del locale
  const locale = validateLocale(pathSegments[0]) ? pathSegments[0] : defaultLocale;

  // 4. Redirecciones estratégicas
  if (pathname === '/' || pathSegments.length === 0) {
    url.pathname = `/${locale}/landing`;
    return NextResponse.redirect(url);
  }

  // 5. Forzar locale válido en rutas protegidas
  if (protectedRoutes.some(route => pathname.includes(route)) && !validateLocale(pathSegments[0])) {
    url.pathname = pathname.replace(/^\/(.*?)(\/|$)/, `/${locale}/`);
    return NextResponse.redirect(url);
  }

  // 6. Asegurar formato de URL
  if (!validateLocale(pathSegments[0])) {
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/((?!_next|api|favicon.ico|assets|images).*)'
  ]
};