# Auditoría del Repositorio — estudio (Gabriela)
*Julio 2026*

---

## Resumen Ejecutivo

El repositorio está **excepcionalalmente bien documentado** — 2.800+ líneas de markdown que registran decisiones reales, metodología rigurosa y canon conceptual sin fabricaciones. El mayor riesgo actual no es la calidad de la documentación, sino el crecimiento de la dispersión documentaria (8 archivos canónicos + 4 auxiliares + 12 agentes = 24 puntos de verdad potencialmente desconectados). 

La arquitectura del proyecto es un **hibrido de documentación normativa + sitio estático**, bien estructurado hoy pero que requiere auditoría de coherencia conforme escale. No hay deuda técnica crítica; la principal tarea es mantener la coherencia conceptual mientras crece el catálogo y evoluciona la marca.

---

## 1. Auditoría de Estructura Documentaria

### Estado actual: Bien (con observaciones)

**Documentos canónicos (jerarquía de verdad):**
1. **BIBLIA_DEL_UNIVERSO.md** (449 líneas) — Canon de marca. Prevalece sobre todo. ✅ Correcta jerarquía.
2. **ESTRATEGIA_MAESTRA.md** (449 líneas) — Implementación. Soportada por Biblia.
3. **LIBRO_HABITATS.md** (256 líneas) — Síntesis viva. Sirve de compendio.
4. **INSIGHT_HABITATS.md** (371 líneas) — **NUEVO**. Profundización conceptual de la serie.

**Documentos operativos:**
- MANUAL_DE_MARCA.md — Versión operativa para grabar/publicar
- SERIE_DOCUMENTAL.md — Planificación de contenido largo
- GUIONES_TIKTOK_INSTAGRAM.md — 25 guiones documentados
- PLAN_FEED_INSTAGRAM.md, RECURSOS_FOTOGRAFIA.md, etc.

**Observación:** Existe riesgo de contradicción entre documentos cuando evolucionar. Ejemplos:
- ¿INSIGHT_HABITATS.md dónde encaja en la jerarquía?
- ¿Quién valida cambios en GUIONES_TIKTOK_INSTAGRAM si Gabriela modifica canon?
- ¿Cómo se propagan cambios si el director-marca audita contra Biblia y alguien publica basado en MANUAL_DE_MARCA?

### Recomendación: CRÍTICO
**Crear un índice maestro de referencias cruzadas** que especifique:
- Jerarquía explícita: Biblia > Estrategia > Operativos
- Para cada documento operativo, qué sección de Biblia lo soporta
- Periodicidad de auditoría (mensual, trimestral, por evento)

**Ubicación:** Agregar a README.md una sección "Cómo evoluciona la documentación" con el proceso:
```
Cambio solicitado → Validar contra Biblia 
→ Actualizar Biblia si es decisión real
→ Propagar a docs operativos
→ Auditoría del director-marca antes de publicar
```

---

## 2. Auditoría del Ecosistema de Agentes IA

### Estado actual: Bien diseñado pero sin métricas de éxito

**12 agentes implementados**, cada uno con carril claro:
- Directivos: director-marca, asistente-clientes, consultor-colecciones, consultor-precios
- Contenido: copywriter, guionista-viral, marketing-distribucion, investigador-mercado
- Operativos: crm-coleccionistas, seo, analista, outreach-galerias

**Fortalezas:**
- Separación de responsabilidades clara
- Cada agente tiene `.md` definido en `.claude/agents/`
- Regla de "nunca se fabrica" propagada en cada uno
- Metodología de triple filtro documentada

**Debilidades identificadas:**
1. **No hay métricas de éxito por agente** — ¿Cuándo un agente "funcionó"? ¿Qué lo hace fallible?
2. **No hay protocolo de escalada** — Si un agente sugiere algo que contradice canon, ¿quién decide?
3. **Agentes descartados no tienen historial** — Se menciona que legal/financiero/vocabulario fueron descartados, pero sin documentar por qué podrían reactivarse
4. **El "outreach-galerias" está activo desde julio pero no tiene resultado documentado** — ¿Es un agente esperando un trigger real?

### Recomendación: ALTO
1. **Crear un registro de decisiones por agente:**
   ```
   | Agente | Propuesta | Resultado | Fecha | Canon impactado |
   ```
   Esto trackeará qué sugirieron, cuál fue el resultado real, qué aprendimos.

