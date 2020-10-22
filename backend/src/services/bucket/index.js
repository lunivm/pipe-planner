import CurrentTaskModel from '../../models/current-task.model';
import getBucketsByPriorityAggregation from './bucketsByPriority.aggregation';
import getOverallCountsAggregation from './overallCounts.aggregation';

const bucketService = Object.freeze({
  async getOverallCounts() {
    return CurrentTaskModel.aggregate(getOverallCountsAggregation());
  },

  async getBucketsByCriteria(criteria) {
    return CurrentTaskModel.aggregate(getBucketsByPriorityAggregation());
  }
});

export default bucketService;
