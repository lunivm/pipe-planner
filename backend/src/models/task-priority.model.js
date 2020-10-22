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

const TaskPriorityModel = mongoose.model('TaskPriorityModel', schema, 'taskPriorities');

export default TaskPriorityModel;
