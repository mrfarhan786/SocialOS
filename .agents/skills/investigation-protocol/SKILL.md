---
name: investigation-protocol
description: Defines how to investigate a codebase before writing an Implementation Plan — searching for existing implementations, reading relevant tests, and tracing the blast radius of a change. Use during the Investigation phase of any task beyond a trivial one-line fix.
---

# Investigation Protocol

Goal: never propose a plan that duplicates existing work or misses an
existing convention.

## Steps

1. **Search before you build.** Grep for the feature/utility/component name
   and close synonyms. If something similar already exists, reuse or extend
   it rather than writing a parallel implementation.
2. **Read the tests.** Existing tests for the area you're touching are the
   most reliable spec of current behavior — read them before changing that
   behavior.
3. **Trace the blast radius.** Find every caller/consumer of the
   function/component/endpoint you're about to change. List them in the
   plan as "affected call sites," even ones you don't intend to modify.
4. **Check for an existing convention.** Before introducing a new pattern
   (a new state-management approach, a new validation library, a new folder
   structure), check whether the codebase already has one and match it,
   unless the task explicitly asks you to change the convention.
5. **Note gaps, don't fill them silently.** If investigation reveals a
   related bug or missing test outside the task's scope, mention it as a
   "Follow-up suggestion" in the plan — don't fix it as a drive-by.

Use the built-in `research` subagent for wide, read-only exploration when the
codebase is large or unfamiliar — it runs in an isolated context so it
doesn't bloat the main conversation.
