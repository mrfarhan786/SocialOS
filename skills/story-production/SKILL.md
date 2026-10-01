---
name: story-production
description: Convert an approved SocialOS script into chapters, scenes and generation-sized shots/clips with stable IDs, timing, continuity and narration alignment.
---

# Story and storyboard production

Use the hierarchy **story → chapters → scenes → shots/clips**. A scene is a narrative unit; a shot/clip is a generation unit. Do not equate a 10-second generator limit with scene length.

Use stable hierarchical IDs: `CH01`, `CH01-SC001`, `CH01-SC001-SH001`. Calculate start times and durations so chapters, scenes and shots are contiguous and cover the target runtime. No shot may exceed the project's `max_clip_duration_seconds`.

Create only meaningful scene boundaries. Divide each scene into shots that preserve visual continuity, narration timing and generator constraints. Keep the complete hierarchy in the working project context after the required bibles are available, preserving stable IDs so later revisions can target only affected chapters, scenes, or shots.
