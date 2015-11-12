'use strict';

module.exports =
  angular.module('snackbar.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
