export default function getOverallCountsAggregation() {
  return [
    {
      $group: {
        _id: '$status',
        total: {
          $sum: 1
        }
      }
    }, {
      $lookup: {
        from: 'taskStatuses',
        localField: '_id',
        foreignField: '_id',
        as: 'status'
      }
    }, {
      $unwind: '$status'
    }, {
      $project: {
        _id: 0,
        total: 1,
        'status.name': 1,
        'status.sortValue': 1
      }
    }, {
      $sort: {
        'status.sortValue': 1
      }
    }, {
      $addFields: {
        status: '$status.name',
        priority: '$status.sortValue'
      }
    }
  ];
};
