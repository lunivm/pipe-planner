import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const VehicleType = mongoose.model('VehicleType', schema, 'vehicleTypes');

export default VehicleType;
