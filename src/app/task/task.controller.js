require('es6-shim');

function TaskService() {
}

TaskService.prototype = {
  addTask: function (text, tasklist) {
    return [
      {
        completed: false,
        text: text
      }
    ].concat(tasklist);
  },

  completeTask: function (id, tasklist) {
    return tasklist.map(function (task) {
      return task.id === id ?
        Object.assign({}, task, {completed: !task.completed}) : task;
    });
  },

  deleteTask: function (id, tasklist) {
    return tasklist.filter(function (task) {
      return task.id !== id;
    });
  },

  editTask: function (id, text, tasklist) {
    return tasklist.map(function (task) {
      return task.id === id ?
        Object.assign({}, task, {text: text}) : task;
    });
  },

  completeAll: function (tasklist) {
    var areAllMarked = tasklist.every(function (task) {
      return task.completed;
    });
    return tasklist.map(function (task) {
      return Object.assign({}, task, {completed: !areAllMarked});
    });
  },

  clearCompleted: function (tasklist) {
    return tasklist.filter(function (task) {
      return task.completed === false;
    });
  }
};

module.exports = {
  TaskService: TaskService
};

