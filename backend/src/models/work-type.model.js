import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const WorkTypeModel = mongoose.model('WorkTypeModel', schema, 'workTypes');

export default WorkTypeModel;
