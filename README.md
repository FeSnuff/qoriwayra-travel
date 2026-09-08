# Qori Wayra Travel

Sitio web de QORI WAYRA TRAVEL EIRL — agencia de turismo en Cusco, Perú.
RUC 20613386484.

Next.js 15 (App Router) · TypeScript · Tailwind v4 · Español e inglés.

---

## Arrancar

```bash
npm install
npm run dev          # http://localhost:3000
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Desarrollo, con recarga en caliente |
| `npm run dev:lan` | Igual, pero accesible desde el móvil en la misma red |
| `npm run build` | Compilación de producción |
| `npm run start` | Sirve la compilación (hay que hacer `build` antes) |
| `npm run images` | Optimiza `public/images/` → `public/img/` |
| `npm run tunnel` | URL pública temporal para enseñar el sitio |

La primera compilación descarga Instrument Serif y Karla desde Google Fonts y
las deja servidas desde el propio dominio. Requiere internet esa vez.

---

## Dónde se edita cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Un precio (USD y soles) | `content/prices.ts` |
| El tipo de cambio a soles | `content/prices.ts` → `exchangeRate` |
| El contenido de un tour | `content/tours/<id>.ts` |
| Cualquier texto de interfaz | `lib/dictionary.ts` |
| Colores y tipografías | `app/globals.css` → bloque `@theme` |
| Orden del menú y categorías | `lib/tours.ts` → `categories` |
| Teléfonos, correo, dirección, RUC | `lib/site.ts` |
| Preguntas frecuentes | `lib/dictionary.ts` → `faq.items` |

### Añadir un tour

1. Copia un archivo de `content/tours/` y edítalo.
2. Añade su precio en `content/prices.ts`.
3. Impórtalo en `lib/tours.ts` y añádelo al array `tours`.

Aparece solo en el menú, el catálogo, el home y el sitemap.

---

## Estructura

```
app/[locale]/          Páginas, una plantilla para los 17 tours
app/api/               Reservas y contacto
content/tours/         El contenido, fuera del código
content/prices.ts      Precios — única fuente de verdad
lib/                   Tipos, SEO, datos de la empresa, textos
components/            UI, layout, marketing, tour, reserva
scripts/               Optimizador de imágenes
```

`public/img/` son las imágenes que usa el sitio, ya optimizadas.
`public/images/` son los originales; no van al repositorio.

---

## Variables de entorno

Opcionales. Sin ellas el sitio funciona, simplemente no mide nada.
En local van en `.env.local`; en producción, en el panel de Vercel.

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
```

---

## Despliegue

Vercel, conectado a este repositorio. Cada `git push` a `main` publica.

`robots.ts` permite indexar por defecto y sólo bloquea en los preview de
Vercel, para que las versiones de prueba no compitan en Google.

### Antes de cambiar de dominio

`site.url` en `lib/site.ts` alimenta los canonical, el sitemap, los datos
estructurados y las miniaturas al compartir. Si cambia el dominio, cámbialo ahí.

---

## Reservas

El formulario de cada tour y el de contacto envían a `app/api/`, que reenvía al
endpoint de AWS existente con su formato original
(`full_name`, `nacionality`, `email`, `message`). No hay backend propio.

Si el envío falla, el formulario ofrece WhatsApp como salida.
