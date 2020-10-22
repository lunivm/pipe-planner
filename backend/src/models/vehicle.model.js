import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  vin: {
    type: String,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true
  },
  vehicleManufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VehicleManufacturer',
    required: true
  },
  vehicleType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VehicleType',
    required: true
  }
});

const VehicleModel = mongoose.model('VehicleModel', schema, 'vehicles');


export default VehicleModel;
