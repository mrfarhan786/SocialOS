---
name: story-production
description: Convert an approved SocialOS script into Story → Chapter → Scene → Shot units with stable IDs, contiguous timestamps, generation-sized shots and dependency entries.
---

# Storyboard

- Hierarchy: Story → `CH01` → `CH01-SC001` → `CH01-SC001-SH001`. A scene is a narrative unit. A shot is a generation unit.
- Keep script scene IDs. Split scenes into shots that respect `clip_limit_s`. Example: SC008 at 26 s becomes SH001 8 s · SH002 10 s · SH003 8 s.
- Clip limit: use the provider's known limit. If it is unknown and matters, ask card C9 `Clip limit` once.
- Every unit has start, end and duration. Units are contiguous and cover the full runtime. No shot exceeds the limit.
- Each shot records narration alignment, visual intent, and the CHAR/WORLD/OBJECT IDs it uses. Write `dependencies` (bible → shots, scene → shots).
- Revisions change only affected units and preserve stable IDs.

All user questions: native choice cards from `../../references/interaction-flow.md` → Cards (host ask-user tool, 2–7 options, host-added Other box).
