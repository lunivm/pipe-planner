import Task from '../models/task.model';

const bucketService = Object.freeze({
  async getOverallCounts() {
    return Task.aggregate([
      {
        $group: {
          _id: '$status',
          total: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'taskStatuses',
          localField: '_id',
          foreignField: '_id',
          as: 'status'
        }
      },
      { $unwind: '$status' },
      {
        $project: {
          _id: 0,
          total: 1,
          'status.name': 1,
          'status.sortValue': 1
        }
      },
      { $sort: { 'status.sortValue': 1 } },
      { $addFields: { status: '$status.name' } }
    ]);
  },

  async getBucketsByCriteria(criteria) {
    return Task.aggregate([
      {
        $group: {
          _id: '$priority',
          total: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'taskPriorities',
          localField: '_id',
          foreignField: '_id',
          as: 'priority'
        }
      },
      { $unwind: '$priority' },
      {
        $project: {
          _id: 0,
          total: 1,
          'priority.name': 1,
          'priority.sortValue': 1
        }
      },
      { $sort: { 'priority.sortValue': 1 } },
      { $addFields: { priority: '$priority.name' } }
    ]);
  }
});

export default bucketService;