2. **Definir protocolos de escalada:**
   - Si un agente contradice canon, automáticamente → director-marca + Gabriela
   - Si un agente propone extensión de marca, → LIBRO_HABITATS será actualizado?
   - Si es una hipótesis, marcarlo explícitamente en toda comunicación

3. **Revitalizar el registro de "candidatos descartados"** en ESTRATEGIA_MAESTRA.md §10:
   ```
   - legal: descartado (prematura, 0 transacciones reales). Reactivable cuando: primera venta real.
   - financiero: descartado (prematura, 0 ingresos recurrentes). Reactivable cuando: 3+ ventas/mes.
   - vocabulario-mercado: descartado (prematura, audiencia hispanohablante no validada aún).
   ```

---

## 3. Auditoría de la Estructura del Sitio

### Estado actual: Estructura HTML estática, bien organizada, incompletamente validada

**Puntos fuertes:**
- GitHub Pages + rama `main` → dominio futuro claro
- `<base href="/estudio/">` aplicado correctamente
- Separación clara entre `/obras/`, `/colecciones/`, `/blog/`, etc.
- Sistema de certificados real para Umbral y Habitar

**Puntos débiles:**
1. **Validaciones pendientes en README.md:**
   - Precio orientativo (2.400€) sin validar con venta real
   - Tiempo invertido retirado pero nunca documentó por qué es irrelevante para el comprador
   - Disponibilidad de ambas obras no explícita

2. **Formularios sin conectar:**
   - `TU_ID_DE_FORMSPREE` sigue sin reemplazarse
   - Ni newsletter ni analítica conectadas
   - Esto es un agujero operativo: ¿cómo se captura el contacto real?

3. **Portal de coleccionistas es placeholder:**
   - `coleccionistas/` existe pero es vacío
   - No hay protocolo documentado de qué va allí
   - Sin protocolo de "después de la compra" no se puede cerrar el embudo

4. **No hay checklist de "lanzamiento real":**
   - ¿Cuál es el criterio mínimo para considerar que la web está "lista"?
   - ¿Qué pasa el primer día que alguien quiere comprar?

### Recomendación: CRÍTICO
1. **Completar el checklist de lanzamiento:** Agregar a README.md:
   ```
   [ ] Formulario Formspree conectado (testing real)
   [ ] Newsletter real (Buttondown + primeros suscriptores)
   [ ] Analítica (Plausible/Fathom) con dashboard vivo
   [ ] Portal privado de coleccionistas operativo (primeras 2 compras)
   [ ] Proceso de venta completado al menos 1 vez (real, no simulado)
   [ ] Documentar el resultado: tiempo total, puntos de fricción, qué se aprendió
   ```

2. **Crear protocolo "Primer Comprador":**
   - Cómo se maneja el flujo end-to-end
   - Dónde aparecen fricciones reales
   - Cómo se documenta el aprendizaje
   - Cómo se propaga a los agentes si falló algo

3. **Explicitar la "experiencia del coleccionista" en el sitio:**
   - Hoy está documentada en LIBRO_HABITATS.md §5
   - Pero no está implementada en las páginas (no hay trail claro de "qué pasa después de la compra")
   - Recomendación: agregar breadcrumb conceptual en `comisiones/` y `obras/` → "Después de la compra" con link a portal privado

---

## 4. Auditoría de Coherencia Conceptual

### Estado actual: Muy bueno. Canon bien alineado.

**Consistencias validadas:**
- Manifiesto 30 preguntas (Biblia) ← se refleja en ESTRATEGIA_MAESTRA
- Regla de "nunca se fabrica" ← implementada en triple filtro documentado
- Posicionamiento premium ← coherente en MANUAL_DE_MARCA y guiones
- Hábitats como serie temática ← validada en LIBRO_HABITATS + nuevo INSIGHT_HABITATS

**Inconsistencias detectadas:**
1. **Niveles de abstracción en el mismo documento:**
   - LIBRO_HABITATS es "síntesis viva" pero a veces lee como de ejecución, a veces como conceptual
   - Nuevo INSIGHT_HABITATS es puramente conceptual pero no se menciona en la jerarquía

2. **Lenguaje del "monstruo" aparece en INSIGHT_HABITATS pero NO en LIBRO_HABITATS:**
   - Si el monstruo es parte del canon, debe estar documentado en ambos
   - Ahora hay riesgo de que un agente (guionista-viral, director-marca) no sepa cómo tratarlo

