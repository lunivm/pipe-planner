import buckets from './buckets';

export default function(server) {
  server.get('/', (req, res, next) => {
    res.send({ok: true});
    next();
  });

  buckets(server);
}
