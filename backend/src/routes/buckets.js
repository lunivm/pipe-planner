import bucketsController from '../controllers/buckets.controller';

export default function (server) {
  server.get('/buckets', bucketsController.getBuckets);
}
