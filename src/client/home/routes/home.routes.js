/** Created by Aquariuslt on 2015-11-17.*/
'use strict';

module.exports =
  function homeRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'home/views/home.index.html'
      });
  }
;