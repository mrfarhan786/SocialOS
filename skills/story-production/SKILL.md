---
name: story-production
description: Convert an approved SocialOS script into Story → Chapter → Scene → Shot units with stable IDs, contiguous timestamps, generation-sized shots and dependency entries.
---

# Storyboard

- Hierarchy: Story → `CH01` → `CH01-SC001` → `CH01-SC001-SH001`. A scene is a narrative unit. A shot is a generation unit.
- Keep script scene IDs. Split scenes into shots that respect `clip_limit_s`. Example: SC008 at 26 s becomes SH001 8 s · SH002 10 s · SH003 8 s.
- Clip limit: use the provider's known limit. If it is unknown and matters, ask once: 1 5 s · 2 8 s · 3 10 s · 4 Custom.
- Every unit has start, end and duration. Units are contiguous and cover the full runtime. No shot exceeds the limit.
- Each shot records narration alignment, visual intent, and the CHAR/WORLD/OBJECT IDs it uses. Write `dependencies` (bible → shots, scene → shots).
- Revisions change only affected units and preserve stable IDs.

All user questions: strict Question format in `../../references/interaction-flow.md` (interactive choice UI + `Custom — type your own`).
