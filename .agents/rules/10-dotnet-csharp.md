---
activation: glob
glob: "**/*.cs,**/*.csproj,**/*.sln,**/*.xaml"
---

# C# / .NET (WPF, WinUI, ASP.NET Core)

## General C# principles

- Match the existing project conventions before introducing new patterns,
  structures, or libraries.
- Prefer simple, readable solutions over unnecessary abstractions or
  over-engineering.
- Keep names concise and meaningful. Avoid unnecessarily long AI-generated
  class, method, variable, and property names. Names should clearly describe
  purpose without becoming verbose.
- Do not add comments for obvious code or explain every line/change.
  Prefer self-explanatory code. Add comments only for:
  - non-obvious technical decisions
  - important constraints
  - TODOs or known follow-up work
  - temporary workarounds with a clear reason
- Avoid adding documentation comments or method comments unless they provide
  real long-term value and are intentionally approved.

## Language & style

- Enable and respect nullable reference types (`<Nullable>enable</Nullable>`).
  Avoid suppressing warnings with `!` unless there is a proven safe reason.
- Follow existing namespace style and formatting conventions. Do not perform
  namespace or formatting-only changes outside the task scope.
- Use standard naming conventions:
  - PascalCase for public members and types
  - camelCase for local variables and parameters
  - `_camelCase` for private fields
  Match the existing project style if it differs.
- Prefer `async`/`await` end-to-end for asynchronous operations.
  Never block async code using `.Result`, `.Wait()`, or equivalent patterns.
- Prefer constructor injection for services and dependencies that require
  lifetime management, testing, or replacement.
- Avoid unnecessary interfaces, wrappers, factories, or abstractions unless
  they solve an actual current requirement.
- Keep methods focused and avoid mixing unrelated responsibilities.
- Reuse existing utilities, helpers, and services before creating new ones.

## Change discipline

- Before modifying code, investigate existing implementations and related
  call sites.
- Make the smallest safe change required to solve the problem.
- Do not rename existing APIs, files, classes, methods, or variables unless
  required by the task.
- Do not perform cleanup, refactoring, formatting, or architecture changes
  unrelated to the approved scope.
- If a better improvement is discovered outside the task scope, record it as
  a follow-up suggestion instead of changing it.

## WPF / WinUI

- Follow MVVM architecture:
  - Views handle presentation only.
  - ViewModels contain presentation logic.
  - Business/domain logic stays outside Views and ViewModels where applicable.
- Match the existing MVVM implementation:
  - `CommunityToolkit.Mvvm` (`ObservableObject`, `ObservableProperty`)
  - `INotifyPropertyChanged`
  - or the project's existing pattern.
- Do not introduce a second state-management or binding approach.
- Keep ViewModels independent from Views.
- Avoid putting business rules, database access, or service logic directly
  inside code-behind.
- Move long-running operations away from the UI thread.
- Use dispatcher/dispatcher queue only when updating UI-bound state.
- Avoid unnecessary UI updates, repeated property notifications, or expensive
  work during rendering.

## ASP.NET Core

- Match the existing API style:
  - Minimal APIs
  - Controllers
  - Existing endpoint patterns
  Do not introduce a new style without approval.
- Keep request validation at application boundaries.
- Use existing validation patterns:
  - `[ApiController]` model validation
  - FluentValidation
  - or the project's established approach.
- Do not manually duplicate validation logic across controllers/services.
- Protect new endpoints with appropriate authentication and authorization.
- Avoid exposing internal exceptions, stack traces, or sensitive information
  in API responses.
- Keep API contracts stable. Breaking changes require explicit planning and
  versioning.

## Entity Framework Core / Data Access

- Avoid N+1 query patterns.
- Prefer appropriate query strategies:
  - eager loading
  - projections
  - joins
  - batching
  based on the existing design.
- Review query performance when changing large data access paths.
- Any new index requirement should be identified in the implementation plan.
- Database migrations require review before execution.
- Explicitly call out destructive migrations:
  - dropped columns
  - dropped tables
  - data-loss changes
- Never run migrations against production without explicit approval.

## Error handling

- Handle errors at the correct layer.
- Do not silently swallow exceptions.
- Do not catch exceptions only to rethrow without adding context or value.
- Use existing logging and error-handling patterns.
- User-facing messages must not expose internal implementation details.

## Testing

- Add tests when they provide meaningful confidence, especially for:
  - complex business logic
  - critical workflows
  - risky changes
  - bug regressions
  - edge cases
- Do not create unnecessary tests for trivial changes or simple property
  wrappers.
- Match the existing test framework:
  - xUnit
  - NUnit
  - MSTest
- Prefer Arrange-Act-Assert structure.
- Test behavior through public APIs rather than implementation details.
- Full test coverage is not required before completion unless defined by the
  project requirements or approved plan.
- Test strategy can be expanded during application stabilization or before
  release if required.