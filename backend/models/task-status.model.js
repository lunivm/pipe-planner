import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const TaskStatus = mongoose.model('TaskStatus', schema, 'taskStatuses');

export default TaskStatus;
