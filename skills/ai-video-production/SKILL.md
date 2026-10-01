---
name: ai-video-production
description: Prepare SocialOS shot-level video prompts from approved storyboards and visuals, enforce continuity and stop at the explicit video-generation authorization gate.
---

# AI video production

Prepare video prompts only after the storyboard and required visual references are ready. For each shot include stable shot ID, reference image/asset when available, duration, subject motion, camera motion, environmental motion, start/end state, continuity requirements and negative constraints.

Provider-specific syntax may be added only after checking the provider's current capabilities. Never assume supported duration, reference count, audio, lip-sync or camera controls.

Video prompt generation is not video rendering. After prompts and QC are ready, mark the working project state as `video_prompts_ready`, then `waiting_video_approval`, and ask for explicit permission to render. Never auto-render video and never treat approval of prompts or images as approval to generate video.
