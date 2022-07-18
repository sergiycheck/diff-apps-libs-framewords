import glob from 'glob';
import { promisify } from 'util';

export default async function logFiles() {
  const globPromisified = promisify(glob);
  const files = await globPromisified('src/**/*.ts');
  if (files) console.log('files', files);
  return files;
}
