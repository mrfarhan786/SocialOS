---
name: performance-review
description: Checklist-driven performance review covering data access, algorithmic complexity, rendering, and concurrency. Used by the perf-auditor subagent and by anyone doing a Review-phase performance pass.
---

# Performance Review Checklist

## Data access
- [ ] No new N+1 query pattern introduced.
- [ ] New queries against large tables have appropriate indexing or are
      flagged as needing it.

## Algorithms & memory
- [ ] No accidental quadratic-or-worse behavior on collections that can grow
      large.
- [ ] No obviously wasteful allocation in a hot path (repeated
      concatenation/materialization in a loop).

## Rendering (web/mobile/desktop UI)
- [ ] No unnecessary re-renders introduced (missing memoization on an
      expensive computation, unstable list keys, unnecessary broad state
      subscriptions).
- [ ] No blocking work left on the UI/main thread.

## Concurrency
- [ ] `async`/`await` used correctly end-to-end; no sync-over-async or
      floating unhandled Promises.
- [ ] Any new shared mutable state accessed from multiple threads/isolates
      is protected appropriately.

Report format: list findings with why they matter and a concrete
alternative. Distinguish "will definitely matter" from "worth watching if
this scales" so the user can prioritize.
