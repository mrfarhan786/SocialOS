# SocialOS canonical interaction flow v2.1

## Interaction contract

- Ask one consequential question at a time.
- Prefer numbered choices and accept short/custom answers.
- Never ask for a value already explicit in the request/current project context.
- Perform deterministic work automatically.
- For current/trending topic discovery, discover research tools first and confirm before using a connected third-party tool.
- Pause at creative selection/review checkpoints; never auto-render video.

## Entry

1. Content Creation
2. Create New Channel/Account
3. Existing Channel
4. Trending Niches
5. Trending Topics
6. Continue Project
7. Analytics / Improve Content
8. Other

## Existing-channel content creation

Platform → Existing channel → Channel name → Channel niche/type → Channel production type → Video/content type → Duration → Visual/video style → Tool discovery/confirmation → Fresh topic research → Topic selection/custom.

### Channel production type

1. Faceless
2. AI-generated
3. On-camera / personal brand
4. Animation
5. Hybrid
6. Other

### YouTube video type

1. Long-form
2. YouTube Short
3. Both
4. Other

### Visual/video style

Use a context-sensitive menu. For AI/faceless workflows include options such as Cinematic realistic, Documentary, Photorealistic, 3D/cartoon, 2D cartoon, Anime, Motion graphics/editorial, Minimal and Custom.

## New-channel route

Platform → New channel → Niche known?
- No: ask desired niche count → tool discovery/confirmation → fresh niche research → table → niche selection/custom.
- Yes: accept niche.

Then channel naming/positioning → branding asset choice → channel production type → video/content type → duration → visual/video style → topic tool discovery/confirmation → fresh topic research → topic selection.

## Tool discovery gate for topic research

1. Inspect connected/installed suitable research tools/plugins.
2. If one is connected, ask permission to use it by name.
3. If several are connected, ask which to use or offer best combination.
4. If none is connected, discover available suitable tools/plugins; offer connectable options, labeling free only when verified.
5. If user declines, continue with host web/search research.
6. Only then research/suggest topics.

## Topic table

Default batch = 20 rows:
- 10 observed recent/high-performing topic patterns, prioritizing last-10-day signals and relevant 1–3 month high-growth channel/content evidence when available.
- 10 new SocialOS opportunities derived from that evidence and tailored to channel/video/style configuration.

Return one consolidated table only. Then: **Choose a topic number or type your own. Type More if you want another batch using the same criteria.**

## Content and story production

Topic selected → factual research as needed → outline → full script → script checkpoint → bibles → storyboard → image prompts → image-generation choice → images/review → visual QC → video prompts.

Production hierarchy: `Story → Chapter → Scene → Shot/Clip`. Provider duration limits apply to shots/clips.

## Video boundary

After video prompts are ready, explicitly ask whether to render video. Never infer rendering permission from earlier content, image, storyboard or prompt requests.
