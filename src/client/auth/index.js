/** Created by CUIJA on 2015-11-17.*/
'use strict';

var template = require('../../../dist/tmp/templates');
var home = require('../home');
var registerController = require('./controllers/auth.register.controller');
var loginController = require('./controllers/auth.login.controller');
module.exports = angular.module('home')
  .controller('RegisterController',registerController)
  .controller('LoginController',loginController)
;
