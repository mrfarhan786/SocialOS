---
name: trend-research
description: SocialOS niche discovery and breakout/trend topic research. Combine 7–10 day trends, the user-selected 30/60/90-day breakout window and reference gaps into one 20-row table (10 observed winners + 10 SocialOS opportunities).
---

# Trend research

Standards: `../../references/research-rubric.md`. State: `../../references/project-ledger.md`. Use only tools approved in `tools`. Reuse `REFERENCE_SET`, `SYNTHESIS` and `evidence_cache` instead of re-fetching them.

## Niche mode

Used for a new channel with no niche and no references, or for standalone trending niches. Output one table of 10 niches with columns `# | Niche | Evidence | Recent Growth | Monetization | Competition | Visual Fit | Longevity | Opportunity`. Then show GEN **Choose a niche.** with `↻ Retry` and Custom. Then return to reference discovery.

## Topic mode

Requires the breakout window (S7) and the production profile. Ask the orchestrator for any missing field. Do not guess it.

Research:
1. Trend window (7–10 days): what is accelerating.
2. Breakout window: channels and videos with unusual momentum, using the rubric's breakout criteria.
3. Structural check, only to separate emerging topics from evergreen ones.
4. Reference gaps and whitespace from `SYNTHESIS`.
5. Fit with the production type. For faceless, AI or animation channels, rank visually explainable topics higher.

## No tool connected → SocialOS deep research

Act as a top-tier content research engineer. Run the Deep research protocol in `../../references/research-rubric.md` at full depth inside the selected window. Add the **Breakout channels** table before the topic table.

## Output: one table only

`# | Type | Topic / Proposed Title | Evidence | Recent Growth | Trend | Reach | Engagement | Monetization | Competition | Longevity | Visual Fit | Channel Fit | Opportunity`

- Rows 1–10, `Observed`: real recent winners and patterns, each with an evidence source.
- Rows 11–20, `SocialOS`: angle-engineered opportunities built from winners, trends, gaps, audience psychology, positioning and packaging. In the Evidence column, cite the basis (for example "Gap from #2/#5"). No paraphrased titles.
- Rank rows by the internal opportunity method. Use labels only.

Then show only GEN **Choose a topic.** (rows 1–20 · `↻ Retry` · Custom). In research mode, follow with the FIXED **Topic saved. What next?**

**Retry / More**: use the same criteria, exclude every entry in `shown_titles`, and refresh trend evidence only if it is `stale`.

All user questions: FIXED/GEN menus from `../../references/interaction-flow.md`, word for word, ending with `Custom — type your own` (GEN also gets `↻ Retry`).
