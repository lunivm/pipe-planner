export default function getBucketsByPriorityAggregation() {
  return [
    {
      $group: {
        _id: {status: '$status', priority: '$priority'},
        total: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: 'taskPriorities',
        localField: '_id.priority',
        foreignField: '_id',
        as: 'priority'
      }
    },
    {
      $lookup: {
        from: 'taskStatuses',
        localField: '_id.status',
        foreignField: '_id',
        as: 'status'
      }
    },
    { $unwind: '$priority' },
    { $unwind: '$status' },
    { $sort: {'status.sortValue': 1 } },
    {
      $addFields: {
        priority: '$priority.name',
        sortValue: '$priority.sortValue',
        status: '$status.name'
      }
    },
    {
      $group: {
        _id: '$priority',
        total: { $sum: '$total' },
        items: { $push: { label: '$status', total: '$total' } },
        sortValue: { $first: '$sortValue' }
      }
    },
    { $sort: { 'sortValue': 1 } },
    { $addFields: { label: '$_id' }},
    { $project: { _id: 0, sortValue: 0 }}
  ];
}
