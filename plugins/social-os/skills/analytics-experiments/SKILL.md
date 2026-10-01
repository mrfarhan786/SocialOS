---
name: analytics-experiments
description: Analyze real imported SocialOS metrics, diagnose cautiously, design experiments and save evidence-backed learning with explicit scope.
---

# Analytics and experimentation

Use analytics_query for recorded observations. Never create statistics, competitor analytics, follower history or revenue to fill missing data. The local CSV format represents cumulative snapshots for one workspace/account context per platform. The latest snapshot per content/platform/format is used, and missing cells remain unknown.

Before importing, validate canonical columns and content IDs with analytics_import_preview. Show mapping and coverage problems. Commit only the exact preview_digest and unchanged CSV within the authorized import request. Re-imports are deduplicated; conflicting historical observations require explicit reconciliation.

Compare platform, format and content age. Do not combine incompatible metrics or sum cumulative snapshots. Report source coverage and the observation window. Weighted click rate uses only records containing both clicks and positive impressions; it is not necessarily a platform's native thumbnail CTR.

For a diagnosis deliver observation, evidence, possible explanation, alternatives, confidence and the next test. Do not infer causality from ordinary organic content comparisons. Small samples may remain inconclusive.

Save experiments with hypothesis, one main variable, baseline/control, primary metric, guardrails, stopping condition, results, evidence and limitations. Complete an experiment only after its evidence exists. Store reviewed learning only when a completed experiment supports it, and explicitly scope account, format, audience and time period. Never turn one success into a universal platform rule.
