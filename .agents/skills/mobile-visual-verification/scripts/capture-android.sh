#!/usr/bin/env bash
# Captures a screenshot from the currently connected/running Android
# emulator or device using adb. Treat as a black box; run with --help.
# Usage: capture-android.sh <output-path.png>
set -euo pipefail

if [[ "${1:-}" == "--help" || -z "${1:-}" ]]; then
  echo "Usage: capture-android.sh <output-path.png>"
  exit 0
fi

OUT_PATH="$1"
DEVICE_PATH="/sdcard/ui-capture.png"

if ! command -v adb >/dev/null 2>&1; then
  echo "Error: adb not found on PATH. Install Android platform-tools." >&2
  exit 1
fi

if ! adb get-state >/dev/null 2>&1; then
  echo "Error: no connected Android device/emulator found." >&2
  exit 1
fi

adb shell screencap -p "$DEVICE_PATH"
adb pull "$DEVICE_PATH" "$OUT_PATH" >/dev/null
adb shell rm "$DEVICE_PATH"

echo "Saved screenshot to $OUT_PATH"
