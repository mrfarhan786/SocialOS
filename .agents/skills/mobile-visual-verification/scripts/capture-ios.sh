#!/usr/bin/env bash
# Captures a screenshot from a booted iOS Simulator using simctl.
# Treat as a black box; run with --help.
# Usage: capture-ios.sh <simulator-name-or-udid> <output-path.png>
set -euo pipefail

if [[ "${1:-}" == "--help" || -z "${1:-}" || -z "${2:-}" ]]; then
  echo "Usage: capture-ios.sh <simulator-name-or-udid> <output-path.png>"
  exit 0
fi

SIM="$1"
OUT_PATH="$2"

if ! command -v xcrun >/dev/null 2>&1; then
  echo "Error: xcrun not found. This script requires Xcode command line tools on macOS." >&2
  exit 1
fi

xcrun simctl io "$SIM" screenshot "$OUT_PATH"

echo "Saved screenshot to $OUT_PATH"
