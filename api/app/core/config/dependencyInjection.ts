import fs from 'node:fs';
import path from 'node:path';

const modulesPath = path.join(__dirname, '..', '..', 'modules');
const modules = fs.readdirSync(modulesPath);

modules.forEach(module => {
  const modulePath = path.join(modulesPath, module, 'singletons');

  if (fs.existsSync(modulePath)) {
    fs.readdirSync(modulePath)
      .filter(file => {
        return file.slice(-3) === '.ts' || file.slice(-3) === '.js';
      })
      .forEach(async file => {
        await import(path.join(modulePath, file));
      });
  }
});
