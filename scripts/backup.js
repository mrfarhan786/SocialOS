import { DatabaseSync } from 'node:sqlite';
import { mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { dataPath, root } from '../src/paths.js';
if(!existsSync(dataPath))throw new Error('No database exists yet. Start SocialOS and create a workspace first.');
const folder=resolve(root,'backups');mkdirSync(folder,{recursive:true});
const destination=resolve(folder,`socialos-${new Date().toISOString().replace(/[:.]/g,'-')}.sqlite`);
const db=new DatabaseSync(dataPath);try{db.exec('PRAGMA busy_timeout=5000');db.prepare('VACUUM INTO ?').run(destination);console.log(`Verified backup created: ${destination}`);}finally{db.close();}
const check=new DatabaseSync(destination,{readOnly:true});try{const result=check.prepare('PRAGMA integrity_check').get();if(result.integrity_check!=='ok')throw new Error('Backup integrity verification failed.');console.log('SQLite integrity check: ok');}finally{check.close();}
