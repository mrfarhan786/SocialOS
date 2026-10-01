---
activation: model_decision
description: >
  Apply when writing or modifying code involving database queries, collection
  processing, loops, rendering large lists/grids, network operations,
  asynchronous workflows, concurrency, or any code path identified as
  performance-sensitive.
---

# Performance Baseline

## Data access

- Avoid N+1 query patterns. Do not execute database queries inside loops when
  a batch query, join, eager loading (`Include()` in EF Core), or equivalent
  approach is possible.
- Review query performance when adding new data access patterns against large
  datasets.
- If a new query pattern may require indexing, mention it in the
  implementation plan instead of adding indexes silently.
- Avoid loading unnecessary data. Select only required fields when the data
  size or frequency makes it relevant.

## Algorithms & memory

- Consider time complexity for operations on collections that can grow over
  time. Avoid accidental O(n²) processing when a more efficient approach is
  reasonably available.
- Avoid unnecessary allocations in performance-sensitive paths:
  - Repeated string concatenation inside loops.
  - Unnecessary collection copying or materialization.
  - Repeated LINQ operations that create avoidable intermediate collections.
  - Excessive object creation in frequently executed code.
- Do not optimize prematurely. Prefer simple, readable solutions unless
  profiling or usage patterns justify additional complexity.

## UI rendering

- Avoid unnecessary UI updates or re-rendering:
  - React/Vue/Angular: keep state localized, use stable keys, and avoid
    expensive recalculations during rendering.
  - WPF/WinUI: avoid heavy processing on the UI thread. Move long-running
    operations to background execution and update UI through the appropriate
    dispatcher.
  - Mobile: avoid blocking the main thread. Use platform-appropriate async
    patterns for I/O and expensive operations.
- For large lists, grids, or repeated UI elements, consider virtualization
  and incremental loading where supported.

## Concurrency

- Use async/await correctly from start to finish.
- Do not block asynchronous operations using `.Result`, `.Wait()`, or
  equivalent patterns.
- Ensure background tasks, promises, and asynchronous operations handle
  failures properly.
- Review shared mutable state accessed by multiple threads or async flows.
  Use appropriate synchronization or thread-safe collections when required.
- Avoid introducing unnecessary concurrency complexity without a clear
  performance or reliability benefit.

## Review expectations

- Performance improvements must be justified by actual usage patterns,
  profiling data, or measurable impact where possible.
- Prefer maintainable code over micro-optimizations.
- During review, distinguish between:
  - **Confirmed issue:** A problem likely to affect current usage.
  - **Scalability concern:** A pattern that may become problematic with larger
    data, traffic, or usage.
  - **Suggestion:** A possible improvement with no immediate impact.