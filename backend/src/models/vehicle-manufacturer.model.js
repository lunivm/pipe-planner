import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const VehicleManufacturer = mongoose.model('VehicleManufacturer', schema, 'vehicleManufacturers');

export default VehicleManufacturer;
