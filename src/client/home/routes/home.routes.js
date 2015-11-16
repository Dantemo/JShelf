/** Created by Aquariuslt on 2015-11-17.*/
'use strict';
module.exports=angular.module('home').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise(function ($injector) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/home.index.html'
      });
  }
]);