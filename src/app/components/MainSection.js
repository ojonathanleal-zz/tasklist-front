var visibilityFilters = require('../constants/VisibilityFilters');

module.exports = {
  template: require('./MainSection.html'),
  controller: MainSection,
  bindings: {
    tasklist: '=',
    filter: '<'
  }
};

/** @ngInject */
function MainSection(taskService) {
  this.taskService = taskService;
  this.selectedFilter = visibilityFilters[this.filter];
  this.completeReducer = function (count, task) {
    return task.completed ? count + 1 : count;
  };
}

MainSection.prototype = {
  handleClearCompleted: function () {
    this.tasklist = this.taskService.clearCompleted(this.tasklist);
  },

  handleCompleteAll: function () {
    this.tasklist = this.taskService.completeAll(this.tasklist);
  },

  handleShow: function (filter) {
    this.filter = filter;
    this.selectedFilter = visibilityFilters[filter];
  },

  handleChange: function (id) {
    this.tasklist = this.taskService.completeTask(id, this.tasklist);
  },

  handleSave: function (e) {
    if (e.text.length === 0) {
      this.tasklist = this.taskService.deleteTask(e.id, this.tasklist);
    } else {
      this.tasklist = this.taskService.editTask(e.id, e.text, this.tasklist);
    }
  },

  handleDestroy: function (e) {
    this.tasklist = this.taskService.deleteTask(e, this.tasklist);
  }
};
