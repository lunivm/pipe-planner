import tasksController from '../controllers/tasks.controller';

export default function(server) {
  server.get('/tasks', tasksController.getCurrentTasks);
}
