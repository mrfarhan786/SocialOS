---
name: web-visual-verification
description: Protocol for verifying web/UI changes (React, Next.js, Angular, Vue, HTML/CSS/Tailwind). Requires asking the user to choose Automated vs Manual verification before running the browser subagent, since browser automation and screenshots consume significant tool calls. Use after any change affecting rendered web UI.
---

# Web Visual Verification

Browser automation (`/browser`), screenshots, and recordings are tool-call-
and token-expensive. **Never run them without asking first.**

## Step 1 — Ask, every task, before doing anything else in this skill

Use the `ask_question` tool with a single-select question:

- Question: "This change affects rendered UI. How would you like it
  verified?"
- Options:
  1. "Automated — open a browser, screenshot key breakpoints, and check for
     visible issues (uses more tool calls)"
  2. "Manual — give me exact steps/test cases and I'll check it myself"

Wait for the answer. Do not invoke `/browser` before this answer is
received. If the user has already stated a preference earlier in this same
task/conversation, don't ask again — reuse it.

## Step 2a — If Automated is chosen

1. Invoke `/browser` and navigate to the affected route(s).
2. Capture screenshots at a small set of breakpoints relevant to the change
   (typically mobile ~375px, tablet ~768px, desktop ~1280px — fewer if the
   change is narrowly scoped, e.g. a component only used in a sidebar).
3. Do a quick visual pass against the plan's intent: layout correctness, no
   overlapping/clipped content, interactive states (hover/focus/disabled)
   where relevant, obvious contrast issues.
4. Attach the screenshots as artifacts and describe what you checked and
   what you found — including anything that looks wrong, not just
   confirmations.
5. Keep the number of screenshots proportional to the change — don't
   screenshot every unrelated page "just in case."

## Step 2b — If Manual is chosen

Produce a numbered checklist instead, e.g.:

```
1. Run: npm run dev
2. Open: http://localhost:3000/settings
3. Resize the window to ~375px wide.
4. Check: the "Save" button remains visible and tappable without
   horizontal scrolling.
Expected: layout reflows to a single column below 480px.
```

Do not call `/browser` or capture any screenshot in this path.
