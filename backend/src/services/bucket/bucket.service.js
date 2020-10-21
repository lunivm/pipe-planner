import Task from '../../models/task.model';
import getBucketsByPriorityAggregation from './bucketsByPriority.aggregation';
import getOverallCountsAggregation from './overallCounts.aggregation';

const bucketService = Object.freeze({
  async getOverallCounts() {
    return Task.aggregate(getOverallCountsAggregation());
  },

  async getBucketsByCriteria(criteria) {
    return Task.aggregate(getBucketsByPriorityAggregation());
  }
});

export default bucketService;
