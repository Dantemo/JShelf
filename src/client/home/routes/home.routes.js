/** Created by Aquariuslt on 2015-11-17.*/
'use strict';

module.exports =
  function homeRoutes($stateProvider) {


    // Home state routing
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'home/views/home.register.html'
      })
    ;
  }
;