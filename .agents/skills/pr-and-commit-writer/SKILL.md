---
name: pr-and-commit-writer
description: Writes conventional commit messages and pull request descriptions summarizing what changed, why, and how it was verified. Use once a task's changes are implemented and verified, before finalizing the Walkthrough.
---

# PR & Commit Writer

## Commit messages
Use Conventional Commits format: `<type>(<scope>): <summary>`, types being
`feat`, `fix`, `refactor`, `perf`, `test`, `docs`, `chore`, `ci`. Keep the
summary line under ~72 characters; add a body only if the "why" isn't
obvious from the summary and diff.

## PR description template

```
## What
<1-3 sentences describing the change>

## Why
<the problem this solves / the request it addresses>

## How it was verified
- Build: <pass/fail, command used>
- Tests: <pass/fail, what's covered>
- UI verification: <Automated (screenshots attached) | Manual (steps
  provided to the user) | N/A>

## Scope
Files changed: <list, matching the approved plan>

## Follow-up suggestions (not included in this change)
<anything noticed but intentionally left out of scope, if any>
```

Keep it factual — report what was actually verified, not what should
theoretically work.
