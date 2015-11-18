/** Created by CUIJA on 2015-11-17.*/
'use strict';

var authRoute = require('./routes/auth.routes');
var template = require('../../../dist/tmp/templates');

module.exports = angular.module('auth',[
  'ngAnimate',
  'ngResource',
  'ui.bootstrap',
  'ui.router',
  template.name
]).config(authRoute)

;