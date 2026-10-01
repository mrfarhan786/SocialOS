import { z } from 'zod';

export function toolDefinitions() {
  const tools = [];
  const add = (name, description, fields, run) => tools.push({ name, description, schema: z.object(fields).strict(), fields, run });

  add(
    'generate_brand_strategy',
    'Generate a comprehensive brand strategy prompt including objective, audience, and pillars.',
    {
      objective: z.string().describe('The primary business or social objective.'),
      audience: z.string().describe('The target audience description.')
    },
    (args) => ({
      prompt: `Act as a SocialOS Brand Strategist. Based on the objective "${args.objective}" and audience "${args.audience}", generate a concise strategy including: a core promise, differentiation, content pillars, and recommended platform roles. Do not invent false market data.`
    })
  );

  add(
    'generate_content_brief',
    'Develop a raw idea into a clear, reviewable content production brief.',
    {
      idea: z.string().describe('The raw content idea or topic.'),
      platform: z.string().describe('The target platform (e.g., YouTube, TikTok, LinkedIn).')
    },
    (args) => ({
      prompt: `Act as a SocialOS Content Producer. Turn the following idea into a production-ready brief for ${args.platform}: "${args.idea}". Include a strong hook, a suggested narrative structure, and a clear Call To Action (CTA). Keep it platform-native.`
    })
  );

  add(
    'generate_image_prompt',
    'Generate a highly detailed prompt for an AI image generator based on a scene description.',
    {
      description: z.string().describe('A brief description of the scene or subject.')
    },
    (args) => ({
      prompt: `Act as a SocialOS Creative Director. Generate a highly detailed image generation prompt for DALL-E based on this description: "${args.description}". Specify lighting, camera angle, subject details, background, and artistic style.`
    })
  );

  add(
    'analyze_metrics_hypothesis',
    'Generate a hypothesis for content performance based on given metrics.',
    {
      metrics: z.string().describe('A summary of the metrics (e.g., "High impressions, low click rate").')
    },
    (args) => ({
      prompt: `Act as a SocialOS Analytics Expert. Based on these metrics: "${args.metrics}", deliver an observation, a possible explanation (hypothesis), and a suggestion for the next test. Do not infer absolute causality from small organic samples.`
    })
  );

  add(
    'youtube_trend_research',
    'Research YouTube trending topics, search optimization (SEO), and ranking strategies for a specific niche.',
    {
      niche: z.string().describe('The niche or topic to research (e.g., "tech reviews", "fitness").')
    },
    (args) => ({
      prompt: `Act as a YouTube SEO and Research Expert. Your task is to perform deep research on the niche: "${args.niche}". Use your web browsing capabilities to find currently trending topics, high-ranking search terms, and viral video formats in this niche. Provide a structured report including: 1. Top 5 trending keywords. 2. 3 highly optimized video title ideas. 3. SEO-friendly tags and description structures. 4. An analysis of what is currently working for top competitors.`
    })
  );

  return tools;
}
