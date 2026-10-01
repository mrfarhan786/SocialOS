---
activation: glob
glob: "**/*.css,**/*.scss,**/*.html,tailwind.config.*"
---

# HTML / CSS / Tailwind Engineering Standards

## Styling approach

- Prefer the project's existing design system and Tailwind utilities over
  custom CSS or inline styles.
- Before adding new styles, check existing components, utility classes, and
  design tokens for reusable patterns.
- Avoid duplicate styles that already exist elsewhere in the project.
- Keep custom CSS limited to cases where Tailwind utilities cannot express the
  required behavior cleanly.
- Do not introduce new styling frameworks, CSS methodologies, or utility
  patterns unless explicitly approved.

## Responsive design

- Follow mobile-first responsive design.
- Define base styles for smaller screens first, then enhance using existing
  breakpoints (`sm:`, `md:`, `lg:`, etc.).
- Verify layouts across relevant screen sizes when UI changes are made.
- Avoid fixed dimensions that can break on different devices unless the
  requirement specifically needs them.

## Design consistency

- Respect the existing theme strategy, including dark mode implementation,
  color tokens, spacing scale, typography, and component patterns.
- Do not introduce a second dark mode approach or override existing theme
  behavior.
- Use values from `tailwind.config.*` or existing design tokens instead of
  arbitrary values whenever possible.
- Avoid magic numbers for spacing, sizing, colors, and breakpoints when an
  existing token is available.

## HTML structure

- Use semantic HTML elements (`header`, `nav`, `main`, `section`, `article`,
  `button`, `form`, etc.) instead of unnecessary generic wrappers.
- Avoid adding extra `div` or `span` elements without a clear structural or
  styling purpose.
- Preserve accessibility-friendly structure when modifying markup.
- Keep the DOM structure simple to improve maintainability and rendering
  performance.

## CSS quality

- Keep selectors simple and avoid unnecessary specificity.
- Avoid `!important` unless there is a documented reason and no cleaner
  solution exists.
- Remove unused styles when modifying related CSS files.
- Avoid large style changes mixed with unrelated feature work.
- Do not reformat or rewrite existing CSS unless required for the task.

## Tailwind-specific rules

- Follow the project's existing Tailwind version and configuration.
- Reuse existing component classes and patterns before creating new utility
  combinations.
- Avoid excessive utility duplication. Extract reusable components or classes
  only when repetition becomes meaningful.
- Do not add arbitrary values (`w-[123px]`, `mt-[17px]`, etc.) when an existing
  spacing or sizing token can solve the same problem.
- Keep class names readable; avoid extremely long unreadable class strings
  when a component abstraction would improve clarity.

## Change discipline

- Modify only the styles and markup required for the approved task.
- Do not perform visual redesigns, spacing cleanup, or CSS refactoring unless
  included in the plan.
- Do not add comments for obvious styling decisions.
- Add comments only for important non-obvious constraints, browser workarounds,
  or temporary TODOs with a clear reason.