3. **La "oveja" en el insight es histórica pero no está en obras catalagadas:**
   - Se describe como "una obra que podría ser" pero no está en `/obras/`
   - ¿Es obra futura, hipotética, o ya existe?
   - Esto importa para que no se lance contenido sobre una obra que no se vende

### Recomendación: ALTO
1. **Integrar INSIGHT_HABITATS en la jerarquía:**
   - Ubicación en README.md: "Para entender la serie Hábitats a nivel conceptual profundo, lee primero INSIGHT_HABITATS.md, luego LIBRO_HABITATS.md"
   - Revisar LIBRO_HABITATS §3 (El Universo) y asegurar que referencia INSIGHT_HABITATS para "la parte conceptual"

2. **Crear "CANON_HABITATS_VISUAL.md":**
   - Centralizar las reglas visuales que hoy están dispersas:
     - INSIGHT_HABITATS: lenguaje pictórico, composición, figura/fondo
     - MANUAL_DE_MARCA: paleta, tipografía, principios de interfaz
     - RECURSOS_FOTOGRAFIA: protocolo de fotografía de obra
   - Punto de referencia único para director-marca y guionista-viral

3. **Documentar el status de obras con "posibilidad de monstruo":**
   - Si la oveja es real, añadirla a `/obras/` con nota "colección futura"
   - Si es hipotética, moverla a `OTRAS_OBRAS.md` con claridad
   - Evitar que agentes creen contenido sobre obras que no son públicas

---

## 5. Auditoría de Modelo de Datos y Catálogo

### Estado actual: Minimal pero coherente

**Obras catálogadas reales:**
- `umbral/` — 140 × 70 cm, acrílico, 2.400€, única, disponible
- `habitar/` — 140 × 70 cm, acrílico, 2.400€, única, disponible

**Colecciones:**
- `colecciones/habitats/` — primera colección, statement confirmado

**Datos faltantes:**
- Año de creación (retirado porque "no tenía dato real")
- Tiempo invertido (retirado por la misma razón)
- Disponibilidad real: ¿están actualmente en venta o reservadas?

**Observación:** La decisión de "no publicar dato que no es exacto" es alineada con la regla de no fabricar. Bien. Pero crea fricción:
- Un potencial coleccionista ve 2 obras y "todas disponibles" es ambiguo (¿quedan para vender o es solo histórico?)
- No hay fecha de creación → no se puede armar timeline de trayectoria

### Recomendación: MEDIO
1. **Completar el modelo de obra:**
   ```
   titulo: "Umbral"
   ano_creacion: 2024 (o 2025, según Gabriela)
   medidas: "140 × 70 cm"
   tecnica: "acrílico sobre lienzo"
   precio: 2400
   disponibilidad: "vendida" | "reservada" | "disponible"
   coleccion: "habitats"
   enlace_certificado: "/certificados/umbral/"
   ```

2. **Crear `/obras/plantilla.html`** con estructura reutilizable para futuras obras.

3. **Documentar el "embargo de información":**
   - Si el coleccionista aún no ha recibido la obra, no listarlo como "vendido"
   - Si está en espera de pago, no listar como "disponible"
   - Crear estados intermedios si es necesario

---

## 6. Auditoría de Deuda Técnica y Riesgo Operativo

### Estado actual: Bajo riesgo. Sin deuda técnica crítica.

**Deuda técnica identificada:**
1. **Formularios sin backend:** `TU_ID_DE_FORMSPREE` aún placeholders → primer comprador "cae al vacío"
2. **Analytics desconectado:** No hay datos de comportamiento real de visitantes
3. **Newsletter no integrada:** No se captura lista de correo
4. **Portal privado vacío:** Sin mecanismo de "acceso post-compra"

*Nada de esto es "deuda" técnicamente (el código está limpio), pero es **deuda operativa**: la web no cierra el loop de la venta.*

**Riesgos identificados:**
1. **Escalabilidad de documentación:** Con 2.800 líneas de markdown + 12 agentes + crecimiento esperado del catálogo, ¿cómo se mantiene coherencia?
   - Riesgo: contradicciones entre docs cuando Gabriela decide pivotar
   - Mitigación: protocolo de auditoría + una fuente de verdad clara

2. **Dependencia de Gabriela en decisiones de marca:** Todos los filtros convergen en ella
   - Riesgo: sin Gabriela, nadie puede validar si un cambio es "canon" o no
   - Mitigación: documentar decisiones en tiempo real, no a posteriori

