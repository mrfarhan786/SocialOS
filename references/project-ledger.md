# SocialOS project ledger v3.0

Canonical working state, kept in conversation/project context. It is **not a database**, so never claim cross-session persistence. The schema is shaped so that future MCP persistence (projects, research cache, asset registry, revisions) can implement it without changing the workflow.

## Statuses

`unknown` · `candidate` · `derived` · `confirmed` · `researched` · `approved` · `stale` · `invalidated`

## Schema

```
project:     id, stage, completed_stages[]
intent, platform
channel:     mode (new|existing), name, url, handle, niche {umbrella, sub}, positioning,
             audience, description, pillars[], brand_direction
REFERENCE_SET:
  REF01:     identity {url, kind channel|video, origin user|discovered}, evidence[],
             positioning, audience, topics[], titles[], thumbnails, performance_patterns,
             representative_videos[], story_mechanics {transcript: available|unavailable, ...},
             visual_profile, gaps[], depth [A,B,C], analyzed_at
  REF02: ...
  SYNTHESIS: common_patterns, breakout_patterns, oversaturated_patterns, whitespace,
             audience_psychology, packaging_patterns, story_patterns, visual_patterns
gap_map:     (existing channels)
tools:       [{tool, purposes[], status approved|declined}]
windows:     trend 7-10d (fixed), breakout 30|60|90|custom, structural auto
evidence_cache[]: {source, retrieved_at, window, layer observed|analysis, claim}
production:  types[] (multi), format, duration {long, short}, clip_limit_s
style:       reference_profile, decision, STYLE-BIBLE-01 {version, locked}
topics:      batches[] {rows[], shown_titles[]}, selected
package:     direction, title, thumbnail, promise, hook
script_rev, storyboard_rev
units:       CH → SC → SH {id, start, end, duration, narration, refs[]}
bibles:      STYLE-BIBLE-01, CHAR-nn, WORLD-nn, OBJECT-nn {version}
prompts:     image/video per shot {rev, status}
assets:      {id, shot_id, kind, status, qc}
approvals:   image_generation, video_generation {package_rev, tool}
dependencies: entity_id → [dependent ids]
```

## Pre-question check (before every question)

1. Is the answer explicit in the conversation or ledger? → skip.
2. Can it be safely derived? → derive (`derived`).
3. Is the derivation consequential? → confirm in one line.
4. Otherwise → ask.

## Never-repeat rule

Never re-analyze a reference, re-ask niche/type/format/duration, re-run the same tool research or regenerate a synthesis. Exceptions:
- the user changed a dependency
- the evidence is `stale` (trend-window data older than about 10 days, or breakout data outside its window)
- the user asked for a refresh
- the prior result is incomplete or invalid

## Invalidation

| Change | Invalidates | Keeps |
|---|---|---|
| References | SYNTHESIS, gap map, reference-dependent topics; style profile if visual | platform, channel name, unrelated preferences |
| Niche / positioning | topics, package, script onward | references, production profile |
| Production type / format / duration | topics (re-rank), script onward | references, channel |
| STYLE-BIBLE-01 | dependent image prompts, affected images, affected video prompts | research, topic, script |
| CHAR/WORLD/OBJECT bible | prompts/assets of dependent shots only | everything else |
| Topic / package | script onward | research, style |
| Script scenes | affected shots, their prompts, assets, video prompts | unaffected scenes |
| Video package after approval | video approval | images |

Invalidate only dependents. Preserve everything else.
