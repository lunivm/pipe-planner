import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const VehicleTypeModel = mongoose.model('VehicleTypeModel', schema, 'vehicleTypes');

export default VehicleTypeModel;