3. **El "portafolio acumulativo" es vulnerable:** La web es 2 obras hoy; en 12 meses serán 8-10
   - Riesgo: sin arquitectura escalable de metadatos, se vuelve manual
   - Mitigación: crear sistema de datos (JSON, CSV, base de datos simple) para obras

### Recomendación: ALTO
1. **Antes de 10 obras, migrar metadatos de obras a datos estructurados:**
   ```json
   // obras.json
   [
     {
       "id": "umbral",
       "titulo": "Umbral",
       "ano": 2024,
       "medidas": "140 × 70 cm",
       "tecnica": "acrílico sobre lienzo",
       "precio": 2400,
       "coleccion": "habitats",
       "disponibilidad": "vendida",
       "imagen": "/assets/img/umbral-frontal.jpg",
       "certificado": "/certificados/umbral/"
     }
   ]
   ```
   Luego generar `/obras/index.html` desde este JSON (herramienta simple, sin build).

2. **Conectar Formspree ahora** (es gratis para primeros 50 envíos/mes):
   - Reemplazar `TU_ID_DE_FORMSPREE` por el ID real
   - Testing: enviar un formulario real desde la web
   - Documentar el resultado en un log de "primer contacto real"

3. **Documentar el workflow de "primer comprador"** como diagrama:
   ```
   Visitante descubre obra → Llena formulario de comisión/consulta
   → Email a gabriela@correo.com (Formspree)
   → Manual: responder en <24h
   → Link a portal privado (placeholder hoy)
   → Pago confirmado → Acceso a certificado digital
   ```

---

## 7. Auditoría de Alineación con Modelo de Negocio

### Estado actual: Bien definido, pero validación pendiente

**El modelo está documentado:**
- Hero offer: obras originales + comisiones seleccionadas
- Escalabilidad: colecciones 2-4 veces al año
- 3 horizontes: obra original → ediciones limitadas → IP a licenciar

**Lo que NO está validado:**
1. Precio de 2.400€ es "orientativo" — sin venta real no se sabe si es correcto
2. Demanda estimada de comisiones — ¿cuántos inquiries esperados en Q3?
3. Tiempo de creación real — si "Habitar" tardó 3 meses, ¿escala a 4 obras/año?
4. Propensión a compra de primera audiencia — ¿el 1-2% de 2.700 followers = 27-54 interesados? ¿Cuántos convertirán?

**Observación importante:** El modelo de negocio está documentado con la disciplina de "nunca se fabrica", lo que es muy poco común. Esto es una fortaleza, no una debilidad. La validación vendrá con las primeras transacciones reales.

### Recomendación: MEDIO
1. **Crear "fichas de hipótesis" para cada asunción clave:**
   ```
   Hipótesis: Precio de 2.400€ es el punto óptimo para primera compra
   Métrica: Número de inquiries en primer mes
   Duración: Septiembre 2026 (1 mes post-lanzamiento)
   Resultado: [Se completa tras primer mes]
   Decisión: Mantener / Ajustar a X€ / Crear variante
   ```
   Ubicación: Nueva sección en ESTRATEGIA_MAESTRA.md "Hipótesis en Validación"

2. **Preparar dashboard de KPIs antes de lanzar:**
   - Visitantes únicos
   - Tasa de click a "Contactar"
   - Inquiries por semana
   - Tiempo promedio en página de obra
   - Tasa de conversión de inquiries → reserva

3. **Documentar el "ritual de decisión" post-venta:**
   - Tras vender la primera obra, qué se aprende: tiempo total, costo real, fricción
   - Cómo eso impacta la estimación de "obra/mes" o "4 obras/año"

---

## Matriz de Hallazgos Priorizados

| Severidad | Área | Hallazgo | Impacto Negocio | Esfuerzo | Estado |
|---|---|---|---|---|---|
| CRÍTICO | Documentación | Falta índice jerárquico de referencias cruzadas | Riesgo de contradicción a escala | Bajo | NO INICIADO |
| CRÍTICO | Sitio Web | Formularios sin backend (Formspree desconectado) | Primer comprador "cae al vacío" | Bajo | NO INICIADO |
| CRÍTICO | Sitio Web | Sin protocolo "Primer Comprador" documentado | No se aprende de primera venta real | Medio | NO INICIADO |
| ALTO | Agentes IA | Sin registro de decisiones/propuestas por agente | No se trackeará qué funcionó | Bajo | NO INICIADO |
| ALTO | Documentación | INSIGHT_HABITATS no integrado en jerarquía | Agentes no conocen reglas conceptuales del monstruo | Bajo | PARCIAL (creado, no integrado) |
| ALTO | Sitio Web | Metadatos de obras son HTML manual, no escalable | A 10 obras será insostenible | Medio | NO INICIADO |
| ALTO | Sitio Web | Portal de coleccionistas es placeholder | Embudo incompleto post-venta | Medio | NO INICIADO |
| MEDIO | Datos | Modelo de catálogo incompleto (año, disponibilidad) | Ambigüedad para coleccionista | Bajo | PARCIAL |
| MEDIO | Negocio | Hipótesis de precio sin validar | Decisión de precios basada en aire | Bajo | NO INICIADO |
| BAJO | Documentación | Lenguaje inconsistente entre LIBRO_HABITATS e INSIGHT_HABITATS | Confusión si ambos se leen | Bajo | PARCIAL |

