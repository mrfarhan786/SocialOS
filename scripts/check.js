import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
const dirs=['src','public','scripts','tests'];let count=0;
for(const dir of dirs)for(const file of readdirSync(dir).filter(f=>f.endsWith('.js'))){const r=spawnSync(process.execPath,['--check',resolve(dir,file)],{encoding:'utf8'});if(r.status!==0){console.error(r.stderr);process.exit(1);}count++;}
const pkg=JSON.parse(readFileSync('package.json','utf8'));for(const dep of Object.keys(pkg.dependencies))if(!readFileSync(`node_modules/${dep}/package.json`))throw new Error(`Missing ${dep}`);
console.log(`Syntax checked ${count} JavaScript files; dependencies present.`);
