module.exports = {
  template: require('./TaskTextInput.html'),
  controller: TaskTextInput,
  bindings: {
    onSave: '&',
    placeholder: '@',
    newTask: '@',
    editing: '@',
    text: '<'
  }
};

/** @ngInject */
function TaskTextInput(taskService, $window, $timeout) {
  this.$timeout = $timeout;
  this.$window = $window;
  this.taskService = taskService;
  this.editing = this.editing || false;
  this.text = this.text || '';
  if (this.text.length) {
    this.focus();
  }
}

TaskTextInput.prototype = {
  handleBlur: function () {
    if (!this.newTask) {
      this.onSave({text: this.text});
    }
  },

  handleSubmit: function (e) {
    if (e.keyCode === 13) {
      this.onSave({text: this.text});
      if (this.newTask) {
        this.text = '';
      }
    }
  },

  focus: function () {
    this.$timeout(function () {
      var element = this.$window.document.querySelector('.editing .textInput');
      if (element) {
        element.focus();
      }
    }, 0);
  }
};
