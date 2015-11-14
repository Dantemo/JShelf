'use strict';

module.exports =
  angular.module('snackbar.common.filters', [])
    .filter('fooFilter', require('./fooFilter'));
