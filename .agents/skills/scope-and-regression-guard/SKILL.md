---
name: scope-and-regression-guard
description: Validates that implementation changes stay within the approved scope. Detects accidental file changes, unplanned modifications, and missing planned work before verification and final review.
---

# Scope & Regression Guard

## Purpose

Ensure every implementation follows the approved plan and prevents unrelated
changes, accidental edits, or hidden scope expansion.

This is a validation step only. Do not modify code, refactor, or expand scope
during this check.

## When to Run

Run after implementation and before:

- Verification
- Code review
- Security/performance/architecture review
- Final walkthrough

## Procedure

### 1. Collect Actual Changes

Get the real changed file list:

```bash
git diff --name-only
```

For new untracked files, also check:

```bash
git status --porcelain
```

Do not rely on the agent's memory or implementation summary. Always verify from
Git state.

### 2. Compare Against Approved Plan

Compare the actual changed files against the approved Implementation Plan.

Validate:

- Files changed are listed in the approved plan.
- No unrelated files were modified.
- Planned files were actually updated where required.

## Handling Unexpected Changes

If a changed file is not in the approved plan:

1. Identify why it changed.
2. Classify the change:

### Unintentional Change

Examples:

- Formatting changes in unrelated files.
- IDE generated files.
- Lock files changed by unrelated commands.
- Temporary files.
- Automatic tooling modifications.

Action:

- Revert the unrelated change.
- Continue only after scope is clean.

### Required Additional Change

Examples:

- Implementation discovered a missing required dependency.
- Existing code path requires modification to complete the approved task.

Action:

1. Stop implementation progress.
2. Explain why the additional file is required.
3. Update the Implementation Plan.
4. Wait for explicit approval.
5. Continue only after approval.

Never silently include additional files.

## Missing Planned Changes

If a file exists in the approved plan but was not changed:

- Confirm whether it was intentionally unnecessary.
- Mention it in the final report.
- Do not force unnecessary edits.

## Regression Awareness

During scope validation, check for signs of accidental impact:

- Large unexpected diff size.
- Broad formatting changes.
- Renamed files outside scope.
- Dependency changes without approval.
- Generated files committed accidentally.
- Configuration changes unrelated to the task.

Do not fix these automatically unless they are clearly unintended and safe to revert.

## Reporting Format

Include a short scope validation summary:

```text
Scope Validation

Planned files:
- <file list>

Actual changed files:
- <file list>

Unexpected changes:
- None
or
- <details and reason>

Missing planned changes:
- None
or
- <details>

Result:
- Scope respected
or
- Approval required for additional changes
```

## Rules

- Never skip this validation because the change looks small.
- Never trust generated summaries over Git state.
- Never approve scope expansion without user approval.
- Never perform unrelated cleanup during this phase.
- Keep this check lightweight and focused.