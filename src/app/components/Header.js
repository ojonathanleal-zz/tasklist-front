module.exports = {
  template: require('./Header.html'),
  controller: Header,
  bindings: {
    tasklist: '='
  }
};

/** @ngInject */
function Header(taskService) {
  this.taskService = taskService;
}

Header.prototype = {
  handleSave: function (text) {
    if (text.length !== 0) {
      this.tasklist = this.taskService.addTask(text, this.tasklist);
    }
  }
};
