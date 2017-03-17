var angular = require('angular');
require('todomvc-app-css/index.css');
require('angular-ui-router');

var task = require('./app/task/task');
var App = require('./app/containers/App');
var Header = require('./app/components/Header');
var MainSection = require('./app/components/MainSection');
var TaskTextInput = require('./app/components/TaskTextInput');
var TaskItem = require('./app/components/TaskItem');
var Footer = require('./app/components/Footer');
var routesConfig = require('./routes');

import './index.css';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('taskService', task.TaskService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('taskTextInput', TaskTextInput)
  .component('taskItem', TaskItem);
