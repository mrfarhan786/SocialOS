---
name: reference-intelligence
description: Mandatory SocialOS reference/competitor stage for new and existing channels. Analyze user-supplied or discovered reference channels/videos once (channel scan, story mechanics, visual profile), write REFERENCE_SET + SYNTHESIS to the ledger, and produce a new-channel blueprint or an existing-channel gap map.
---

# Reference intelligence

Follow `../../references/interaction-flow.md` S3–S5, `../../references/research-rubric.md` and `../../references/project-ledger.md`.

## Inputs

One channel, several channels, video URLs, or discovery (see the rubric, Reference discovery). For a video URL, analyze the video and scan its channel at level A. Use only tools approved in `tools`. Skip any reference that is already analyzed at the needed depth.

## Depth (chosen automatically, never asked)

- **A — Channel scan**: positioning, niche/sub-niches, audience, topic clusters, recent uploads, upload frequency, title patterns, thumbnail patterns, durations, recent performance, breakout videos, repeated winners, publishing pattern, first public upload observed.
- **B — Content architecture**: take 2–4 representative videos (recent breakout, strongest relative performer, typical video, latest successful). Where captions or transcripts are legitimately accessible, map:
  Hook → Promise → Context → Open loop → Escalation → Re-hook → Reveal → Payoff → CTA
  Extract hook duration, sentence length, information density, curiosity gaps, re-hook timing, transitions, payoff timing and CTA placement. Learn the mechanics only and never copy a script or a creator's distinctive phrasing. If no transcript exists, record `Transcript unavailable` and use titles, metadata and visible evidence instead.
- **C — Visual intelligence**: style, animation approach, realism versus stylization, B-roll, charts, maps, timelines, typography, camera, lighting, color, transitions, composition, pacing, recurring devices, thumbnail visual language. Write the result to `visual_profile` (this feeds the style decision).

Use A always. Use B and C when the project produces content or visuals (the default).

## Synthesis

Write `SYNTHESIS`: common, breakout and oversaturated patterns, whitespace, audience psychology, and packaging, story and visual patterns. Downstream skills read this and never re-research it.

- **New channel** → Competitive Blueprint: niche options, whitespace and positioning angles. Hand off to `channel-growth`.
- **Existing channel** → scan the user's channel at level A, then build the Gap Map: topics competitors win, topics the user wins, missing opportunities, and title, thumbnail, story, visual, publishing and format gaps, plus emerging opportunities.

## Output

One compact table with one row per reference plus a **Synthesis** row. Columns: `Ref | Positioning | Top topics | Title/thumbnail pattern | Cadence / duration | Breakouts | Story mechanics | Visual style | Gaps`. No prose. Then continue to the next stage's question.

All user questions: FIXED/GEN menus from `../../references/interaction-flow.md`, word for word, ending with `Custom — type your own` (GEN also gets `↻ Retry`).
