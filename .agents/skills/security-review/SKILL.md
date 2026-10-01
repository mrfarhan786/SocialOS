---
name: security-review
description: Checklist-driven security review for authentication, authorization, input handling, secrets, and dependencies. Used by the security-auditor subagent and by anyone doing a Review-phase security pass.
---

# Security Review Checklist

Work through each section against the actual diff. Flag findings with
severity (Critical/High/Medium/Low) and a concrete remediation, not just
"this could be a problem."

## AuthN / AuthZ
- [ ] Every new/changed endpoint or handler has an explicit access-control
      check appropriate to its sensitivity.
- [ ] No privilege escalation path via parameter tampering (IDOR-style —
      can user A access/modify user B's resource by changing an ID?).

## Input handling
- [ ] All external input is validated (type, length, format) before use.
- [ ] No string-concatenated SQL/NoSQL queries or shell commands built from
      user input.
- [ ] File uploads validate type/size and don't allow path traversal.

## Secrets & config
- [ ] No hardcoded credentials, API keys, or connection strings introduced.
- [ ] New config values that are secrets go through the project's existing
      secret-management mechanism.

## Dependencies
- [ ] New dependencies are from a reputable source; no obviously abandoned
      or typo-squatted packages.

## Output
- [ ] User-controlled data rendered into HTML/logs/shell is escaped
      appropriately for its context.

Report format: list findings by severity, each with file/line, why it
matters, and the concrete fix. If nothing was found, say so explicitly
rather than omitting the section.
