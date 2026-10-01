#!/usr/bin/env bash
# PostToolUse hook: auto-formats the file that was just written, dispatched
# by extension. Deterministic, no model tokens spent. Reads the PostToolUse
# JSON payload from stdin per Antigravity's hook contract; falls back to
# doing nothing if it can't parse the target file or the formatter isn't
# installed (never fails the tool call).
set -uo pipefail

INPUT="$(cat)"

# Extract TargetFile / CodeContent target path without a JSON dependency
# assumption — try `jq` first, fall back to a naive grep if unavailable.
if command -v jq >/dev/null 2>&1; then
  FILE=$(echo "$INPUT" | jq -r '.toolCall.args.TargetFile // empty')
else
  FILE=$(echo "$INPUT" | grep -o '"TargetFile"[^,}]*' | sed -E 's/.*:\s*"([^"]*)".*/\1/')
fi

[ -z "${FILE:-}" ] && exit 0
[ ! -f "$FILE" ] && exit 0

case "$FILE" in
  *.cs)
    command -v dotnet >/dev/null 2>&1 && dotnet format --include "$FILE" >/dev/null 2>&1 || true
    ;;
  *.ts|*.tsx|*.js|*.jsx|*.vue|*.json|*.css|*.scss|*.html)
    if command -v npx >/dev/null 2>&1; then
      npx --no-install prettier --write "$FILE" >/dev/null 2>&1 || true
    fi
    ;;
  *.dart)
    command -v dart >/dev/null 2>&1 && dart format "$FILE" >/dev/null 2>&1 || true
    ;;
  *.kt)
    command -v ktlint >/dev/null 2>&1 && ktlint -F "$FILE" >/dev/null 2>&1 || true
    ;;
  *.swift)
    command -v swiftformat >/dev/null 2>&1 && swiftformat "$FILE" >/dev/null 2>&1 || true
    ;;
  *)
    ;;
esac

echo "{}"
exit 0
