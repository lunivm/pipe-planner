import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const WorkType = mongoose.model('WorkType', schema, 'workTypes');

export default WorkType;
