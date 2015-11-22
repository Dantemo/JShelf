/** Created by CUIJA on 2015-11-17.*/
'use strict';

var template = require('../../../dist/tmp/templates');
var home = require('../home');
var registerController = require('./controllers/auth.register.controller');

//module.exports = angular.module('auth',[
//  'ngAnimate',
//  'ngResource',
//  'ui.bootstrap',
//  'ui.router',
//  template.name
//]).config(authRoute);

module.exports = angular.module('home')
  .controller('RegisterController',registerController)
;