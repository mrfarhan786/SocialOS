---
name: native-desktop-visual-verification
description: Protocol for verifying WPF/WinUI desktop UI changes. Requires asking the user to choose Automated vs Manual verification before running the app and capturing a window screenshot, since this consumes significant tool calls. Use after any change affecting rendered WPF/WinUI UI.
---

# Native Desktop (WPF/WinUI) Visual Verification

## Step 1 — Ask, every task, before doing anything else in this skill

Use the `ask_question` tool, single-select:

- Question: "This change affects the WPF/WinUI UI. How would you like it
  verified?"
- Options:
  1. "Automated — run the app, capture a window screenshot, and check it
     (uses more tool calls)"
  2. "Manual — give me exact steps to check it myself"

Wait for the answer; don't run the app or any capture script first. Reuse an
already-stated preference from earlier in the same task instead of
re-asking.

## Step 2a — If Automated is chosen

1. Build and run the app (`dotnet build` then launch the executable, or
   `dotnet run` for the relevant project).
2. Use `scripts/capture-wpf-winui.ps1 -ProcessName <exe name> -OutPath <path>`
   to capture the main window.
3. View the captured image, check it against the plan's intent (layout,
   binding correctness, visible content), attach it as an artifact, and
   report what you found.
4. Close the app process when done unless the user needs it running.

## Step 2b — If Manual is chosen

Produce a numbered checklist instead, e.g.:

```
1. Run: dotnet run --project src/App
2. Open the "Settings" window from the menu.
3. Check: the new "Enable notifications" toggle is visible and its state
   persists after closing and reopening the window.
```

Do not run the app or any capture script in this path.
