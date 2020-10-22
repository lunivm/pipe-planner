import taskService from '../services/task';

const tasksController = Object.freeze({
  async getCurrentTasks(req, res, next) {
    const tasks = await taskService.getCurrentTasks();

    res.send(tasks);

    next();
  }
});

export default tasksController;
