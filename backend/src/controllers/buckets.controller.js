import bucketService from '../services/bucket.service';

const bucketsController = Object.freeze({
  async getBuckets(req, res, next) {
    const criteria = req.query.criteria;
    const buckets = (await bucketService.getBucketsByCriteria()).map(({ priority, total }) => ({ priority, total }));
    const overallCounts = (await bucketService.getOverallCounts()).map(({ status, total }) => ({ status, total }));

    res.send({
      criteria,
      overallCounts,
      buckets
    });

    next();
  }
});

export default bucketsController;
