import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const VehicleManufacturerModel = mongoose.model('VehicleManufacturerModel', schema, 'vehicleManufacturers');

export default VehicleManufacturerModel;
