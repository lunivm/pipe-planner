import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const VehicleSectionModel = mongoose.model('VehicleSectionModel', schema, 'vehicleSections');

export default VehicleSectionModel;
