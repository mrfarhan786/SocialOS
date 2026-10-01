---
name: architecture-review
description: Reviews structural decisions — coupling, cohesion, layering, and whether the change is appropriately (not over- or under-) engineered for the problem. Use for changes that introduce new modules, services, abstractions, or cross-cutting patterns.
---

# Architecture Review

## Coupling & cohesion
- Does this change introduce a dependency in the wrong direction (e.g., a
  domain/business layer depending on a UI or infrastructure detail)?
- Is related logic kept together, and unrelated logic kept apart?

## Layering
- Does the change respect the project's existing layers (e.g.,
  presentation → application → domain → infrastructure, or whatever
  structure already exists)? Don't invent a new layering scheme mid-task.

## Right-sizing
- Is this over-engineered for the current requirement (unnecessary
  abstraction, interface with one implementation, premature generalization)?
- Is it under-engineered in a way that will clearly need rework very soon
  (hardcoded values that are obviously configuration, duplicated logic that
  should be extracted)?

## Consistency
- Does this match how similar problems are already solved elsewhere in the
  codebase? If it deliberately diverges, is that divergence justified and
  called out?

Report format: a short list of observations, each tagged as a real concern
vs. a stylistic preference, with a concrete suggestion. Architecture
feedback is more judgment-based than security/performance — be clear about
your confidence level.
