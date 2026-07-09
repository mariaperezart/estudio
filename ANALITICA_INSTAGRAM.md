# Analítica de Instagram — Registro real de rendimiento por post

*Registro vivo, mantenido por el agente `analista`. Solo contiene datos reales que Gabriela comparte (capturas de Insights) — nunca una cifra estimada o extrapolada. Si un dato no se ha compartido, se marca como "sin dato", nunca se rellena.*

---

## Cómo se usa

1. Cada vez que Gabriela comparte una captura de Insights de un post, se registra aquí con fecha, cifras reales y una lectura corta.
2. **No se saca conclusión de un solo post.** Un post flojo o fuerte aislado no cambia la estrategia — el patrón importa a partir de 5-6 publicaciones reales (ver `.claude/agents/analista.md`).
3. Cuando haya suficientes posts, `analista` resume el patrón (qué formato/tema funciona mejor) en vez de analizar cada post por separado para siempre.

---

## Registro

### Post 1 — `umbral-quote.jpg` (publicado julio 2026)

Primera publicación real del capítulo Hábitats en @mariagperezs (~2.695 seguidores en el momento de análisis). Ver `PLAN_FEED_INSTAGRAM.md` #1.

| Métrica | Valor (a las 21h de publicado) |
|---|---|
| Visualizaciones | ~45 |
| Visitas al perfil | 1 |
| Seguidores nuevos | 0 |
| Origen del alcance | 100% Feed |
| Alcance vs. audiencia | ~1,6% de seguidores |

**Lectura**: alcance orgánico bajo para el tamaño de la cuenta. **Confirmado por Gabriela**: se publicó solo la tarjeta de cita, sin el Reel complementario (Guion 1, *"Tengo dos pinturas nuevas..."*) — no sabía que el plan estaba diseñado para publicarse en conjunto. Es la explicación más probable del alcance bajo: Instagram prioriza el descubrimiento de Reels sobre imágenes estáticas, y una imagen sola compite en desventaja real. Corregido en `PLAN_FEED_INSTAGRAM.md` §0 para que quede explícito en los 11 posts restantes.

Factor secundario, todavía real: la cuenta estuvo un tiempo inactiva antes de este post (se curó a 10 publicaciones antes de este capítulo) — Instagram suele tardar varias publicaciones en recalibrar el alcance de una cuenta reactivada.

**No se concluye nada definitivo con un solo post**, pero esta causa ya no es una hipótesis sin confirmar — es el punto de partida real para el Post 2: publicar imagen + Reel el mismo día y comparar.

### Post 2 — pendiente

Se registra en cuanto Gabriela comparta el post y, más adelante, sus Insights.

---

## Relación con el resto del repositorio

- `.claude/agents/analista.md` — agente responsable de este registro y de detectar el patrón cuando haya suficientes datos.
- `PLAN_FEED_INSTAGRAM.md` — la cuadrícula planificada; cada entrada ✅ publicada debería tener su fila correspondiente aquí en cuanto haya datos.
- `GUIONES_TIKTOK_INSTAGRAM.md` — los Reels que complementan cada post de feed; clave para diagnosticar el alcance real.
