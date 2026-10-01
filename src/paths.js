import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
export const root = fileURLToPath(new URL('../', import.meta.url));
export const dataPath = process.env.SOCIALOS_DB || resolve(root, 'data', 'socialos.sqlite');
