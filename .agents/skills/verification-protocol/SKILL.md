---
name: verification-protocol
description: Canonical build/test/lint commands per stack, and the rule for interpreting results honestly. Use before declaring any task complete, for every stack in this repo.
---

# Verification Protocol

Never claim a command "passed" without having actually run it in this
session and quoting its real output. If a command fails, report the failure
and fix it — don't reword a failure as a success.

## Command matrix (check the project's actual scripts first — these are
## fallbacks if no project-specific script exists)

| Stack | Build | Test | Lint/Format |
|---|---|---|---|
| .NET / WPF / WinUI / ASP.NET Core | `dotnet build` | `dotnet test` | `dotnet format --verify-no-changes` |
| React / Next.js / Angular / Vue / Node | `npm run build` (or `pnpm`/`yarn` per lockfile) | `npm test` | `npm run lint` |
| Flutter | `flutter build <target>` | `flutter test` | `dart format --output=none --set-exit-if-changed .` |
| Android (Gradle) | `./gradlew assembleDebug` | `./gradlew test` | `./gradlew ktlintCheck` (if configured) |
| iOS (Xcode) | `xcodebuild build -scheme <scheme>` | `xcodebuild test -scheme <scheme>` | `swiftformat --lint .` (if configured) |
| React Native | `npm run build`/platform build | `npm test` | `npm run lint` |

## Before running any command
- Check `package.json` scripts / `Makefile` / `*.csproj` for a project-
  specific command instead of assuming the generic one above.
- Prefer the lockfile's package manager (`pnpm-lock.yaml` → pnpm,
  `yarn.lock` → yarn, else npm).

## After running
- Paste or summarize the actual pass/fail output in the Walkthrough.
- If tests were added, state which behavior they cover.
- If verification could not be completed (e.g., missing test infra), say so
  explicitly rather than skipping the topic.
