export default function currentTasksAggregation() {
  return [
    {
      $lookup: {
        from: 'taskStatuses',
        localField: 'status',
        foreignField: '_id',
        as: 'status'
      }
    }, {
      $unwind: '$status'
    }, {
      $lookup: {
        from: 'taskPriorities',
        localField: 'priority',
        foreignField: '_id',
        as: 'priority'
      }
    }, {
      $unwind: '$priority'
    }, {
      $lookup: {
        from: 'vehicleSections',
        localField: 'injuredVehicleSections',
        foreignField: '_id',
        as: 'injuredVehicleSections'
      }
    }, {
      $lookup: {
        from: 'workTypes',
        localField: 'workTypes',
        foreignField: '_id',
        as: 'workTypes'
      }
    }, {
      $lookup: {
        from: 'vehicles',
        localField: 'vehicle',
        foreignField: '_id',
        as: 'vehicle'
      }
    }, {
      $unwind: '$vehicle'
    }, {
      $lookup: {
        from: 'vehicleManufacturers',
        localField: 'vehicle.vehicleManufacturer',
        foreignField: '_id',
        as: 'vehicle.vehicleManufacturer'
      }
    }, {
      $unwind: '$vehicle.vehicleManufacturer'
    }, {
      $lookup: {
        from: 'vehicleTypes',
        localField: 'vehicle.vehicleType',
        foreignField: '_id',
        as: 'vehicle.vehicleType'
      }
    }, {
      $unwind: '$vehicle.vehicleType'
    }, {
      $addFields: {
        id: '$_id',
        status: '$status.name',
        priority: '$priority.name',
        injuredVehicleSections: '$injuredVehicleSections.name',
        workTypes: '$workTypes.name',
        'vehicle.vehicleManufacturer': '$vehicle.vehicleManufacturer.name',
        'vehicle.vehicleType': '$vehicle.vehicleType.name'
      }
    }, {
      $project: {
        _id: 0,
        'vehicle._id': 0
      }
    }
  ];
}
