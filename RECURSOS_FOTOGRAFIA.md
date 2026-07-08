# Estándar de fotografía de obra — reproducción de catálogo

Prompt universal para editar fotografías de obra con cualquier IA de edición (ChatGPT Images, Flux Kontext, Gemini, Photoshop Generative Edit, Magnific, etc.), pensado para convertir una foto de móvil en una reproducción fiel de catálogo de galería o museo — nunca para reinterpretar o mejorar creativamente la obra. Referenciado desde `ESTRATEGIA_MAESTRA.md` §7 (imagen protagonista de cada ficha).

---

**Edita esta fotografía para que parezca una reproducción profesional de obra de arte destinada a un catálogo de galería o museo (Gagosian, Hauser & Wirth, David Zwirner, Pace Gallery, Art Basel). Mantén una fidelidad absoluta a la pintura original. No reinterpretar, no repintar, no añadir detalles, no eliminar pinceladas ni modificar la composición. La obra debe permanecer exactamente igual.**

Realiza únicamente correcciones fotográficas:

- Corrige el balance de blancos para obtener un blanco neutro sin dominantes cálidas, frías, verdes o magentas.
- Ajusta la exposición de forma muy sutil (+0,2 EV aproximadamente) únicamente si es necesario.
- Recupera ligeramente las altas luces y abre mínimamente las sombras manteniendo todo el rango tonal.
- Conserva el contraste suave y natural de la pintura.
- No aumentar saturación ni vibrancia.
- No modificar el color real de los pigmentos.
- Mantener las transiciones tonales extremadamente suaves.
- Aplicar una nitidez muy ligera únicamente para recuperar la captura original, nunca para inventar textura.
- Reducir ruido de forma mínima preservando completamente la textura del lienzo.
- No utilizar HDR.
- No utilizar Clarity agresiva.
- No utilizar Dehaze.
- No exagerar la textura.
- No crear microcontraste.
- No aplicar efectos artísticos.

Si existen defectos fotográficos:
- eliminar únicamente polvo, manchas, suciedad, pequeñas marcas de la pared o imperfecciones del entorno;
- conservar intacta toda la superficie pintada.

Si la fotografía presenta perspectiva:
- corregir la perspectiva hasta que el lienzo quede perfectamente rectangular;
- mantener proporciones exactas;
- laterales completamente verticales;
- borde superior e inferior horizontales.

Si existen diferencias de iluminación:
- igualarlas únicamente sobre la pared o fondo;
- nunca modificar la iluminación interna de la pintura.

Si aparecen muebles, techo, suelo u otros elementos:
- recortar para dejar únicamente la obra con un margen uniforme del 8–10 % alrededor;
- centrar perfectamente el cuadro.

El resultado debe parecer una fotografía realizada por un fotógrafo especializado en documentación de obra para archivo de museo o catálogo editorial.

### Aspecto final
Neutro, limpio, natural, sin sobreprocesado, máxima fidelidad cromática, máxima fidelidad tonal, textura auténtica del lienzo, iluminación uniforme, calidad editorial de alta gama, reproducción museística, sin apariencia de imagen generada por IA, sin modificar la pintura original bajo ninguna circunstancia.

### Frase de cierre a incluir siempre en el prompt

> Preservar absolutamente cada pincelada, veladura, transparencia, textura y accidente de la pintura original. El objetivo es mejorar únicamente la fotografía, nunca la obra. El resultado debe ser indistinguible de una reproducción profesional realizada por un fotógrafo de museo.

## Cómo se usa en este proyecto

1. Fotografiar la obra con la mejor luz disponible (natural, difusa, sin flash directo).
2. Pasar la foto por una IA de edición con el prompt de arriba para obtener la versión de catálogo.
3. Usar esa versión como imagen protagonista (`hero.jpg`) de la ficha de obra — las fotos de detalle/textura y "en el espacio" pueden mantenerse más documentales, sin este procesado, para no perder la sensación de estudio real.
4. Optimizar el archivo final para web (ver `ESTRATEGIA_MAESTRA.md` §13: imágenes comprimidas, formato adecuado) antes de subirlo al repositorio.

## Protocolo fijo de documentación por obra (qué fotografiar, siempre, sin excepción)

Principio: una mala presentación visual pierde ventas antes de que alguien llegue a valorar la obra — no porque la pintura sea peor, sino porque comparar cuesta esfuerzo, y ante la duda se elige lo que es más fácil de evaluar. Por eso cada obra terminada, sin excepción, genera el mismo conjunto fijo de material — no se improvisa por obra:

1. **Frontal / archivo** (`hero.jpg`): la obra completamente de frente, sin perspectiva, sin sombras, sin decoración — procesada según el estándar de catálogo de arriba. Ya es el estándar seguido en `assets/img/obras/`.
2. **Detalle** (`detalle-01.jpg`, `detalle-02.jpg`, y también `vista-lateral.jpg` — su propio `alt` la describe como una vista angulada de la trama/degradado, no como el canto del bastidor): textura, capas, pincelada, calidad del acrílico — genera confianza en la calidad física de la obra. Ya en uso, tres tomas de detalle por obra.
3. **En pared** (escala real, toma neutra que permita entender el tamaño frente al espacio): **pendiente en Umbral y Habitar** — corrección a una nota anterior de este documento, que identificaba erróneamente `vista-lateral.jpg` como esta toma. Revisando el propio sitio (`obras/umbral/index.html`, `obras/habitar/index.html`), esa imagen está clasificada como detalle (punto 2), no como esta. Ninguna de las dos obras tiene todavía una foto limpia de escala real — se añade cuando exista la sesión correspondiente.
4. **En ambiente**: no cualquier salón — un espacio coherente con la marca (minimalista, silencioso, luminoso, arquitectura limpia). Ese ambiente comunica tanto como la pintura. **Umbral**: ya en uso (`contexto.jpg`, "en el salón de Gabriela, sobre un sofá burdeos"). **Habitar**: **pendiente** — no tiene una foto de ambiente propia; su `vista-lateral.jpg` menciona el mismo sofá de fondo pero es una toma de detalle, no un plano de ambiente real.
5. **Lateral** (`lateral.jpg` — nuevo, pendiente en Umbral y Habitar): el canto del bastidor, el grosor, el acabado de los bordes — no confundir con la toma ya existente `vista-lateral.jpg` (punto 2), que es un ángulo de detalle de la superficie pintada, no del canto físico. Transmite el cuidado profesional del objeto físico, no solo de la imagen pintada.
6. **Trasera** (`trasera.jpg` — nuevo, pendiente en Umbral y Habitar): firma, sistema de colgado y, cuando exista, etiqueta/certificado. Reduce la incertidumbre de quien compra sin haber visto la pieza en persona.
7. **Vídeo corto del objeto** (15-30s, distinto del vídeo de proceso de `ESTRATEGIA_MAESTRA.md` §7 punto 10): cómo cambia la superficie con la luz al recorrerla — algo que ninguna fotografía fija puede transmitir.

Los puntos 5 y 6 son la ampliación real de este protocolo respecto a lo que ya se venía haciendo. Para Umbral y Habitar, los puntos 3, 5 y 6 quedan marcados como **Pendiente** (y el punto 4 también en el caso de Habitar) — se añaden cuando exista la sesión de fotos correspondiente, no se fabrican ni se simulan.

Con este conjunto fijo, cada obra nueva alimenta automáticamente la web, el dossier, redes y cualquier propuesta a galerías sin tener que decidir de nuevo qué fotografiar cada vez.
