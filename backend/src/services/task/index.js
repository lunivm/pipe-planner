import CurrentTaskModel from '../../models/current-task.model';
import currentTasksAggregation from './currentTasks.aggregation';

const taskService = Object.freeze({
  async getCurrentTasks() {
    return CurrentTaskModel.aggregate(currentTasksAggregation());
  }
});

export default taskService;
