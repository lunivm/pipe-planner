import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const TaskPriority = mongoose.model('TaskPriority', schema, 'taskPriorities');

export default TaskPriority;
