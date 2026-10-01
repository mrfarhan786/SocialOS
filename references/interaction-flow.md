# SocialOS interaction flow v3.0

Canonical stage order and menus. State: `project-ledger.md`. Research standards: `research-rubric.md`.

## Rules

- One question per message. Numbered menu. Accept numbers, multi-select (`1,2,4`) where marked, short text, URLs or custom.
- Run the pre-question check (`project-ledger.md`) before every question.
- No explanatory paragraphs before menus.
- Update the ledger after every stage.

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

Side routes from the Intent Router: **Continue project** → resume at `stage`. **Analytics** → `analytics-experiments`. **Trending niches/topics (no channel)** → gateway in discover mode → breakout window → table.

## Stage menus

**S0 Intent** (only if no task is given): What would you like to do?
1 Create content · 2 New channel · 3 Grow existing channel · 4 Trending niches · 5 Trending topics · 6 Continue project · 7 Analytics · 8 Other

**S1 Platform**: YouTube · TikTok · Instagram · Facebook · LinkedIn · X · Multiple · Other

**S2 Mode**: 1 New channel · 2 Existing channel. If Existing, ask for the channel link (a name is accepted).

**S3 Reference gateway (mandatory)**: Which competitor/reference channels should SocialOS study?
1 I'll provide one channel · 2 I'll provide multiple channels · 3 Discover strong references for me · 4 I have a specific channel/video URL · 5 Custom
- Pasted URLs skip the menu. Accept any count. Never ask for more.
- Option 3 rules:
  - Niche known → discover references.
  - New channel with no niche → ask for a seed niche once: 1 I have a category (type it) · 2 Discover niches for me
  - Niche discovery → one niche table → user picks → discover references.
- Topic research, naming and strategy never bypass S3.

**S3.5 Tool broker**: runs before the first external research. Ask once per tool per purpose.
- Connected tool found: `<Tool>` is available for competitor, breakout and topic research. Use it for this project?
  1 Yes, all relevant research · 2 Topic research only · 3 Check other tools first · 4 Don't use it
- Several tools found: numbered list · Best combination · None
- No tool found: 1 Connect `<A>` · 2 Connect `<B>` · 3 Continue with web research · 4 Search for another tool
- Declined → host web research.
- Never invent tools, connection status or pricing.

**S4 Reference intelligence**: automatic (`reference-intelligence`). Output one table.

**S5 New channel** (`channel-growth`):
- Niche: 1 Use reference niche · 2 Narrow · 3 Broaden · 4 Hybrid (SocialOS proposes) · 5 Custom
- Positioning: 2–4 options
- Name table: Choose a name number, type your own, or say More
- Identity: automatic
- Branding: 1 Logo + banner · 2 Logo · 3 Banner · 4 Prompts only · 5 Skip

**S5 Existing channel** (`channel-growth`):
- Gap map table: automatic
- Positioning (only if a material shift is recommended): 1 Keep · 2 Sharpen · 3 Pivot · 4 Custom

**S6 Production profile** (missing fields only):
- Type (multi-select): 1 Faceless · 2 AI-generated · 3 On-camera / personal brand · 4 Animation · 5 Hybrid · 6 Other
- Format: 1 Long-form · 2 Shorts · 3 Both · 4 Other
- Duration:
  - Long: 1 5–8 min · 2 8–12 min · 3 12–20 min · 4 Custom
  - Shorts: 1 15–30 s · 2 30–60 s · 3 60–90 s · 4 Custom

**S6.5 Style decision**: I analyzed the visual direction used by the reference channels. How should SocialOS use it?
1 Similar overall production direction · 2 Inspired by it, but more premium/distinctive · 3 Combine the strongest elements · 4 Completely different style · 5 Custom
→ STYLE-BIBLE-01 draft (`visual-production`)

**S7 Breakout window**: What breakout window should I research?
1 Last 30 days · 2 Last 60 days · 3 Last 90 days · 4 Custom

**S8 Topic table** (`trend-research`): Choose a topic number, type your own topic, or say More for another 10 opportunities using the same criteria.

**S9 Packaging** (`content-production`): Which direction should we use?
1 Investigative documentary · 2 Financial mystery · 3 High-stakes warning · 4 Opportunity / wealth angle · 5 Contrarian analysis · 6 Let SocialOS choose based on research · 7 Custom
(Labels adapt to the niche.) Then show the Title, Thumbnail, Promise and Hook, followed by the script gate.

**S10 Script gate**: Create the full script?
1 Yes · 2 Show outline first · 3 Change angle · 4 Custom

**S10.5 Script checkpoint**:
1 Improve/edit script · 2 Create storyboard/scenes · 3 Create visual prompts · 4 Create image prompts · 5 Create complete production package · 6 Export script only · 7 Other
- Options 3–5 run the storyboard first.
- Option 5 runs through to the image gate.

**S11 Storyboard / S12 Master package**: automatic.

**S13 Image gate**: All scene-image prompts are ready. What should I do?
1 Generate all images · 2 Generate first 5 for consistency review · 3 Generate one chapter · 4 Review prompts first · 5 I'll generate elsewhere · 6 Export master package
Generation always runs as test batch → QC → lock → remaining batches.

**S13.5 QC exceptions**: `N` images checked. `P` passed. `F` require correction.
1 Fix affected images · 2 Show issues · 3 Continue anyway

**S14 Revisions** (any stage): This change affects `N` shots.
1 Update affected prompts only · 2 Update prompts + regenerate affected images · 3 Apply from a specified scene/chapter onward · 4 Cancel

**S15 Video prompts + QC**: automatic.

**S16 Video gate**: Video package is ready.
1 Generate videos · 2 Review video prompts · 3 Export prompts · 4 Stop here
- Only option 1 authorizes rendering, for this package revision only.
- Name the video tool before use.
- A changed package needs fresh approval.
- No earlier approval counts as video approval.
