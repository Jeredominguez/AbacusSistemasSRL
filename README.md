# Abacus Sistemas S.R.L. – Sitio web

Sitio institucional construido con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) + TypeScript.

## Requisitos

- [Node.js](https://nodejs.org) 20 LTS o superior

## Comandos

| Comando           | Acción                                     |
| ----------------- | ------------------------------------------ |
| `npm install`     | Instala las dependencias                   |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera el sitio estático en `dist/`        |
| `npm run preview` | Previsualiza el build de producción        |

## Dónde editar

- `src/data/site.ts` – datos de la empresa (teléfonos, dirección, año de fundación, etc.).
- `src/data/content.ts` – servicios, soluciones, módulos y metodología.
- `src/components/` – cada sección de la página.
- `src/styles/global.css` – colores y tipografías de la marca.
- `public/images/` – logos.

## Pendientes antes de publicar

- Completar `foundedYear` en `site.ts` para mostrar los años de trayectoria.
- Confirmar teléfonos, WhatsApp y correo.
- Configurar `PUBLIC_FORM_ENDPOINT` (ver `.env.example`) para recibir las consultas del formulario.
- Definir el dominio en `astro.config.mjs` (`site`).
- Reemplazar el logo raster por una versión vectorial (SVG).
