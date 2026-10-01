---
name: ai-video-production
description: Build SocialOS AI-video production packages with recurring character, world, style and voice bibles, scenes, shots, generation prompts, continuity and timing checks.
---

# AI video production

Retrieve the approved direction and current script. Create only the bibles needed by the project: character, world, style and voice. Every bible has a stable ID, name, type and specification. Describe distinctive details, reference requirements, negative constraints and continuity deliberately.

Create a production record through record_save with content_id, target_duration, bibles, shots and notes. Every shot includes id, scene, start, duration, description, narration, prompt, references and acceptance. In this release the shot timeline must be contiguous and non-overlapping; account for transitions within the assigned shot duration.

Reference exact saved IDs in shots. References resolve to bible IDs or registered asset IDs. Record tool-neutral creative specifications first. Put provider-specific syntax in prompt exports only after checking the provider's current capabilities. Do not assume a provider supports a duration, reference image count or camera control.

Register asset provenance, license and rights evidence separately. Reviewed rights require actual supporting evidence; model guesses do not grant permission. Be explicit about unknown voice, likeness or music rights.

Estimate spoken duration from the script and flag estimates. Measured audio supersedes reading-rate estimates. Verify total runtime, shot order, missing references and continuity with qc_run. The local system prepares a production package; it does not render video or charge generation providers.
