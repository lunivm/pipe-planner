import restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';
import config from './config';
import logger from './core/logger';

const morgan = require('morgan'); // workaround, not working otherwise

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

export default server;
