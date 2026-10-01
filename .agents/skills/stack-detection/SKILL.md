---
name: stack-detection
description: Detects which technology stack(s) are present in the current repository by inspecting manifest and config files, and states which Rules/Skills are relevant for the task. Use at the start of any non-trivial task, and always in an unfamiliar or multi-stack repository.
---

# Stack Detection

Before planning any non-trivial change, identify what you're actually working
with. Don't assume — check.

## Detection table

| Files present | Stack |
|---|---|
| `*.sln`, `*.csproj` | .NET |
| `*.xaml` + `App.xaml.cs` referencing `Application` | WPF or WinUI (check `TargetFramework`/`UseWinUI`) |
| `Program.cs` + `*.csproj` with `Microsoft.NET.Sdk.Web` | ASP.NET Core |
| `package.json` + `next.config.*` | Next.js |
| `package.json` + `angular.json` | Angular |
| `package.json` + `*.vue` files or `vite.config.*` with Vue plugin | Vue |
| `package.json` with `react` dep, no Next/Angular/Vue markers | plain React (CRA/Vite) |
| `package.json` + `express`/`fastify`/`koa` dep, no frontend framework | Node.js backend |
| `tailwind.config.*` | Tailwind CSS in use |
| `pubspec.yaml` | Flutter |
| `build.gradle`/`build.gradle.kts` + `AndroidManifest.xml` | Android (Kotlin/Java) |
| `*.xcodeproj`/`*.xcworkspace` + `*.swift` | iOS (Swift) |
| `metro.config.js` or `react-native` dep in `package.json` | React Native |
| `Dockerfile`/`docker-compose.yml` | Containerized |
| `.github/workflows/*.yml` | GitHub Actions CI |

## What to do with the result

1. State the detected stack(s) explicitly at the top of the Implementation
   Plan (e.g., "Detected: ASP.NET Core backend + React/Next.js frontend").
2. This is informational — the matching `.agents/rules/*.md` files already
   auto-activate via their glob patterns. You don't need to manually apply
   rules; naming the stack is for the user's benefit and for choosing which
   review/verification skills are relevant.
3. In a monorepo with multiple stacks, scope your plan to only the stack(s)
   the task actually touches — don't apply mobile conventions to a backend
   change just because the repo also contains a mobile app.
