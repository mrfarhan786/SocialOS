---
name: visual-production
description: SocialOS visual system. Build STYLE-BIBLE-01 from the reference style profile plus the user's decision, canonical CHAR/WORLD/OBJECT bibles, the Master Production Package with timed shot prompts, the image gate, batched generation with visual QC, and dependency-aware revisions.
---

# Visual production

Menus: `../../references/interaction-flow.md` S6.5 and S12–S14.

## Style

STYLE-BIBLE-01 = reference `visual_profile` + style `decision`. It is never copied automatically. It defines:
- art direction and realism/stylization
- character rendering
- lighting, color, camera/lens and composition
- environment treatment, typography/graphics and textures
- aspect ratio, negative constraints and continuity rules

It is drafted at S6.5 and locked after test-batch QC.

## Consistency

Define recurring entities once: `CHAR-01` (face, age, hair, wardrobe, proportions), `WORLD-01` (environment, architecture, lighting logic) and `OBJECT-01`. Prompts reference these IDs and inherit their exact canonical descriptors. Never redescribe or alter them per shot. Once frames are approved, use them as image references where the host supports it.

## Master Production Package

Deliver one coherent document with these sections:
- Project identity · Reference intelligence summary · Reference style profile · STYLE-BIBLE-01
- Character, world and object bibles
- Camera · Lighting · Color · Typography/graphics · Aspect ratio
- Continuity rules · Global negative constraints
- Chapters → scenes → shots

Shot block:
```
CH01-SC003-SH002
00:42–00:50 | 8 sec
Narration: …
References: STYLE-BIBLE-01, CHAR-01, WORLD-02
Prompt: subject/action, environment, composition, camera, lighting, continuity details, aspect ratio
Negative: …
Motion intent: …
```

Keep every shot addressable internally for revisions.

**Copyable prompts:** put every prompt in its own fenced code block (```text) so the host shows a Copy button. Put the shot ID and timestamp on the line above the block, as plain text, and only the prompt inside it. One prompt per block, never combined.

## Image generation

Generate only after an S13 choice. Every run follows: test batch of 3–5 representative shots → QC → lock bibles → remaining batches. Do not ask the user to approve internal batches unless an issue is material. Link outputs to shot IDs.

## QC

Check style, identity, wardrobe, face/age, environment, objects, architecture, lighting, color, branding, typography, aspect ratio, prompt mismatch and coverage. Report exceptions only (S13.5). Fix causes at the source: correct the bible if it is shared, or the prompt if it is local. Claim visual inspection only if the host actually exposed the images. Otherwise say QC was not possible.

## Revisions

Resolve the entity, read `dependencies`, count the affected shots, then show the S14 menu. Update only the dependents and bump their versions. Never restart the project.

All user questions: native choice cards from `../../references/interaction-flow.md` → Cards (host ask-user tool, 2–7 options, host-added Other box).
