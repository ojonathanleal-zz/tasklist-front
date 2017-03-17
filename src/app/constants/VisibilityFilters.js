var taskFilters = require('./TaskFilters');

function showAll() {
  return true;
}

function showCompleted(task) {
  return task.completed;
}

function showActive(task) {
  return !task.completed;
}

var filters = {};
filters[taskFilters.SHOW_ALL] = {filter: showAll, type: taskFilters.SHOW_ALL};
filters[taskFilters.SHOW_COMPLETED] = {filter: showCompleted, type: taskFilters.SHOW_COMPLETED};
filters[taskFilters.SHOW_ACTIVE] = {filter: showActive, type: taskFilters.SHOW_ACTIVE};

module.exports = filters;
