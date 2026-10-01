# SocialOS — Local Edition

A working local content operations application and MCP plugin. Brand context, content revisions, platform versions, production specifications, evidence, resumable workflows, imported metrics, experiments and learning share one SQLite database.

**Release boundary:** this is a single-owner application on your computer. It is not the hosted, multi-user, externally connected product described by the full implementation roadmap. No social account is connected and no posting, AI media rendering, subscription billing or background model reasoning is performed. The AI host supplies creative reasoning through the included plugin; the standalone browser app is an editor and operations workspace.

## Start now

Requirements: Node.js 22.13+ with `node:sqlite`. The current project was tested with Node 22.17.0. SQLite is experimental in that runtime and produces a startup warning.

On this machine, dependencies are already installed. Double-click **Start-SocialOS.cmd**, or run:

```powershell
node --experimental-sqlite src/server.js
```

Open [SocialOS](http://127.0.0.1:4310). Create a brand workspace, then add your first content item. No fabricated records are preloaded into your main database. Browser QA uses a separate database under `test-results/`.

For a fresh checkout:

```powershell
npm ci
node scripts/configure-plugin.js
npm start
```

This machine's `npm` shim points to a missing installation. If that remains broken, the installed Node distribution's npm works directly:

```powershell
& 'C:\Program Files\nodejs\node.exe' 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' ci
```

Do not delete the lockfile. `package-lock.json` pins the installed dependency graph. The application serves its own static interface; no separate frontend build or CDN is needed.

## What works

- Multiple local brand workspaces with audience, objective, voice, pillars, language, timezone and constraints.
- Versioned master content and native platform variants. Optimistic concurrency prevents silent lost edits.
- Searchable library and editorial calendar. Calendar dates are planning dates, not live publishing schedules.
- Durable content workflow with prerequisites and review notes. Editing master content invalidates older variants; dependency changes reopen review.
- Creative bibles, scene identifiers, shot manifests, reference checks and contiguous runtime validation.
- Sources and claims, asset provenance and rights evidence. Assets are registered by location; SocialOS does not copy media into managed storage.
- Structural quality checks with blockers and advisories. Results never claim legal clearance or publishing approval.
- JSON and Markdown content export; complete workspace JSON export with immutable revision history.
- Canonical CSV analytics preview/import, duplicate detection, immutable observations and compatible cohort summaries.
- Experiments and typed knowledge with evidence requirements for reviewed learning.
- Six validated plugin skills and 16 MCP tools backed by the same domain services as the interface.
- Local audit events, database backups with integrity verification, strict request schemas, loopback binding, host/origin checks and a restrictive content security policy.

## Use the MCP plugin

The plugin lives at `plugins/social-os`. `node scripts/configure-plugin.js` writes local MCP launch paths using the current Node executable and project location. Run it again after moving the project. The plugin intentionally points to this installation so a cached plugin copy and the web app share the same database.

The package includes the portable manifest, a Codex compatibility manifest, MCP configuration and six skills. It has been checked with the official local plugin/skill validators. It has **not** been published to a directory or automatically installed into your host settings.

In a compatible local plugin host, install the `plugins/social-os` folder through its local-plugin workflow and enable its MCP server. Exact installation UI depends on your host. If your host supports direct stdio MCP configuration, use the concrete server entry generated in `plugins/social-os/.mcp.json`.

For a host using a manual MCP configuration, the equivalent entry on this machine is:

```json
{
  "mcpServers": {
    "socialos": {
      "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": ["--experimental-sqlite", "G:\\YouTube\\SocialOS\\src\\mcp.js"],
      "env": {"SOCIALOS_DB": "G:\\YouTube\\SocialOS\\data\\socialos.sqlite"}
    }
  }
}
```

Start a fresh chat after enabling the plugin. Try: “Use SocialOS to create a content package for my workspace.” The content editor also exports a context-rich AI handoff prompt. If only direct MCP is installed, provide the workflow instructions from the skills as needed.

The local stdio server is tested with the official MCP client. This is not a remote HTTPS MCP endpoint; browser-based/cloud ChatGPT connections need a separately deployed authenticated service. Do not expose this local app through a public tunnel.

## Tool inventory

`workspace_list`, `workspace_save`, `workspace_get_state`, `context_get`, `content_search`, `content_get`, `content_save`, `record_save`, `workflow_start`, `workflow_advance`, `qc_run`, `content_export`, `analytics_import_preview`, `analytics_import_commit`, `analytics_query`, `workspace_export`.

Creation requires a new object without an ID. Updating a record requires its ID and `expected_revision`. Use current values returned by the tools; do not post database metadata such as `created_at` or `kind` back into the strict content schema. Detailed schemas are exposed through MCP discovery.

`record_save` accepts source, asset, production, experiment and knowledge objects. A variant references the content's `master_revision`, which differs from its general `revision`. General revisions change on every save; master revisions change when audience, objective, title, promise, script or CTA changes.

## Recommended first workflow

1. Create your workspace and record your brand's audience and voice.
2. Add content with a clear promise and master script.
3. Start the workflow. Save evidence for substantive factual claims.
4. Create a native version for each target platform.
5. Add production bibles/shots if needed; register required assets and rights evidence.
6. Run checks. Resolve blockers and perform the editorial/policy review.
7. Export the package. Publish through your own tools if appropriate.
8. Import actual metrics using the template; design an experiment from the evidence.

## Analytics contract

Download the empty CSV template in Performance. Required columns:

```text
content_id,platform,format,published_at,observed_at
```

Optional columns:

```text
views,impressions,clicks,watch_seconds,likes,comments,shares,saves
```

Use IDs from the Performance reference table or exported content. The platform must be targeted by that content. The format must match its master or a variant on that platform. Dates are ISO calendar dates or UTC timestamps. Counts are nonnegative integers; `watch_seconds` may be fractional. Blank values mean unknown, never zero.

Each row is a **cumulative snapshot** at the observation time, not an interval total. Use one account context per platform within a workspace. Multiple accounts on the same platform require separate workspaces in this release. Do not mix paid and organic datasets if you need a meaningful comparison; the canonical format does not currently model that dimension.

A repeated identical observation is skipped. A different value for the same content/platform/format/observation time is rejected rather than silently overwritten. A subsequent observation uses a later observation timestamp. Corrections to history require an explicit reconciliation procedure; there is no automatic correction UI.

Reports use the latest eligible observation per item after age-window filtering, group platform and format separately, and disclose missing values. Weighted click rate uses only rows with both clicks and positive impressions. It is a calculated ratio, not necessarily a provider's native CTR definition. Reports do not establish causal explanations or attribution.

There is no automatic mapping from arbitrary YouTube/Meta exports. Convert the desired columns to this canonical template, retaining consistent native definitions. Source-specific importers remain future work.

## Data, backups and recovery

The default database is `data/socialos.sqlite`. Override `SOCIALOS_DB` to use a different database. All records are local and unencrypted; protect the machine account and disk accordingly. Anyone able to run software under your account can access this local installation. Workspace scoping prevents accidental cross-workspace references; it is not multi-user authorization.

Create a consistent SQLite backup while the app is running:

```powershell
node --experimental-sqlite scripts/backup.js
```

Backups are timestamped in `backups/` and checked using SQLite's integrity check. Keep copies on your own backup medium. Workspace JSON exports are for portability and inspection; there is no JSON restore UI.

To inspect a backup without overwriting data, stop a test instance and launch a separate server against the backup path on a different port. To restore your main installation, stop both web and MCP processes first; preserve the current database and its WAL/SHM files together, then copy the verified backup as a fresh database path and point `SOCIALOS_DB` to it. Reconfigure the plugin to use that same path. Never replace a live SQLite file or pair a restored database with old WAL/SHM files.

For a safe empty test instance:

```powershell
$env:SOCIALOS_DB = 'G:\YouTube\SocialOS\test-results\isolated.sqlite'
$env:PORT = '4311'
node --experimental-sqlite src/server.js
```

## Verification

```powershell
node scripts/check.js
node --experimental-sqlite --test tests/*.test.js
```

Tests include persistence after reopening, conflicting revisions, workspace isolation, workflow gates, stale variants, evidence requirements, production timing, analytics deduplication/aggregation, HTTP access checks and the official MCP client handshake/tool calls. See `docs/VERIFICATION.md` for the release record and browser checks.

## Known release limits

- Single trusted local owner; no hosted OIDC, membership roles or tenant authentication.
- SQLite replaces the roadmap's PostgreSQL for this local release; future hosted migration requires implementation and tests.
- Plain JavaScript ES modules with runtime schemas, not a TypeScript/React build. This reduces the local build/runtime surface while retaining shared validation.
- No platform OAuth, live sync, remote publishing, posting approvals or generation-provider execution.
- No hosted object storage or media uploads; provenance references existing files/URLs.
- No vector retrieval; compact structured retrieval is sufficient for the current scope.
- No automatic policy research or verified technical-spec cache. The included platform guidance is explicitly editorial and unverified.
- No background reasoning; workflows continue when the user or host invokes them.
- No claims of perfect security, guaranteed reach or validated legal compliance.

The original implementation plan remains the roadmap. These differences are intentional scope boundaries of the completed local implementation, not claims that external integrations were finished.
