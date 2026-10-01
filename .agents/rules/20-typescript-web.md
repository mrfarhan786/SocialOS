---
activation: glob
glob: "**/*.ts,**/*.tsx,**/*.js,**/*.jsx,**/*.vue"
---

# TypeScript / JavaScript (React, Next.js, Angular, Vue, Node.js)

## Language & Code Quality

- Match the existing project style and conventions before introducing new
  patterns.
- Prefer TypeScript strict mode where the project supports it.
- Avoid `any`. Use proper types, generics, or `unknown` with validation and
  narrowing when the type is genuinely uncertain.
- Use meaningful and concise names. Avoid unnecessarily long AI-generated
  names for variables, methods, classes, or components. Names should clearly
  describe purpose without becoming verbose.
- Prefer `const` by default. Avoid unnecessary mutation of variables,
  function parameters, or shared state.
- Keep functions focused and reasonably sized. Avoid combining unrelated
  responsibilities into a single function.
- Do not add unnecessary abstractions, wrappers, helpers, or generic
  utilities unless there is a real reuse requirement.
- Match existing folder structure, naming conventions, state management, and
  architectural patterns.

## Comments & Documentation

- Do not add comments explaining obvious code.
- Do not add line-by-line comments describing implementation details.
- Avoid adding comments during normal feature development unless required.
- Prefer self-explanatory code through clear naming and structure.
- Add comments only when they provide long-term value, such as:
  - complex business rules that are not obvious from code,
  - important workarounds,
  - external limitations,
  - TODO items approved by the project owner.
- Do not add comments simply to describe what the code already does.

## React / Next.js

- Use functional components and hooks. Do not introduce class components
  unless the existing project already follows that pattern.
- Keep components focused. Avoid large components handling unrelated UI,
  state, business logic, and data access together.
- Keep state as local as possible. Lift state only when multiple consumers
  require it.
- Avoid unnecessary re-renders caused by unstable references, unnecessary
  state updates, or broad subscriptions.
- Use stable keys for rendered lists. Do not use array indexes as keys when
  items have stable identifiers.
- Respect the existing Next.js routing approach:
  - App Router if the project uses App Router.
  - Pages Router if the project uses Pages Router.
- Use server components, server actions, and client components according to
  the existing Next.js architecture and actual requirements.
- Do not convert server components to client components without a clear
  reason.

## Angular

- Match the existing Angular architecture and version.
- Prefer standalone components and signals for new development when supported
  and consistent with the project.
- Do not introduce a new state management or RxJS pattern if the project
  already has an established approach.
- Keep components focused. Avoid placing business logic directly inside
  templates or large components.

## Vue

- Match the existing Vue architecture.
- Prefer Composition API with `<script setup>` for new components unless the
  project consistently uses Options API.
- Keep components focused and avoid unnecessary prop drilling or duplicated
  state handling.
- Reuse existing composables and utilities before creating new ones.

## Node.js Backend

- Match the existing backend architecture and framework patterns.
- Validate required configuration and environment variables at startup.
- Never commit secrets, tokens, API keys, or credentials.
- Centralize error handling through the existing middleware or framework
  pattern instead of inconsistent try/catch blocks.
- Avoid unhandled promise rejections.
- Validate external input at application boundaries.
- Do not build SQL queries, shell commands, or external requests using
  untrusted input.

## Performance & Reliability

- Avoid unnecessary allocations, repeated transformations, or expensive
  operations inside frequently executed paths.
- Avoid database or network calls inside loops when batching is possible.
- Handle asynchronous operations correctly:
  - use `async`/`await` consistently,
  - avoid unnecessary promise chains,
  - do not ignore rejected promises.
- Avoid introducing shared mutable state without proper synchronization or
  clear ownership.

## Testing

- Follow the existing test framework and project conventions.
- Do not introduce a new test framework alongside an existing one.
- Add tests for meaningful business logic, risky changes, regressions, or
  complex behavior where tests provide real confidence.
- Do not add tests only for the sake of increasing coverage.
- Simple UI changes, trivial getters/setters, or obvious code paths do not
  require tests unless the project specifically requires them.
- Match existing test style:
  - unit tests for isolated logic,
  - component tests for UI behavior,
  - end-to-end tests for critical workflows.

## Scope Discipline

- Change only the files and areas required for the approved task.
- Do not perform unrelated refactoring, renaming, formatting-only changes,
  dependency upgrades, or architecture changes.
- If a broader improvement is discovered, document it as a follow-up suggestion
  instead of including it in the current change.