---

## Roadmap de Priorización: 30-60-90 Días

### Semanas 1-2 (Ahora — Agosto 7)
- [ ] **Crear índice maestro documentario** en README.md (1h)
- [ ] **Integrar INSIGHT_HABITATS en jerarquía** — actualizar referencias (1h)
- [ ] **Reemplazar `TU_ID_DE_FORMSPREE`** por ID real + testing (2h)
- [ ] **Documentar protocolo "Primer Comprador"** (2h)

**Entregable:** README.md revisado + web con formulario funcional + protocolo en ESTRATEGIA_MAESTRA.md

### Semanas 3-4 (Agosto 8-21)
- [ ] **Primera venta real** (evento, no entregable)
- [ ] **Documentar resultado de primer comprador** — tiempo, fricción, aprendizaje (2h)
- [ ] **Crear fichas de hipótesis** para 5 asunciones clave (2h)
- [ ] **Conectar newsletter real** (Buttondown) (1h)

**Entregable:** Reporte post-venta + hipótesis documentadas + newsletter operativa

### Semanas 5-8 (Agosto 22 — Septiembre 18)
- [ ] **Crear modelo de datos de obras** (JSON + herramienta simple para generar HTML) (6h)
- [ ] **Migrar Umbral y Habitar a modelo** + validar (2h)
- [ ] **Crear registro de decisiones por agente** (plantilla) (2h)
- [ ] **Auditoría: director-marca valida todos docs contra Biblia** (4h)

**Entregable:** Sitio con 2 obras en modelo escalable + registro de agentes operativo

### Semanas 9-12 (Septiembre 19 — Octubre 16)
- [ ] **Evaluar y ajustar hipótesis de precio** (basado en inquiries reales) (2h)
- [ ] **Implementar portal privado de coleccionistas** (4h)
- [ ] **Segunda colección: preparar y documentar trayectoria** (8h)
- [ ] **Análisis de datos: primeros 60 días de tráfico** (2h)

**Entregable:** Portal privado operativo + segunda colección en proceso + análisis de primeros resultados

---

## Métricas a Trackear Desde Ahora

### Técnicas
- Visitantes únicos / sesiones
- Tiempo promedio en página (obra, colección, inicio)
- Bounce rate por página
- Click-through rate: inicio → obra → contacto
- Tasa de formularios completados

### Negocio
- Inquiries por semana (comisiones + contacto general)
- Tasa de conversión inquiries → reserva → venta
- Ticket promedio (precio de obra + comisiones)
- Días desde inquiry hasta venta cerrada
- NPS de coleccionistas (eNPS: "¿recomendarías a un amigo?")

### Marca
- Seguidores Instagram (tendencia)
- Engagement en contenido Hábitats vs. antiguo contenido
- % de comentarios que mencionan "atmosfera" / "contemplación" / palabras clave
- Menciones orgánicas en historias de coleccionistas

### Operativo
- Cumplimiento del tiempo estimado de creación por obra
- Calidad de fotografía (% de fotos reutilizables en primera toma)
- Tiempo promedio de respuesta a inquiries
- % de cambios de especificación post-comisión

---

## Conclusión

El proyecto está **bien construido y excepcionalmente documentado**. El mayor riesgo no es técnico sino operativo: mantener coherencia y disciplina conforme crece. Las recomendaciones priorizadas son:

1. **Integrar documentación** (índice jerárquico)
2. **Cerrar el loop de venta** (formularios + portal privado)
3. **Validar hipótesis clave** (precio, demanda, timing)
4. **Preparar escalabilidad** (modelo de datos para obras)

Con estas acciones en los próximos 90 días, la marca estará lista para crecer de 2 a 8-10 obras sin perder coherencia.
