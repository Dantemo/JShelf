/** Created by CUIJA on 2015-11-16.*/
'use strict';

var homeRoutes = require('./routes/home.routes');

var headerController = require('./controllers/header.controller');
var homeController = require('./controllers/home.controller');

var templateCache = require('../../../dist/tmp/templates');

module.exports = angular.module('home',[
  'ngAnimate',
  'ngResource',
  'ui.bootstrap',
  'ui.router',
  require(homeRoutes.name),
  require(headerController.name),
  require(homeController.name),
  require(templateCache.name)
]);