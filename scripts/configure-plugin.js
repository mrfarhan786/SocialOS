import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { root, dataPath } from '../src/paths.js';
const server={command:process.execPath,args:['--experimental-sqlite',resolve(root,'src','mcp.js')],env:{SOCIALOS_DB:dataPath}};
writeFileSync(resolve(root,'plugins/social-os/.mcp.json'),JSON.stringify({mcpServers:{socialos:server}},null,2)+'\n');
writeFileSync(resolve(root,'plugins/social-os/mcp.json'),JSON.stringify({$schema:'https://agent-plugins.org/schemas/1.0.0/mcp.schema.json',mcpServers:{socialos:{type:'stdio',...server}}},null,2)+'\n');
console.log(`Local plugin configured for ${root}. Run this again if you move the project. No host settings were changed.`);
