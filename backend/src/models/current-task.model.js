import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  priority: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaskPriority',
    required: true
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaskStatus',
    required: true
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  injuredVehicleSections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VehicleSection',
    required: true
  }],
  workTypes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkType',
    required: true
  }]
});

const CurrentTaskModel = mongoose.model('CurrentTaskModel', schema, 'currentTasks');

export default CurrentTaskModel;
