import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sortValue: {
    type: Number,
    required: true
  }
});

const TaskStatus = mongoose.model('TaskStatus', schema, 'taskStatuses');

export default TaskStatus;
