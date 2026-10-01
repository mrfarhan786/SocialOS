---
activation: glob
glob: "**/*.kt,**/*.java,**/*.swift,**/*.dart,pubspec.yaml,build.gradle,build.gradle.kts,**/*.xcodeproj/**,metro.config.js"
---

# Mobile (Android, iOS, React Native, Flutter)

Apply only to mobile code changes. Match the existing project architecture, libraries, and conventions before introducing new patterns.

## General Rules

- Detect the mobile framework and existing architecture before making changes.
- Keep changes minimal and scoped to the approved plan.
- Do not introduce new libraries, state-management solutions, navigation patterns, or architectural approaches unless explicitly required and approved.
- Prefer existing utilities, components, services, and patterns over creating parallel implementations.
- Avoid unnecessary abstractions, wrappers, or overly generic solutions for simple requirements.
- Keep naming clear and professional. Avoid excessively long class, method, variable, or file names created only to describe implementation details.
- Avoid adding comments for obvious code. Add comments only for important decisions, limitations, TODOs, or non-obvious business rules.

## Android (Kotlin/Java)

- Match the project's existing UI approach:
  - Use Jetpack Compose for new UI when the project already uses Compose.
  - Continue using XML layouts when the project is based on XML layouts.
- Use `ViewModel` with the project's existing state approach (`StateFlow`, `LiveData`, or equivalent).
- Use Kotlin coroutines for asynchronous operations.
- Never block the main thread with synchronous I/O, database calls, or network operations.
- Handle lifecycle awareness correctly to avoid memory leaks.
- Follow Material Design guidelines and existing project design tokens for spacing, typography, and touch targets.
- Avoid unnecessary recomposition or expensive work inside Compose UI functions.

## iOS (Swift)

- Match the project's existing UI architecture:
  - Use SwiftUI for new screens when the project already uses SwiftUI.
  - Continue using UIKit when the application is UIKit-based.
- Follow existing MVVM or project-specific architecture patterns.
- Use Swift concurrency (`async`/`await`) for asynchronous operations where supported.
- Avoid blocking the main thread with heavy processing or I/O.
- Respect Human Interface Guidelines and existing application design patterns.
- Manage memory correctly and avoid retain cycles.

## React Native

- Match the existing navigation, state management, and component patterns.
- Keep shared code platform-independent where possible.
- Use platform-specific files (`.ios.tsx`, `.android.tsx`) when platform behavior genuinely differs.
- Avoid deep platform branching with excessive `Platform.OS` checks.
- Prevent unnecessary renders in large lists:
  - Use stable keys.
  - Memoize expensive render logic when required.
  - Avoid unnecessary state updates.
- Handle asynchronous operations and promises correctly. Avoid unhandled promise rejections.

## Flutter / Dart

- Follow the existing state-management approach (`Provider`, `Riverpod`, `Bloc`, etc.).
- Do not introduce another state-management pattern without approval.
- Prefer small, reusable widgets over large deeply nested build methods.
- Keep business logic outside widgets where the existing architecture supports separation.
- Respect Dart null safety.
- Avoid unnecessary `!` null assertions. Fix null handling where possible.
- Avoid unnecessary widget rebuilds and expensive work during build execution.

## Testing & Verification

- Add tests only for meaningful behavior, critical logic, risky changes, or regression-prone areas.
- Do not add tests only for coverage numbers.
- Match the existing test framework and project conventions.
- UI verification requires following the verification-consent gate:
  - Ask before running emulator/simulator screenshots or recordings.
  - Use Automated or Manual verification based on the user's choice.
  - Do not assume automated verification.

## Performance & Reliability

- Avoid unnecessary allocations, repeated work, and inefficient collection operations.
- Keep network, database, and file operations asynchronous.
- Protect shared mutable state accessed across threads/tasks.
- Consider memory usage, lifecycle handling, and offline scenarios where applicable.

## Code Quality

- Prefer readable and maintainable code over clever solutions.
- Keep methods focused and avoid mixing unrelated responsibilities.
- Do not rename existing APIs, classes, or files unless required by the task.
- Avoid broad refactoring during feature or bug-fix work.
- Remove temporary debugging code before completion.