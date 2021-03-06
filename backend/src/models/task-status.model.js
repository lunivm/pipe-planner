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

const TaskStatusModel = mongoose.model('TaskStatusModel', schema, 'taskStatuses');

export default TaskStatusModel;
