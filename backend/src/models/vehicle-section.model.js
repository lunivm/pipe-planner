import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const VehicleSection = mongoose.model('VehicleSection', schema, 'vehicleSections');

export default VehicleSection;
