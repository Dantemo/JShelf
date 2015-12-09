/** Created by CUIJA on 2015-11-16.*/
'use strict';


var headerController = require('./controllers/header.controller');
var homeController = require('./controllers/home.controller');
var pictureSlideController = require('./controllers/picture.slide.controller');
var homeRoutes = require('./routes/home.routes');
var template = require('../../../dist/tmp/templates');
var angular = require('angular');

module.exports = angular.module('home',[
  'ngAnimate',
  'ngResource',
  'ui.bootstrap',
  'ui.router',
  template.name
]).config(homeRoutes)
  .controller('HomeController',homeController)
  .controller('HeaderController',headerController)
  .controller('PictureSlideController',pictureSlideController)
;