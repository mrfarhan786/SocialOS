---

## activation: always_on

# Engineering Workflow Contract

This defines the standard development process for every non-trivial task in this repository.

Stack-specific rules remain in `.agents/rules/`, and detailed procedures remain in `.agents/skills/`.

# Six-Phase Development Lifecycle

Every non-trivial task follows:

1. Investigation
2. Plan
3. Approval
4. Implementation
5. Verification
6. Review

---

# 1. Investigation

Before proposing any solution:

* Detect the actual technology stack using the `stack-detection` skill.
* Search the existing codebase for related implementations.
* Review existing tests and usage patterns when available.
* Identify affected areas, dependencies, and possible regression risks.

Rules:

* Do not create duplicate implementations.
* Reuse existing patterns where appropriate.
* Do not assume architecture, conventions, or behavior without checking the codebase.
* Read relevant surrounding code before suggesting changes.

---

# 2. Plan

Before making changes, create an Implementation Plan.

The plan must include:

* Detected technology stack.
* Problem statement.
* Investigation findings or confirmed root cause.
* Exact files to modify.
* Files reviewed but intentionally excluded.
* Expected impact area.
* Applicable review requirements:

  * Security
  * Performance
  * Architecture
  * Accessibility
* Verification approach:

  * Build command
  * Test command
  * Lint/format command
  * UI verification method if applicable

Keep plans focused.

Do not include:

* Unrelated refactoring.
* Cleanup work outside scope.
* Dependency upgrades without requirement.
* Architecture changes without approval.

---

# 3. Approval

After presenting the plan:

Stop and wait for explicit approval.

Before approval:

Allowed:

* Repository search.
* Reading files.
* Investigation.

Not allowed:

* Editing files.
* Creating files.
* Applying fixes.
* Running implementation commands.

---

# 4. Implementation

After approval:

Follow the approved plan exactly.

Rules:

* Modify only approved files.
* Keep changes minimal and focused.
* Preserve existing behavior outside the requested change.
* Avoid unrelated improvements.
* Avoid broad refactoring.

If another file becomes necessary:

1. Stop implementation.
2. Explain why it is required.
3. Update the plan.
4. Request approval before modifying it.

---

# Anti-Hallucination Rules

Never present assumptions as confirmed facts.

Before making technical decisions:

* Verify files, classes, methods, APIs, configuration keys, and commands exist.
* Search the repository before claiming existing functionality.
* Read relevant code before describing behavior.
* Confirm the actual project structure before suggesting changes.
* Use real command output when reporting verification results.

Never invent:

* File paths.
* Classes or methods.
* Database tables or schemas.
* API contracts.
* Configuration values.
* Existing behavior.
* Test results.
* Build results.

When information is unavailable:

* Clearly state what is unknown.
* Mark assumptions explicitly.
* Request clarification when required.

Separate:

* Confirmed facts.
* Assumptions.
* Recommendations.

---

# Code Quality Rules

## Naming

Use professional, concise naming.

Avoid:

* Extremely long names.
* Sentence-like method names.
* AI-generated descriptive names that reduce readability.
* Names that explain every internal detail.

Prefer names that are:

* Clear from context.
* Consistent with existing code style.
* Short enough to remain readable.

Example:

Avoid:

```csharp
CalculateTheFinalParticipantVotingResultAfterProcessingAllPendingResponses()
```

Prefer:

```csharp
CalculateVoteResult()
```

---

## Comments

Comments should explain important context, not obvious code.

Default:

* Do not add comments for simple code.
* Do not comment every changed line.
* Do not add AI-generated explanation comments.
* Do not add comments only to describe what the code already shows.

Allowed:

* Complex business rules.
* Non-obvious technical decisions.
* Known limitations.
* TODO items.
* Ticket references when required.

Example:

```csharp
// TODO: CVPWIN-1234 handle offline recovery edge case
```

Avoid:

```csharp
// Increment counter by one
counter++;
```

Comments should be added only when they provide long-term value.

---

# Refactoring Rules

Do not perform:

* Drive-by refactoring.
* Formatting-only changes.
* Large renames.
* Dependency upgrades unrelated to the task.
* Modernization without requirement.

Record observations as follow-up suggestions instead.

---

# Testing Philosophy

Tests should provide meaningful confidence, not only increase coverage numbers.

Prioritize tests for:

* Critical business logic.
* Risky behavior.
* Complex algorithms.
* Regression-prone bugs.
* Security-sensitive functionality.

Avoid unnecessary tests for:

* Simple getters/setters.
* Trivial mappings.
* Code with no meaningful behavior.

During early development:

* Do not force complete test coverage.
* Add tests when functionality becomes stable.
* Prioritize important scenarios over quantity.

Before production release:

* Review important areas for missing confidence.
* Add tests where risk justifies the effort.

---

# 5. Verification

Verification must always be based on actual evidence.

Never claim:

* Build succeeded.
* Tests passed.
* Lint passed.
* Verification completed.

Unless the command was actually executed and the output confirms it.

Required order:

1. Build
2. Tests where applicable
3. Lint/format checks where applicable

Follow the `verification-protocol` skill.

---

# UI Verification Consent Gate

For changes affecting rendered UI:

Ask before running:

* Browser automation.
* Screenshots.
* Screen recordings.
* Emulator/simulator captures.

Ask once per task:

"How would you like this UI change verified: Automated or Manual?"

Follow the selected approach.

Do not run automated UI verification without approval.

---

# 6. Review

Run applicable read-only reviewers after verification.

Use:

## code-reviewer

For:

* Correctness.
* Readability.
* Error handling.
* Scope compliance.

## security-auditor

For:

* Authentication.
* Authorization.
* User input.
* Secrets.
* External communication.
* Dependency changes.

## perf-auditor

For:

* Database queries.
* Large collections.
* Rendering.
* Concurrency.
* Hot paths.

## architecture-review

For:

* New modules.
* Services.
* Abstractions.
* Cross-cutting patterns.

Review agents:

* Must inspect the actual diff.
* Must not modify files.
* Must provide concrete findings.
* Must not invent issues.

---

# Final Delivery

Before completion:

Confirm:

* Scope was respected.
* Verification results are real.
* Review findings are addressed.
* Follow-up suggestions are separated from implemented changes.

Final response should include:

* Summary of changes.
* Verification evidence.
* Review results.
* Remaining follow-ups.
