/** Created by CUIJA on 2015-11-16.*/
'use strict';


var headerController = require('./controllers/header.controller');
var homeController = require('./controllers/home.controller');
var homeRoutes = require('./routes/home.routes');
var templateCache = require('../../../dist/tmp/templates');

module.exports = angular.module('home',[
  'ngAnimate',
  'ngResource',
  'ui.bootstrap',
  'ui.router',
  homeRoutes.name,
  headerController.name,
  homeController.name,
  templateCache.name
])



;