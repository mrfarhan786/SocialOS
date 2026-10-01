# SocialOS interaction flow v3.1

Canonical stage order and predefined questions. State: `project-ledger.md`. Research standards: `research-rubric.md`.

## Rules

- Run the pre-question check (`project-ledger.md`) before every question.
- Every user question is a predefined card from `skills/social-orchestrator/SKILL.md`. No exceptions.
- Update the ledger after every stage.

## Questions

Question rules and every card live in `skills/social-orchestrator/SKILL.md` (Question format and Cards).

## Master flow

```
                         ┌───────────────────┐
                         │     @SocialOS     │
                         └─────────┬─────────┘
                                   ▼
                         ┌───────────────────┐
                         │   INTENT ROUTER   │
                         └─────────┬─────────┘
                                   ▼
                         Platform / Objective
                                   │
                                   ▼
                         NEW OR EXISTING?
                                   │
                     ┌─────────────┴─────────────┐
                     ▼                           ▼
                   NEW                       EXISTING
                     │                           │
                     └─────────────┬─────────────┘
                                   ▼
                    ╔══════════════════════════╗
                    ║   REFERENCE GATEWAY      ║
                    ║       MANDATORY          ║
                    ╚════════════╤═════════════╝
                                 │
               ┌─────────────────┼──────────────────┐
               ▼                 ▼                  ▼
           One ref          Multiple refs      Discover refs
               │                 │                  │
               │                 │             Context enough?
               │                 │               │       │
               │                 │              YES      NO
               │                 │               │       │
               │                 │               │    Seed niche/
               │                 │               │    niche discovery
               └─────────────────┴───────────────┴───────┘
                                 │
                                 ▼
                       RESEARCH REQUIREMENT
                                 │
                                 ▼
                    ╔══════════════════════════╗
                    ║       TOOL BROKER        ║
                    ║ Discover → Ask → Approve ║
                    ╚════════════╤═════════════╝
                                 │
                                 ▼
                    REFERENCE INTELLIGENCE
                                 │
               ┌─────────────────┼─────────────────┐
               ▼                 ▼                 ▼
          Channel Scan     Story Analysis    Visual Analysis
               │                 │                 │
               └─────────────────┼─────────────────┘
                                 ▼
                     COMPETITIVE SYNTHESIS
                                 │
                    ┌────────────┴────────────┐
                    ▼                         ▼
               NEW CHANNEL               EXISTING CHANNEL
                    │                         │
             Niche decision              Own-channel scan
                    │                         │
              Positioning                 Gap analysis
                    │                         │
            Name intelligence                 │
                    │                         │
             Channel identity                 │
                    └────────────┬────────────┘
                                 ▼
                         PRODUCTION PROFILE
                                 │
                  ┌──────────────┼──────────────┐
                  ▼              ▼              ▼
              Faceless/AI     Format        Duration
                  │
                  ▼
                       REFERENCE STYLE PROFILE
                                 │
                                 ▼
                           STYLE DECISION
                                 │
                                 ▼
                           STYLE-BIBLE-01
                                 │
                                 ▼
                         BREAKOUT WINDOW
                          30 / 60 / 90
                                 │
                                 ▼
                    TREND INTELLIGENCE ENGINE
                                 │
             ┌───────────────────┼────────────────────┐
             ▼                   ▼                    ▼
         7–10 day             30/60/90d           Reference
          trends              breakouts             gaps
             │                   │                    │
             └───────────────────┼────────────────────┘
                                 ▼
                        OPPORTUNITY ENGINE
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │ SINGLE 20-ROW TABLE    │
                    │ 10 observed winners    │
                    │ 10 SocialOS ideas      │
                    └───────────┬────────────┘
                                ▼
                         TOPIC SELECTION
                                │
                                ▼
                       PACKAGING ENGINE
                                │
               ┌────────────────┼───────────────┐
               ▼                ▼               ▼
             Title          Thumbnail        Story angle
               └────────────────┼───────────────┘
                                ▼
                             Promise
                                │
                                ▼
                              Hook
                                │
                                ▼
                          SCRIPT DECISION
                                │
                                ▼
                       WORLD-CLASS SCRIPT
                                │
                                ▼
                 Chapter + Scene Time Table
                                │
                                ▼
                        SCRIPT CHECKPOINT
                                │
                                ▼
                       STORYBOARD ENGINE
                                │
                                ▼
                Story → Chapter → Scene → Shot
                                │
                                ▼
                    MASTER PRODUCTION PACKAGE
                                │
                 ┌──────────────┼──────────────┐
                 ▼              ▼              ▼
             Style Bible    Character IDs   World/Object IDs
                 │              │              │
                 └──────────────┼──────────────┘
                                ▼
                      TIMED IMAGE PROMPTS
                                │
                                ▼
                         IMAGE DECISION
                                │
                ┌───────────────┼────────────────┐
                ▼               ▼                ▼
             Generate        Review          External AI
                │
                ▼
                         TEST BATCH
                │
                ▼
                         VISUAL QC
                │
           ┌────┴─────┐
           ▼          ▼
         PASS        FAIL
           │          │
           │          ▼
           │      Fix affected
           │          │
           └────┬─────┘
                ▼
         GENERATE REMAINDER
                │
                ▼
          FINAL IMAGE QC
                │
                ▼
       DEPENDENCY-AWARE REVISION
                │
                ▼
          VIDEO PROMPT ENGINE
                │
                ▼
          VIDEO PROMPT QC
                │
                ▼
       ╔════════════════════════╗
       ║ EXPLICIT USER APPROVAL ║
       ╚════════════╤═══════════╝
                    │
              ┌─────┴─────┐
              ▼           ▼
            STOP       GENERATE
                          │
                          ▼
                    VIDEO TOOL
```

Intent Router = card C1 (Goal · Platform · Channel). Both goals continue with C2 references. Continue project and analytics are on request only.
