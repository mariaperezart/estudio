# Gabriela Pérez

Sitio web y documentación del estudio de Gabriela Pérez, artista, León (España).
Sitio estático —HTML, CSS y un archivo de JavaScript— sin proceso de compilación,
publicado en GitHub Pages.

**En línea:** https://mariaperezart.github.io/estudio/
**Última actualización:** 2 de agosto de 2026

---

## Un solo documento manda

**[`MARCA.md`](./MARCA.md)** es el documento canónico. Define el
posicionamiento, la identidad visual, la voz y las reglas de publicación, y
**tiene prioridad sobre cualquier otro archivo de este repositorio**, incluido
este README.

Si algo aquí contradice a `MARCA.md`, gana `MARCA.md`.

### Lo que depende de Gabriela

- **[`QUE_TENGO_QUE_HACER.txt`](./QUE_TENGO_QUE_HACER.txt)** — web, obra, CV,
  fotografía.
- **[`INSTAGRAM.txt`](./INSTAGRAM.txt)** — la cuenta, paso a paso.

### Documentación anterior

`ESTRATEGIA_MAESTRA.md`, `MANUAL_DE_MARCA.md`, `BIBLIA_DEL_UNIVERSO.md`,
`PLAN_FEED_INSTAGRAM.md`, `GUIONES_TIKTOK_INSTAGRAM.md` y `SERIE_DOCUMENTAL.md`
describen una marca de venta directa que se desmontó el 1 de agosto de 2026.
Llevan aviso de supersesión en cabecera.

Conservan datos reales de obra y trayectoria. **Nada de lo que digan sobre
posicionamiento, navegación, identidad visual, precio o embudo sigue vigente.**
No son fuente para decisiones nuevas.

---

## Estructura

```
index.html                    Portada: la obra, sin texto de reclamo
obras/                        Índice de obra
obras/umbral/                 Umbral, 2026
obras/habitar/                Habitar, 2026
colecciones/habitats/         La serie Hábitats (la ruta es herencia; el término es «serie»)
sobre/                        Statement y proceso
cv/                           Biografía, exposiciones, formación, dossier
contacto/                     Dirección del estudio
blog/                         Notas del estudio
comisiones/                   Proceso de encargos (fuera del menú principal)
dossier/                      Documento A4 imprimible para galerías
certificados/                 Plantillas de certificado (noindex, sin enlazar)
legal/                        Privacidad, términos, cookies
el-universo/                  Redirección a sobre/ (URL anterior)
404.html

assets/css/styles.css         Única hoja de estilos
assets/js/main.js             Único script: abrir el menú en móvil
assets/fonts/                 Inter autoalojada (SIL OFL)
assets/img/obras/             Documentación de obra
assets/img/retrato/           Retratos de la artista
assets/img/estudio/           Estudio y proceso
assets/img/archivo/           Obra anterior, no publicada (ver su README)

.claude/agents/               11 agentes de IA
.claude/skills/               auditoria-galeria
```

**No hay** `colecciones/index.html`, ni página de preguntas frecuentes, ni
newsletter, ni portal de coleccionistas. Se eliminaron: eran páginas
transaccionales en un sitio que no vende.

---

## Sistema de diseño

`assets/css/styles.css` es la única hoja de estilos. Principio rector: **la
interfaz desaparece.** Sin sombras, degradados, tarjetas, bordes redondeados ni
animación de entrada. Fondo blanco continuo, una sola familia tipográfica en
tamaños contenidos, y una jerarquía construida con espacio y escala de imagen.

Reglas que no deben romperse:

- **Una obra nunca se recorta.** Nada de `object-fit: cover` ni `aspect-ratio`
  forzado sobre una imagen de obra. La proporción real siempre se respeta.
- Todo el contenido cuelga del **mismo eje izquierdo**. El texto se limita a
  unos 68 caracteres mediante `.prose`, aplicando la medida a los hijos y no
  estrechando el contenedor, que rompería ese eje.
- Los enlaces de acción son `.link`, texto subrayado, **no botones**. Un botón
  lee como comercio.
- Cada imagen lleva `width` y `height` reales para reservar su espacio antes de
  cargar.
- **Cero peticiones a terceros.** La tipografía está autoalojada. No se
  reintroduce Google Fonts ni ningún recurso externo: transmitiría la IP de
  quien visita sin su consentimiento y obligaría a declararlo en la política de
  privacidad.
- Las URL de CSS y JS llevan el hash de su contenido (`?v=…`). Al cambiar el
  archivo cambia la URL, así que ninguna caché sirve una versión obsoleta.

---

## Despliegue

GitHub Pages, rama `main`, carpeta raíz. Cada página lleva
`<base href="/estudio/">` y todos los enlaces internos son relativos, sin barra
inicial. Con dominio propio, basta cambiar ese `<base>` a `/`.

**Comprobación imprescindible:** en Settings → Pages, la rama de origen debe ser
`main`. Durante julio de 2026 estuvo apuntando a una rama de trabajo antigua, y
el sitio publicado no era el del repositorio. Si lo que se ve en línea no
coincide con `main`, es lo primero que hay que mirar.

Trabajar siempre sobre `main`. Varias ramas paralelas editando el mismo sitio
fue el origen de ese problema.

---

## Estado de la obra

- **Hábitats, 2026** es la serie en curso. Dos piezas: *Umbral* y *Habitar*,
  ambas de 140 × 70 cm, acrílico sobre lienzo.
- **Dos obras no son un cuerpo de obra.** Es el límite real del proyecto, y
  ninguna decisión de diseño o de texto lo compensa. Hasta que existan entre
  ocho y doce piezas, el resto es mantenimiento.
- **No se publica precio.** Las fichas dirigen al estudio. Es la convención del
  circuito de galería y era la decisión que más hacía leer el sitio como tienda.
  Ninguna obra de la serie se ha vendido todavía, así que no hay precio
  validado: la cifra se acuerda por correo cuando surja la primera operación.
- La fotografía de obra actual es insuficiente —986 × 488 px, con la pared
  visible y el balance de blancos descuadrado entre las dos piezas—. Protocolo
  de sustitución en [`RECURSOS_FOTOGRAFIA.md`](./RECURSOS_FOTOGRAFIA.md).
- `assets/img/archivo/2020-merkarte/` guarda la obra anterior, expuesta en el
  Círculo de Bellas Artes de Santa Cruz de Tenerife en 2020. Era **pintura
  digital**, no acrílico. No se publica en el sitio: pertenece a otra práctica.

---

## Pendiente

- [ ] Revisión legal de `legal/privacidad`, `legal/terminos` y `legal/cookies`.
- [ ] Refotografiar *Umbral* y *Habitar* siguiendo `RECURSOS_FOTOGRAFIA.md`.
- [ ] Borrar en GitHub las ramas `claude/*`. Todo lo real está en `main`.
- [ ] Confirmar si conviene mantener `comisiones/`, que sigue siendo la única
      página con lógica comercial.
- [ ] Dominio propio y, si se añade analítica, que sea sin cookies para no
      romper la regla de cero peticiones a terceros.
