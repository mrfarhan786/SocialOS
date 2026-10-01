---
name: mobile-visual-verification
description: Protocol for verifying Android/iOS/React Native/Flutter UI changes. Requires asking the user to choose Automated vs Manual verification before running an emulator/simulator and capturing a screenshot, since this consumes significant tool calls. Use after any change affecting rendered mobile UI.
---

# Mobile Visual Verification

## Step 1 — Ask, every task, before doing anything else in this skill

Use the `ask_question` tool, single-select:

- Question: "This change affects the mobile UI. How would you like it
  verified?"
- Options:
  1. "Automated — run it on an emulator/simulator, capture screenshots on
     two screen sizes, and check them (uses more tool calls)"
  2. "Manual — give me exact steps to check it on my own device/simulator"

Wait for the answer; don't launch an emulator/simulator or capture script
first. Reuse an already-stated preference from earlier in the same task
instead of re-asking.

## Step 2a — If Automated is chosen

1. Build and deploy to a running emulator (Android) or simulator (iOS), or
   start Metro + launch the app (React Native/Flutter dev build).
2. Capture a screenshot using the platform script:
   - Android: `scripts/capture-android.sh <output-path>`
   - iOS: `scripts/capture-ios.sh <simulator-name> <output-path>`
3. Repeat on a second screen size/density if the change is layout-sensitive
   (e.g., a small phone and a tablet-sized emulator/simulator).
4. View the captured images, check against the plan's intent, attach as
   artifacts, and report what you found — including anything that looks
   wrong.

## Step 2b — If Manual is chosen

Produce a numbered checklist instead, e.g.:

```
1. Run: flutter run  (or: npx react-native run-android)
2. Navigate to the "Profile" screen.
3. Check: the avatar image loads without layout shift, and the "Edit"
   button remains reachable on a small (5.5") screen.
```

Do not launch an emulator/simulator or run any capture script in this path.
