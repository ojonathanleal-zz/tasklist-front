module.exports = {
  template: require('./TaskItem.html'),
  controller: TaskItem,
  bindings: {
    task: '<',
    onDestroy: '&',
    onChange: '&',
    onSave: '&'
  }
};

function TaskItem() {
  this.editing = false;
}

TaskItem.prototype = {
  handleDoubleClick: function () {
    this.editing = true;
  },

  handleSave: function (text) {
    this.onSave({
      task: {
        text: text,
        id: this.task.id
      }
    });
    this.editing = false;
  },

  handleDestroy: function (id) {
    this.onDestroy({id: id});
  }
};
