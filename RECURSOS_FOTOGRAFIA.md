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
