---
name: code-review-checklist
description: General code review checklist for validating completed changes against correctness, maintainability, reliability, scope, and appropriate testing. Used by the code-reviewer subagent during the Review phase of non-trivial tasks.
---

# Code Review Checklist

## Review Principles

- Review the actual diff, not only the task description or implementation summary.
- Validate the change against the approved implementation plan.
- Focus on correctness, maintainability, regression risk, and production readiness.
- Avoid requesting changes based only on personal style preferences if the existing codebase convention is acceptable.
- Do not suggest unrelated refactoring or improvements outside the approved scope.

---

## Correctness

Verify:

- The implementation matches the approved plan and solves the intended problem.
- No unrelated behavior, business logic, API contracts, database behavior, or UI behavior was changed.
- Existing functionality is preserved unless the change explicitly requires modification.
- Edge cases are considered where relevant:
  - Empty or missing input.
  - Null/undefined values.
  - Boundary conditions.
  - Invalid states.
  - Concurrent access or timing issues.
  - Failure scenarios.
- The implementation follows existing application behavior and conventions.

Report:

- File and line reference.
- Actual impact.
- Concrete recommended fix.

---

## Readability & Maintainability

Verify:

- Naming follows existing project conventions.
- Names are concise, meaningful, and professional.
- Avoid unnecessarily long AI-generated names for variables, methods, classes, or files.
- Prefer clear domain terminology over descriptive sentences as identifiers.
- Methods and classes have a focused responsibility.
- Logic is easy to understand without unnecessary abstraction.
- Existing patterns are reused instead of introducing duplicate implementations.
- Code structure remains simple and maintainable.

Avoid approving:

- Excessive abstraction without clear value.
- Over-engineered solutions for simple requirements.
- Duplicate helpers or utilities.
- Large methods combining unrelated responsibilities.

---

## Code Comments & Documentation

Verify:

- Comments are added only when they provide long-term value.
- Code should explain itself through clear naming and structure whenever possible.
- Avoid line-by-line comments explaining obvious code.
- Avoid comments describing what the code does.

Acceptable comments:

- Non-obvious business rules.
- Important technical constraints.
- Workarounds for external limitations.
- Temporary TODO items with clear context.
- References to issue/ticket identifiers when required.

Avoid:

- AI-generated explanatory comments.
- Comments added only because code was modified.
- Large comment blocks repeating implementation details.

---

## Error Handling & Reliability

Verify:

- Errors are handled at the correct boundary.
- Exceptions are not silently ignored.
- Exceptions are not caught only to rethrow without adding value.
- User-facing messages do not expose:
  - Stack traces.
  - Internal paths.
  - Secrets.
  - Database details.
- Failure states do not leave the application in an inconsistent condition.
- Logging is appropriate and does not leak sensitive information.

Report:

- Missing error handling.
- Incorrect recovery behavior.
- Potential reliability issues.

---

## Testing Confidence

Verify testing based on risk, not automatically for every change.

Required:

- High-risk or complex logic should have meaningful tests where practical.
- Critical business rules, calculations, security-sensitive behavior, and regression-prone areas should have coverage.
- Existing tests should continue passing.

Not automatically required:

- Simple UI changes.
- Straightforward CRUD wiring.
- Configuration-only changes.
- Minor refactoring without behavior changes.

Avoid:

- Adding low-value tests only to increase coverage numbers.
- Tests that only verify mocks instead of actual behavior.
- Large test suites for simple changes.

Report:

- Missing tests only when the change has meaningful risk.
- Explain what behavior should be covered and why.

---

## Scope & Regression Control

Verify:

- Only approved files and areas were changed.
- No unrelated:
  - Refactoring.
  - Renaming.
  - Formatting changes.
  - Dependency updates.
  - Architecture changes.
- New dependencies or infrastructure changes are justified and documented.
- Any discovered improvements outside scope are reported separately as follow-up suggestions.

If scope differs:

1. Identify the unexpected change.
2. Explain why it happened.
3. Recommend reverting or requesting approval before keeping it.

---

## Review Output Format

Provide findings grouped by category:

### Critical
Issues that can cause security problems, data loss, application failure, or major regression.

### High
Issues that should be fixed before release.

### Medium
Issues that should be addressed but may not block completion.

### Low
Minor improvements or maintainability concerns.

For every finding include:

- Category.
- Severity.
- File and line reference.
- Problem description.
- Why it matters.
- Recommended fix.

If no issues are found, explicitly state:
