#!/usr/bin/env bash
# PreToolUse hook: additional safety layer for destructive command protection.
#
# This hook does not replace Antigravity permission settings. It only blocks
# clearly destructive operations that can cause irreversible data loss or
# environment damage.
#
# Design principles:
# - Conservative: block only high-risk commands.
# - Do not interfere with normal development workflows.
# - Never require model reasoning for deterministic safety checks.
# - Allow users to override through explicit manual execution outside the agent
#   when they understand the risk.

set -uo pipefail

INPUT="$(cat)"

# Extract command from Antigravity hook payload.
# Prefer jq when available, fallback to basic parsing.
if command -v jq >/dev/null 2>&1; then
  CMD=$(echo "$INPUT" | jq -r '.toolCall.args.CommandLine // empty')
else
  CMD=$(echo "$INPUT" | grep -o '"CommandLine"[^,}]*' | sed -E 's/.*:\s*"([^"]*)".*/\1/')
fi

[ -z "${CMD:-}" ] && {
  echo '{"decision":"allow"}'
  exit 0
}

# High-risk destructive operations only.
# Keep this list intentionally small to avoid blocking normal development.
DENY_PATTERNS=(
  # Filesystem destruction
  'rm[[:space:]]+-rf[[:space:]]+/'
  'rm[[:space:]]+-rf[[:space:]]+~'
  'rm[[:space:]]+-rf[[:space:]]+\*'
  'rm[[:space:]]+-rf[[:space:]]+\.\.'
  'rm[[:space:]]+-r[[:space:]]+/'
  'mkfs(\.|[[:space:]])'
  'format[[:space:]]+[a-zA-Z]:'

  # Windows destructive commands
  'del[[:space:]]+/[sS]'
  'rmdir[[:space:]]+/[sS]'
  'rd[[:space:]]+/[sS]'

  # Database destruction
  'DROP[[:space:]]+DATABASE'
  'DROP[[:space:]]+TABLE'
  'TRUNCATE[[:space:]]+TABLE'

  # Git destructive operations
  'git[[:space:]]+push.*--force.*(main|master)'
  'git[[:space:]]+push.*-f.*(main|master)'
  'git[[:space:]]+reset[[:space:]]+--hard'
  'git[[:space:]]+clean[[:space:]]+-[a-zA-Z]*f'
  'git[[:space:]]+checkout[[:space:]]+\.'

  # Container/orchestration destructive operations
  'docker[[:space:]]+system[[:space:]]+prune'
  'docker[[:space:]]+volume[[:space:]]+prune'
  'kubectl[[:space:]]+delete'

  # Infrastructure destruction
  'terraform[[:space:]]+destroy'

  # Permission escalation / broad permission changes
  'chmod[[:space:]]+-R[[:space:]]+777'
  'chmod[[:space:]]+-R[[:space:]]+'

  # Fork bomb
  ':\(\)[[:space:]]*\{.*\};'
)

for pattern in "${DENY_PATTERNS[@]}"; do
  if echo "$CMD" | grep -Eiq "$pattern"; then
    printf '{"decision":"deny","reason":"Blocked by safety-gate hook: command matches destructive pattern (%s). Review the operation and request explicit approval before proceeding."}\n' "$pattern"
    exit 0
  fi
done

echo '{"decision":"allow"}'
exit 0