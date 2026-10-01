import { createServer } from 'node:http';
import { generateOpenApiSpec } from './openapi.js';
import { toolDefinitions } from './tools.js';

export function createApp() {
  const tools = toolDefinitions();
  const server = createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-store');
    
    const send = (status, value) => { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(value)); };
    const sendError = (status, code, message) => send(status, { ok: false, error: { code, message } });

    try {
      const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      
      if (req.method === 'GET' && url.pathname === '/health') return send(200, { status: 'ok', version: '1.0.0', type: 'stateless' });
      if (req.method === 'GET' && url.pathname === '/openapi.json') return send(200, generateOpenApiSpec());
      
      if (req.method === 'POST' && url.pathname.startsWith('/api/tools/')) {
        if (!req.headers['content-type']?.startsWith('application/json')) return sendError(403, 'REQUEST_REJECTED', 'Use JSON.');
        
        const chunks = []; let length = 0;
        for await (const chunk of req) { length += chunk.length; if (length > 3_000_000) return sendError(413, 'TOO_LARGE', 'Request exceeds 3 MB.'); chunks.push(chunk); }
        const body = Buffer.concat(chunks).toString('utf8');
        
        let input;
        try { input = JSON.parse(body); } catch { return sendError(400, 'INVALID_JSON', 'Request body must be valid JSON.'); }
        
        const toolName = url.pathname.split('/').pop();
        const tool = tools.find(t => t.name === toolName);
        if (!tool) return sendError(404, 'UNKNOWN_TOOL', 'Unknown operation.');
        
        const parsed = tool.schema.safeParse(input);
        if (!parsed.success) return sendError(400, 'VALIDATION_ERROR', parsed.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join('; '));
        
        return send(200, tool.run(parsed.data));
      }

      return sendError(404, 'NOT_FOUND', 'Not found.');
    } catch (e) {
      console.error('Request failed:', e);
      if (!res.headersSent) sendError(500, 'INTERNAL_ERROR', 'Internal error.');
      else res.end();
    }
  });
  server.requestTimeout = 15000;
  server.headersTimeout = 10000;
  return { server };
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/').split('/').pop())) {
  const port = Number(process.env.PORT || 4310);
  const { server } = createApp();
  server.listen(port, '0.0.0.0', () => console.log(`Stateless SocialOS Plugin — http://0.0.0.0:${port}\nOpenAPI spec: http://0.0.0.0:${port}/openapi.json\nPress Ctrl+C to stop.`));
}
