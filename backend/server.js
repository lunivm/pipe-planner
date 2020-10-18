import restify from 'restify';
const morgan = require('morgan'); // workaround, not working otherwise
import config from './config';
import initRoutes from './routes';
import logger from './core/logger';
import connectMongoose from './core/db-connection';
import corsMiddleware from 'restify-cors-middleware';

connectMongoose();

const server = restify.createServer({
  name: config.name,
  version: config.version
});

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: [],
  exposeHeaders: []
});
server.pre(cors.preflight);
server.use(cors.actual);

// fix curl keep-alive idiosyncrasy
server.pre(restify.plugins.pre.userAgentConnection());

// logging each request
server.use(morgan('tiny', {
  stream: {
    write: msg => logger.info(msg)
  }
}));

initRoutes(server);
server.listen(config.port, config.host, () => logger.info(`${server.name} listening at ${server.url}`));
