# El Universo de Gabriela

Sitio web y ecosistema de marca de Gabriela, artista. Sitio estático (HTML/CSS/JS, sin build) pensado para GitHub Pages.

## Empezar aquí

Lee **[`BIBLIA_DEL_UNIVERSO.md`](./BIBLIA_DEL_UNIVERSO.md)** primero — es el documento canónico: el manifiesto de Gabriela, la identidad de marca, las reglas del universo (canon narrativo y simbólico), la hoja de ruta de producto en 3 horizontes, la experiencia del coleccionista, la estrategia de contenido, la arquitectura de propiedad intelectual y el sistema de decisiones basado en hipótesis. Es la referencia que prevalece para cualquier persona o IA que trabaje en el proyecto.

Después, **[`ESTRATEGIA_MAESTRA.md`](./ESTRATEGIA_MAESTRA.md)** es el plan de ejecución: arquitectura del sitio, storytelling por obra, embudo de conversión con KPIs, el detalle operativo de los 10 agentes IA y el stack tecnológico recomendado.

## Estructura del sitio

```
index.html                 Inicio
obras/                     Galería ("Obras") + ficha individual por obra
comisiones/                Proceso de comisiones + formulario
el-universo/               Sobre mí + Mi historia + Proceso creativo
colecciones/               Índice de colecciones + página por colección
faq/                       Preguntas frecuentes
contacto/                  Formulario de contacto
blog/                      Blog + artículos
newsletter/                Landing de suscripción
gracias/                   Confirmación tras formulario
coleccionistas/            Portal de coleccionistas (placeholder)
legal/                     Privacidad, términos, cookies (pendientes de revisión legal)
assets/                    CSS, JS, imágenes
.claude/agents/            Definiciones de los 10 agentes IA (ver ESTRATEGIA_MAESTRA.md §10)
```

## Despliegue

Este repo está pensado para publicarse como GitHub Pages **project site** (`mariaperezart.github.io/estudio/`). Por eso cada página usa `<base href="/estudio/">` en el `<head>` y todos los enlaces internos son relativos (sin `/` inicial). Si en el futuro se conecta un dominio propio, basta con cambiar ese `<base href>` a `/` en todas las páginas (o eliminarlo).

Para activar GitHub Pages: Settings → Pages → Deploy from branch → rama `main` (tras fusionar) → carpeta `/ (root)`.

## Estado del catálogo

- `obras/pieza-en-degradado/` y `obras/pieza-02/` son las **dos primeras obras reales** (fotografías propias de Gabriela), ambas de 140 × 70 cm. Título, materiales, año e historia están marcados como "Pendiente" hasta que se confirmen — no se ha inventado ningún dato.
- `colecciones/umbral/`, `obras/el-mapa-que-no-se-dibuja/` y `obras/la-pausa-antes-del-nombre/` son un **ejemplo ilustrativo de plantilla** con imaginería figurativa (puertas, mapas) que **no corresponde** al lenguaje visual real de Gabriela (abstracción de campo de color en degradado — ver `BIBLIA_DEL_UNIVERSO.md` §3). Quedan marcadas en el sitio como pendientes de sustituir.

## Pendiente antes de publicar (ver ESTRATEGIA_MAESTRA.md §15)

- [ ] Completar título, materiales, año, historia y disponibilidad de `obras/pieza-en-degradado/` y `obras/pieza-02/`.
- [ ] Sustituir o retirar la colección de ejemplo "Umbral" por colecciones reales.
- [ ] Conectar el formulario real (sustituir `TU_ID_DE_FORMSPREE` en cada `<form>`).
- [ ] Revisión legal de `legal/privacidad`, `legal/terminos`, `legal/cookies`.
- [ ] Conectar newsletter real (Buttondown/Mailchimp) y analítica (Plausible/Fathom).
- [ ] Registrar dominio propio cuando la marca esté validada.
