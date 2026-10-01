```yaml
---
activation: model_decision
description: >
  Apply whenever code touches authentication, authorization, secrets,
  cryptography, user input, SQL/NoSQL queries, file uploads, deserialization,
  external URLs, CORS/CSRF, or dependency changes. Covers baseline secure
  coding practices across all stacks in this repo.
---
```

# Security & Safety Baseline

Applies regardless of language or framework, including C#/.NET, TypeScript/Node.js, web, and mobile projects.

## Input & Data Handling

* Validate and sanitize all external input at the boundary before processing.
  This includes:

  * HTTP parameters.
  * Form fields.
  * Query strings.
  * File uploads.
  * Deep links.
  * IPC messages.
  * External API responses.

* Validate input for:

  * Type.
  * Length.
  * Format.
  * Allowed values.
  * Required fields.

* Use parameterized queries or ORM query builders.
  Never build SQL, NoSQL filters, or shell commands by concatenating user input.

* Treat untrusted deserialization as unsafe by default.
  Avoid:

  * `BinaryFormatter` in .NET.
  * Unsafe `eval` or `Function()` usage in JavaScript.
  * Unchecked object deserialization patterns.

* File uploads must validate:

  * File type.
  * File size.
  * File name.
  * Storage location.

* Prevent:

  * Path traversal.
  * Unsafe file execution.
  * Uncontrolled storage growth.

---

## Secrets & Configuration

* Never hardcode sensitive values in source code, including:

  * API keys.
  * Passwords.
  * Tokens.
  * Private keys.
  * Credential-containing connection strings.

* Use the project's existing secure configuration approach:

  .NET:

  * `appsettings.*.json` for non-sensitive configuration.
  * User Secrets for development.
  * Environment variables.
  * Key Vault or equivalent secret storage.

  Web/Node:

  * Environment variables.
  * Secure secret providers.

  Mobile:

  * Platform keychain/keystore solutions.

* If existing secrets are discovered:

  * Report them immediately.
  * Do not expose secret values in plans, reports, or walkthroughs.
  * Do not silently ignore them.

---

## AuthN/AuthZ

* Every new endpoint, route, IPC handler, or sensitive operation must have an explicit authorization decision.

* Unless intentionally public, protected functionality must verify:

  * Authentication.
  * User permissions.
  * Resource ownership.

* Document access expectations in the implementation plan:

  * Public.
  * Authenticated users only.
  * Role or permission restricted.

* Prevent:

  * Privilege escalation.
  * IDOR-style access issues.
  * Parameter tampering.

* Do not implement custom cryptography or custom password hashing.

* Use trusted platform solutions:

  * ASP.NET Core Identity.
  * Data Protection APIs.
  * `bcrypt`/`argon2` libraries.
  * Platform Keychain/Keystore APIs.

---

## Dependencies

* When adding a package:

  * Mention it in the implementation plan.
  * Prefer actively maintained and widely used libraries.
  * Verify compatibility with the existing project.

* Avoid unnecessary dependencies.

* Flag dependencies with:

  * Known unpatched vulnerabilities.
  * Suspicious package names.
  * Poor maintenance signals.

---

## Web Security

* Configure CORS explicitly.

* Never use unrestricted `*` origins for authenticated APIs.

* Escape user-controlled output according to its context:

  * HTML.
  * JavaScript.
  * Logs.
  * Other rendered output.

* Prefer framework-provided protections:

  * React/Angular/Vue escaping.
  * Server-side encoding.
  * Built-in security middleware.

* Avoid manual string construction for security-sensitive output.

---

## Security Review Expectations

For security-sensitive changes:

* Review the actual code changes.
* Verify assumptions against the repository.
* Report findings with:

  * Severity.
  * Location.
  * Risk.
  * Recommended remediation.

Do not expand the current task scope.

If a security issue exists outside the requested change:

* Report it as a follow-up suggestion.
* Do not implement unrelated fixes.

```
```
