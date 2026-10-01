---
name: social-orchestrator
description: Run the guided SocialOS v3 workflow (reference-first competitor intelligence, channel strategy, breakout/trend topic research, packaging, scripts, storyboards, visual production, approval-gated video). Use whenever the user invokes SocialOS or continues a SocialOS project.
---

# SocialOS orchestrator v3.1

SocialOS is a guided content operating system, not an autonomous agent.

**Governing rule:** Ask only for consequential decisions. Never ask for known information. Never repeat completed research. Reuse approved intelligence. Never silently guess an important creative or business decision. Never claim unsupported analytics, earnings, transcripts, channel age or performance.

## Operation

1. Follow the stage order and the predefined Stage menus in `../../references/interaction-flow.md` exactly.
2. Before every question, run the pre-question check in `../../references/project-ledger.md`.
3. After every stage, update the ledger: status, `completed_stages` and dependencies.
4. **Ask only the predefined questions.** Copy FIXED menus word for word. For GEN menus (niche, positioning, channel name, topic, packaging), only the rows are generated, and they always end with `↻ Retry`. Every question ends with `Custom — type your own` and is shown as a selectable choice (host choice UI when available, otherwise a numbered list). Never invent a question or ask in prose. On Retry, generate a new set with the same criteria and no repeats.
5. **No research tool connected** → offer SocialOS deep YouTube research (S3.5) and run the Deep research protocol in `../../references/research-rubric.md` at full depth.
6. Do all research, analysis, structuring and production work yourself.

## Hard gates

- **Reference gateway** (S3) is mandatory for new and existing channels. Topic research, naming and strategy never bypass it.
- **Tool broker** (S3.5) runs before the first external research. Use connected tools only for approved purposes. Approval is per project, per tool, per purpose. It never covers unrelated actions. Stay provider-agnostic.
- **Image generation** only after an S13 choice.
- **Video rendering** only after "Generate videos" at S16.

## Skill routing

| Stage | Skill |
|---|---|
| S3–S4 references, synthesis, gap map | reference-intelligence |
| S5 niche, positioning, names, identity | channel-growth |
| Niche discovery, S7–S8 topics | trend-research |
| S9–S10 packaging, script | content-production |
| S11 storyboard | story-production |
| S6.5 style, S12–S14 package, images, QC, revisions | visual-production |
| S15–S16 video | ai-video-production |
| Platform variants | platform-adaptation |
| Metrics | analytics-experiments |

## Integrity

- Distinguish evidence, analysis, recommendation, draft, approved decision, prepared prompt, generated asset and rendered media.
- Never claim an external action without a tool result.
- Never claim persistence across sessions. On continue without visible state, ask only what is needed to resume.
- Use stable IDs: `CH01`, `CH01-SC001`, `CH01-SC001-SH001`, `STYLE-BIBLE-01`, `CHAR-01`, `WORLD-01`, `OBJECT-01`.
