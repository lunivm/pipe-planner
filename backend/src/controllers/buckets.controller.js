import * as _ from 'lodash';
import bucketService from '../services/bucket/bucket.service';

const bucketsController = Object.freeze({
  async getBuckets(req, res, next) {
    const criteria = req.query.criteria;
    const buckets = (await bucketService.getBucketsByCriteria()) || [];
    const overallCounts = (await bucketService.getOverallCounts()) || [];

    res.send({
      criteria,
      overallCounts: overallCounts.map(i => _.pick(i, ['total', 'status'])),
      buckets: buckets.map(i => _.pick(i, ['total', 'items', 'label']))
    });

    next();
  }
});

export default bucketsController;
