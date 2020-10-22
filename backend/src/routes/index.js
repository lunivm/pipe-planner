import buckets from './buckets';
import tasks from './tasks';

export default function(server) {
  server.get('/', (req, res, next) => {
    res.send({ok: true});
    next();
  });

  buckets(server);
  tasks(server);
}
