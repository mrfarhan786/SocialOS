---
activation: glob
glob: "**/*.tsx,**/*.jsx,**/*.vue,**/*.html,**/*.xaml,**/*.razor,**/*.swift,**/*.kt,**/*.dart"
---

# Accessibility & UI/UX Baseline

Applies to user-facing UI code across all supported platforms. Follow existing
project conventions first. Do not introduce new UI patterns, libraries, or
design systems unless required by the approved plan.

## General Principles

- Build accessible UI by default, not as a later cleanup task.
- Preserve existing UX patterns and design language of the application.
- Avoid unnecessary UI changes outside the requested scope.
- Prefer simple, predictable interactions over clever or custom behavior.
- Do not add animations, transitions, or visual effects unless they provide
  clear user value.

## Accessibility

- Every interactive element must have a meaningful accessible name:
  - Web: `label`, visible text, `aria-label` when required.
  - WPF/WinUI: `AutomationProperties.Name`.
  - Android: `contentDescription`.
  - iOS/RN: `accessibilityLabel`.
  - Flutter: semantic labels where required.
- Do not rely on color alone to communicate status, errors, selection, or
  actions. Combine color with text, icons, patterns, or other indicators.
- Maintain readable contrast for text and important UI elements, following
  WCAG AA where applicable.
- Support keyboard navigation and focus visibility on platforms where it
  applies.
- Respect platform accessibility settings where supported:
  - Reduced motion.
  - Dynamic text scaling.
  - High contrast modes.

## Web UI (React, Next.js, Angular, Vue, HTML)

- Prefer semantic HTML elements:
  - Use `button` instead of clickable `div`.
  - Use `nav`, `main`, `section`, `label`, and `form` where appropriate.
- Add ARIA attributes only when semantic HTML cannot describe the behavior.
- Ensure:
  - Keyboard navigation works.
  - Focus states remain visible.
  - Tab order is logical.
  - No keyboard traps are introduced.
- Follow existing responsive patterns and design tokens.
- Use mobile-first layouts where the project follows responsive design.
- Avoid unnecessary DOM wrappers and complex component structures.

## WPF / WinUI

- Follow the application's existing UI framework and design conventions.
- Keep UI logic in ViewModels where the project uses MVVM.
- Avoid placing business logic inside Views or code-behind.
- Ensure custom controls expose accessibility metadata:
  - `AutomationProperties.Name`.
  - Appropriate control automation patterns.
- Keep keyboard navigation usable:
  - Correct `TabIndex`.
  - Predictable focus movement.
- Avoid blocking the UI thread with heavy operations.
- Respect existing theme support, including dark mode and high contrast,
  when already implemented.

## Mobile UI (Android, iOS, React Native, Flutter)

- Match the platform's established conventions:
  - Android: Material Design.
  - iOS: Human Interface Guidelines.
- Use platform-standard navigation and interaction patterns unless the
  approved design requires otherwise.
- Ensure touch targets are usable:
  - Android: approximately 48dp.
  - iOS: approximately 44pt.
- Support dynamic text sizing and accessibility scaling where available.
- Avoid unnecessary main-thread work during rendering or interaction.

## Review Expectations

Before completing UI-related work, verify:

- Accessibility impact was considered.
- Existing UI patterns were reused where possible.
- No unrelated visual changes were introduced.
- Required visual verification follows the project's verification workflow
  and user-selected Automated or Manual path.