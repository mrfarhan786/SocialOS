import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { Store } from './store.js';
import { Service } from './service.js';
import { toolDefinitions } from './tools.js';
import { dataPath } from './paths.js';

const store = new Store(dataPath);
const server = new McpServer({ name: 'socialos', version: '1.0.0' });
for (const tool of toolDefinitions(new Service(store))) {
  server.registerTool(tool.name, { description: tool.description, inputSchema: tool.fields, annotations: { readOnlyHint: !tool.write, destructiveHint: false, openWorldHint: false } }, async args => {
    try {
      const value = tool.run(tool.schema.parse(args));
      return { structuredContent: value, content: [{ type: 'text', text: JSON.stringify(value) }] };
    } catch (e) {
      const error = { code: e.code || 'VALIDATION_ERROR', message: e.status === 500 ? 'Internal error. Inspect local diagnostics.' : e.message };
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] };
    }
  });
}
await server.connect(new StdioServerTransport());
let closing = false;
async function close() { if (closing) return; closing = true; await server.close(); store.close(); }
process.once('SIGINT', () => close().then(() => process.exit()));
process.once('SIGTERM', () => close().then(() => process.exit()));
process.stdin.once('end', () => close().then(() => process.exit()));
