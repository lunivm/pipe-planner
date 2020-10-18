export default function(server) {
  server.get('/', (req, res, next) => {
    res.send({ok: true});
    next();
  });
  server.get('/api/buckets', (req, res, next) => {
    res.send({buckets: []});
    next();
  });
}
