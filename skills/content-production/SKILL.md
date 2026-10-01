---
name: content-production
description: SocialOS packaging engine and world-class retention-focused script engine. Turn a selected topic into title, thumbnail, promise and hook, then a timed chapter/scene script table, and end with the script checkpoint.
---

# Packaging and script

Menus: `../../references/interaction-flow.md` S9–S10.5.

## Packaging engine

Never jump from topic selection to the script.

1. Internally build 4–6 packages. Each has title, thumbnail concept, story angle, opening promise, target viewer, emotional or intellectual driver, supporting reference evidence and positioning fit.
2. Show the strongest 3–5 as GEN **Which direction should we use?** (direction + title per row · `↻ Retry` · Custom).
3. After the user picks one, show **Title · Thumbnail idea · Promise · Hook direction** in 4 lines, then the script gate.

## Script engine

Inputs: topic, verified research, reference `story_mechanics`, positioning, package, duration, production type, style and audience.

Optimize for:
- clarity and a gripping first 5–10 seconds
- curiosity and open loops
- escalating information and visual progression
- pattern interruptions and re-hooks
- meaningful reveals and a satisfying payoff
- a natural CTA

No empty clickbait. Every title and thumbnail promise must be fulfilled.

Architecture: Cold open → Promise → Setup (only necessary context) → Escalating discoveries (each opens the next question before closing the last) → Re-hooks (about every 45–90 s, as a heuristic) → Major reveal → Payoff → Natural CTA.

Length: plan for about 140–160 spoken words per minute. Do not pad.

Fact-check claims with current sources. Write original narration. Never reuse a reference creator's script.

## Canonical format

Group scenes by chapter. Timestamps must be contiguous and cover the runtime. Scene length is semantic and does not follow clip limits.

| Scene | Time | Narration / Dialogue | Story Purpose | Visual Intent |
|---|---|---|---|---|
| SC001 | 00:00–00:08 | … | Cold open | … |
| SC002 | 00:08–00:24 | … | Open loop | … |

Save as `script_rev`. Then show the S10.5 checkpoint. Do not start expensive or external generation without the matching selection.

All user questions: FIXED/GEN menus from `../../references/interaction-flow.md`, word for word, ending with `Custom — type your own` (GEN also gets `↻ Retry`).
