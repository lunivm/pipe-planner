import config from './config';
import connectMongoose from './core/db-connection';
import logger from './core/logger';
import initRoutes from './routes';
import server from './server';

connectMongoose();

initRoutes(server);

server.listen(config.port, config.host, () => logger.info(`${server.name} listening at ${server.url}`));
