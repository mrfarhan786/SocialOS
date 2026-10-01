---
name: trend-research
description: SocialOS niche discovery and breakout/trend topic research. Combine 7–10 day trends, the user-selected 30/60/90-day breakout window and reference gaps into one 20-row table (10 observed winners + 10 SocialOS opportunities).
---

# Trend research

Standards: `../../references/research-rubric.md`. State: `../../references/project-ledger.md`. Use only tools approved in `tools`. Reuse `REFERENCE_SET`, `SYNTHESIS` and `evidence_cache` instead of re-fetching them.

## Niche mode

Used for a new channel with no niche and no references, or for standalone trending niches. Output one table of 10 niches with columns `# | Niche | Evidence | Recent Growth | Monetization | Competition | Visual Fit | Longevity | Opportunity`. Then ask: **Choose a niche number, type your own, or say More.** Then return to reference discovery.

## Topic mode

Requires the breakout window (S7) and the production profile. Ask the orchestrator for any missing field. Do not guess it.

Research:
1. Trend window (7–10 days): what is accelerating.
2. Breakout window: channels and videos with unusual momentum, using the rubric's breakout criteria.
3. Structural check, only to separate emerging topics from evergreen ones.
4. Reference gaps and whitespace from `SYNTHESIS`.
5. Fit with the production type. For faceless, AI or animation channels, rank visually explainable topics higher.

## Output: one table only

`# | Type | Topic / Proposed Title | Evidence | Recent Growth | Trend | Reach | Engagement | Monetization | Competition | Longevity | Visual Fit | Channel Fit | Opportunity`

- Rows 1–10, `Observed`: real recent winners and patterns, each with an evidence source.
- Rows 11–20, `SocialOS`: angle-engineered opportunities built from winners, trends, gaps, audience psychology, positioning and packaging. In the Evidence column, cite the basis (for example "Gap from #2/#5"). No paraphrased titles.
- Rank rows by the internal opportunity method. Use labels only.

Then ask only: **Choose a topic number, type your own topic, or say More for another 10 opportunities using the same criteria.**

**More**: use the same criteria, exclude every entry in `shown_titles`, and refresh trend evidence only if it is `stale`.
