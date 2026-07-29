# Portafolio personal

Portafolio web bilingüe (ES/EN) construido con Next.js 16, TypeScript y Tailwind CSS v4.
Sitio 100 % estático, sin backend ni dependencias de terceros en runtime.

> **Nota:** el contenido actual son placeholders marcados con `TODO`.
> Lee [Cómo personalizarlo](#cómo-personalizarlo) antes de publicar.

## Resultados de auditoría

Lighthouse sobre el build de producción, perfil móvil:

| Categoría | Puntuación |
| --- | --- |
| Accesibilidad | 100 |
| Buenas prácticas | 100 |
| SEO | 100 |
| Rendimiento | 90 |

Cumulative Layout Shift 0, First Contentful Paint ~1,0 s.
Todo el texto cumple WCAG AA (contraste ≥ 4,5:1), es navegable por teclado y
respeta `prefers-reduced-motion`.

## Stack

- **Next.js 16** (App Router, Turbopack, prerenderizado estático)
- **TypeScript** en modo estricto
- **Tailwind CSS v4** con tokens de diseño en variables CSS
- **Motion** para las animaciones de scroll
- **next/font** y **next/og** (imagen de Open Graph generada por idioma)

## Empezar

```bash
npm install
```

```bash
npm run dev
```

Abre <http://localhost:3000>; `/` redirige a `/es`. La versión en inglés está en `/en`.

```bash
npm run build
```

## Estructura

```
src/
  app/
    [locale]/          # Root layout + página, prerenderizados para es y en
      layout.tsx       # Fuentes, metadata, hreflang, skip-link
      page.tsx         # Composición de secciones + JSON-LD Person
      opengraph-image.tsx
    globals.css        # Tokens de diseño: única fuente de verdad
    icon.svg, manifest.ts, robots.ts, sitemap.ts
  components/
    layout/            # Header, Footer, LocaleSwitcher, ScrollProgress
    sections/          # Hero, Projects, Skills, About, Timeline, Contact
    ui/                # Button, Badge, Section, Reveal, CopyEmail…
  content/             # ⬅️ TODO el texto y los datos viven aquí
    types.ts           # Contratos; TypeScript obliga a que es y en coincidan
    shared.ts          # Datos sin idioma: enlaces, fechas, stacks, imágenes
    es.ts / en.ts      # Prosa traducible
  lib/                 # cn(), formato de fechas, variantes de motion
```

## Cómo personalizarlo

Todo el contenido está fuera de los componentes. Para tener el sitio listo:

1. **`src/content/shared.ts`** — tu nombre, dominio, email, redes, proyectos
   (stack, enlaces a demo y repo), skills y fechas de la trayectoria.
2. **`src/content/es.ts`** y **`src/content/en.ts`** — reescribe cada `TODO`
   con tus propias palabras. Los dos archivos están tipados contra el mismo
   contrato, así que si añades un campo en uno el build falla hasta que lo
   añadas en el otro.
3. **Archivos** — deja tus assets en:
   - `public/cv/cv-es.pdf` y `public/cv/cv-en.pdf`
   - `public/projects/*.png` (16:9, ≥1280 px de ancho)
   - `public/profile/avatar.jpg` (cuadrada, ≥600 px) y apunta `site.photo` a ella

Si falta una imagen o un enlace, la interfaz muestra un estado de reemplazo
(mockup con gradiente, monograma tipográfico, «Demo en preparación») en lugar
de romperse o de enlazar a la nada.

### Color de acento

Cambia `--accent` en `src/app/globals.css`. Si eliges un acento nuevo,
comprueba que `--on-accent` sigue dando ≥ 4,5:1 sobre él.

## Deploy

1. Sube el repo a GitHub.
2. Importa el repo en [Vercel](https://vercel.com/new) — detecta Next.js solo.
3. Añade tu dominio en *Settings → Domains* y apunta el DNS a Vercel.
4. Actualiza `site.url` en `src/content/shared.ts` con el dominio final:
   de ahí salen las URLs canónicas, el `hreflang`, el sitemap y las etiquetas OG.

## Licencia

Sin licencia todavía. Si quieres que otros puedan reutilizar el código, añade un
archivo `LICENSE` (MIT es lo habitual) y deja claro que los textos, el CV y las
imágenes quedan fuera de esa licencia.
