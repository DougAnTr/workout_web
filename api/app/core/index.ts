import 'reflect-metadata';

import './config';
import database from './database';
import server from './server';

(async () => {
  await database.connect();
  server.start();
})();
