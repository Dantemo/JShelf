/** Created by Aquariuslt on 2015-11-17.*/
'use strict';

function homeRoutes($stateProvider) {
  // Home state routing
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'home/views/home.index.html'
    })
  ;
}

module.exports = homeRoutes;