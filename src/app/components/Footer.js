var taskFilters = require('../constants/TaskFilters');

module.exports = {
  template: require('./Footer.html'),
  controller: Footer,
  bindings: {
    completedCount: '<',
    activeCount: '<',
    selectedFilter: '<filter',
    onClearCompleted: '&',
    onShow: '&'
  }
};

function Footer() {
  this.filters = [taskFilters.SHOW_ALL, taskFilters.SHOW_ACTIVE, taskFilters.SHOW_COMPLETED];
  this.filterTitles = {};
  this.filterTitles[taskFilters.SHOW_ALL] = 'Todas';
  this.filterTitles[taskFilters.SHOW_ACTIVE] = 'Ativas';
  this.filterTitles[taskFilters.SHOW_COMPLETED] = 'Completadas';
}

Footer.prototype = {
  handleClear: function () {
    this.onClearCompleted();
  },

  handleChange: function (filter) {
    this.onShow({filter: filter});
  }
};

