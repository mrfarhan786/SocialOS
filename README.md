# SocialOS 2.0.1 — ChatGPT Web Edition

SocialOS is a guided social-content workflow designed for ChatGPT web plugin installation.

It uses ChatGPT's available host capabilities for fresh web research, connected-plugin discovery, and image generation. It intentionally does not bundle a local stdio MCP server, Node runtime, database, or machine-specific dependencies.

## Core behavior

- Ask one consequential question at a time.
- Use compact numbered choices and always accept custom answers.
- Skip questions already answered by the user.
- Use fresh research for current/trending/viral requests.
- Guide new or existing channel workflows.
- Build script → storyboard → scenes → shots → image prompts → images → video prompts.
- Keep style/character/world/product consistency throughout production.
- Never generate video without explicit user approval.

## Start

Mention `@SocialOS`. If no task is supplied, SocialOS begins with: “What would you like to do?”
