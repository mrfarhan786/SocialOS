---
activation: always_on
---

# Testing & Verification Standard

## Definition of done

A task is complete only when applicable verification has been completed and the
results are reported with actual evidence.

Required checks:

1. **Build verification**
   - Run the relevant build command defined by `verification-protocol`.
   - Never claim success without running the command in the current session.

2. **Test verification**
   - Add and run tests only when they provide meaningful confidence.
   - Prioritize tests for:
     - Critical business logic
     - Complex algorithms
     - Risky changes
     - Regression-prone areas
     - Security-sensitive behavior
   - Do not add low-value tests only to increase coverage numbers.
   - For incomplete applications or active development phases, focus on stable
     functionality first. Expand test coverage when the feature set becomes
     stable or before production release.

3. **Lint and formatting verification**
   - Ensure lint/format checks are clean when configured.
   - Prefer existing project tooling and conventions.
   - Do not introduce formatting-only changes outside the task scope.

4. **UI verification**
   - Any change affecting rendered UI requires either:
     - Automated verification chosen by the user, or
     - Manual verification steps provided to the user.
   - Never run browser, emulator, simulator, or screenshot verification
     automatically without user consent.
   - Follow the verification consent process defined in
     `00-engineering-workflow.md`.

## Verification reporting rules

Always report:

- Command executed
- Actual result
- Relevant output summary
- Any limitations or skipped checks

Never:

- Claim a build, test, or lint passed without running it.
- Assume tests are passing because code looks correct.
- Hide failures by rewording them.
- Mark a task complete when required verification is missing.

## Manual UI verification format

When Manual verification is selected, provide short actionable steps:

```text
1. Run: <command to start the application>
2. Navigate to: <screen/route/location>
3. Check: <specific behavior to verify>

Expected result:
<clear expected behavior>
```

Steps must be specific enough that another developer can verify the change
without guessing.

## Automated UI verification format

When Automated UI verification is selected:

Use the appropriate visual verification skill:

- Web → web-visual-verification
- WPF/WinUI → native-desktop-visual-verification
- Mobile → mobile-visual-verification

Report:

- What was tested
- Which screenshots/recordings were captured
- What was visually checked
- Any issues found

Do not report only successful checks. Mention visible problems or limitations
if discovered.

## Testing approach

Prefer confidence over coverage.

Avoid:

- Writing tests for every minor change.
- Creating tests that only verify mocks instead of behavior.
- Delaying necessary tests for risky changes.

Focus effort where failures would create the most impact.