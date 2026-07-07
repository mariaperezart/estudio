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

- **Colección Hábitats** (`colecciones/habitats/`) es la primera colección real, con statement confirmado por Gabriela.
- `obras/umbral/` ("Umbral") y `obras/habitar/` ("Habitar") son las **dos primeras obras reales** (fotografías propias de Gabriela), ambas de 140 × 70 cm, acrílico sobre lienzo, con historia real y precio orientativo (2.400€, pendiente de validar con la primera venta). Quedan pendientes de confirmar: tiempo invertido, año exacto y disponibilidad.
- La colección de ejemplo que usaba el nombre "Umbral" para una plantilla figurativa (puertas, mapas) **se eliminó del repositorio** al confirmarse que el título real de la primera obra de Hábitats es también "Umbral" — ver `BIBLIA_DEL_UNIVERSO.md` §3.

## Pendiente antes de publicar (ver ESTRATEGIA_MAESTRA.md §15)

- [ ] Completar tiempo invertido, año y disponibilidad de `obras/umbral/` y `obras/habitar/`.
- [ ] Validar el precio orientativo (2.400€) con la primera venta real.
- [ ] Conectar el formulario real (sustituir `TU_ID_DE_FORMSPREE` en cada `<form>`).
- [ ] Revisión legal de `legal/privacidad`, `legal/terminos`, `legal/cookies`.
- [ ] Conectar newsletter real (Buttondown/Mailchimp) y analítica (Plausible/Fathom).
- [ ] Registrar dominio propio cuando la marca esté validada.
