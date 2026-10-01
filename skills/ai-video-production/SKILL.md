---
name: ai-video-production
description: Prepare SocialOS shot-level video prompts from QC-approved visuals, run video-prompt QC, and stop at the hard explicit video-generation approval gate.
---

# Video preproduction

Runs after image QC, or after prompts if images are made elsewhere.

Each shot prompt includes:
- stable shot ID and source/reference image
- duration
- subject, camera and environmental motion
- start and end state
- continuity rules
- negative constraints

Check the current provider capabilities before writing provider syntax. Never assume duration, reference count, audio or lip-sync support.

QC: durations match shots, motion matches narration, continuity holds across adjacent shots, and the bibles are respected.

## Hard gate

Show the S16 menu (`../../references/interaction-flow.md`).
- Rendering is authorized **only** by "Generate videos", and only for the current package revision.
- Name the provider before invoking it.
- A material package change requires fresh approval.
- Approval of content, script, storyboard, images or prompts never authorizes video.
- Never auto-render.
