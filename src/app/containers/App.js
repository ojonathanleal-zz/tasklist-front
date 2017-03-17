var taskFilters = require('../constants/TaskFilters');

module.exports = {
  template: require('./App.html'),
  controller: App
};

function App() {
  this.tasklist = [];
  this.filter = taskFilters.SHOW_ALL;
}
