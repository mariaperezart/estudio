# El Universo de Gabriela

Sitio web y ecosistema de marca de Gabriela, artista. Sitio estático (HTML/CSS/JS, sin build) pensado para GitHub Pages.

## Empezar aquí

Lee **[`BIBLIA_DEL_UNIVERSO.md`](./BIBLIA_DEL_UNIVERSO.md)** primero — es el documento canónico: el manifiesto de Gabriela, la identidad de marca, las reglas del universo (canon narrativo y simbólico), la hoja de ruta de producto en 3 horizontes, la experiencia del coleccionista, la estrategia de contenido, la arquitectura de propiedad intelectual y el sistema de decisiones basado en hipótesis. Es la referencia que prevalece para cualquier persona o IA que trabaje en el proyecto.

Después, **[`ESTRATEGIA_MAESTRA.md`](./ESTRATEGIA_MAESTRA.md)** es el plan de ejecución: arquitectura del sitio, storytelling por obra, embudo de conversión con KPIs, el detalle operativo de los 10 agentes IA y el stack tecnológico recomendado.

## Estructura del sitio

```
index.html                 Inicio
obras/                     Obra + ficha individual por pieza
colecciones/               Índice de colecciones + página por colección
sobre/                     Statement, biografía, proceso y trayectoria
blog/                      Textos
comisiones/                Proceso de comisiones
contacto/                  Formulario de contacto
faq/                       Preguntas frecuentes
newsletter/                Lista del estudio
gracias/                   Confirmación tras formulario
legal/                     Privacidad, términos, cookies (pendientes de revisión legal)
el-universo/               Redirección a sobre/ (URL antigua)
assets/                    CSS, JS, imágenes
.claude/agents/            Definiciones de los 10 agentes IA (ver ESTRATEGIA_MAESTRA.md §10)
.claude/skills/            Skills invocables (ver auditoria-galeria)
```

## Sistema de diseño

`assets/css/styles.css` es la única hoja de estilos. Principio rector: **la interfaz
desaparece**. Sin sombras, sin degradados, sin tarjetas, sin bordes redondeados, sin
animación de entrada. Fondo blanco continuo, una sola familia tipográfica (Inter) en
tamaños contenidos, y una jerarquía construida con espacio y escala de imagen.

Reglas que no deben romperse:

- **Una obra nunca se recorta.** Nada de `object-fit: cover` ni `aspect-ratio` forzado
  sobre una imagen de obra. La proporción real siempre se respeta.
- Todo el contenido cuelga del **mismo eje izquierdo**; el texto se limita a ~68
  caracteres mediante `.prose`, no estrechando el contenedor.
- Los enlaces de acción son `.link` (texto subrayado), no botones. Un botón lee como
  comercio.
- Cada imagen lleva `width` y `height` reales para reservar su espacio.

## Despliegue

Este repo está pensado para publicarse como GitHub Pages **project site** (`mariaperezart.github.io/estudio/`). Por eso cada página usa `<base href="/estudio/">` en el `<head>` y todos los enlaces internos son relativos (sin `/` inicial). Si en el futuro se conecta un dominio propio, basta con cambiar ese `<base href>` a `/` en todas las páginas (o eliminarlo).

Para activar GitHub Pages: Settings → Pages → Deploy from branch → rama `main` (tras fusionar) → carpeta `/ (root)`.

## Estado del catálogo

- **Colección Hábitats** (`colecciones/habitats/`) es la primera colección real, con statement confirmado por Gabriela.
- `obras/umbral/` ("Umbral") y `obras/habitar/` ("Habitar") son las **dos primeras obras reales** (fotografías propias de Gabriela), ambas de 140 × 70 cm, acrílico sobre lienzo, con historia real y disponibles (julio 2026).
- **El precio ya no se publica.** Las fichas dirigen a "Consultar esta obra" → `contacto/`. Es la convención en el circuito de galería, y era la decisión que más hacía leer el sitio como tienda. El precio de referencia (2.400 €) se mantiene fuera del sitio, para responder por correo.
- La colección de ejemplo que usaba el nombre "Umbral" para una plantilla figurativa (puertas, mapas) **se eliminó del repositorio** al confirmarse que el título real de la primera obra de Hábitats es también "Umbral" — ver `BIBLIA_DEL_UNIVERSO.md` §3.

## Pendiente antes de publicar

Bloqueantes:

- [ ] **Conectar los formularios**: sustituir `TU_ID_DE_FORMSPREE` en `contacto/` y `newsletter/`. Ahora mismo no entregan nada; el aviso de "pendiente" se retiró de la página y quedó como comentario HTML.
- [ ] **Decidir el nombre público.** El sitio firma solo "Gabriela". Ninguna artista de circuito institucional se presenta sin apellido; es el mayor hueco de credibilidad que queda y no se puede resolver desde el código.
- [ ] Revisión legal de `legal/privacidad`, `legal/terminos`, `legal/cookies`.

Recomendables:

- [ ] Recortar `hero.jpg` de ambas obras al borde exacto del lienzo (hoy se ve pared alrededor).
- [ ] Rehacer `dossier/` y `certificados/` con el nuevo sistema: siguen con estilos propios en línea.
- [ ] Conectar newsletter real (Buttondown/Mailchimp) y analítica (Plausible/Fathom).
- [ ] Registrar dominio propio cuando la marca esté validada.
