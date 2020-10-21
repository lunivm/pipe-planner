import * as _ from 'lodash';
import bucketService from '../services/bucket/bucket.service';

const bucketsController = Object.freeze({
  async getBuckets(req, res, next) {
    const criteria = req.query.criteria;
    const buckets = (await bucketService.getBucketsByCriteria()) || [];
    const overallCounts = (await bucketService.getOverallCounts()) || [];

    res.send({
      criteria,
      overallCounts: overallCounts.map(i => _.pick(i, ['total', 'status', 'priority'])),
      buckets: buckets
        // root shape
        .map(i => _.pick(i, ['total', 'groups', 'label']))
        // groups array items shape
        .map(i => Object.assign({}, i, {
          groups: i.groups.map(({ label, total, priority }) => ({ label, total, priority }))
        }))
    });

    next();
  }
});

export default bucketsController;
