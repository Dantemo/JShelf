/** Created by Aquariuslt on 2015-11-17.*/
'use strict';

function homeRoutes($stateProvider) {
  // Home state routing
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'home/views/home.index.html'
    })
    .state('register',{
      url:'/register',
      templateUrl: 'auth/views/auth.register.html'
    })
    .state('login',{
      url:'/login',
      templateUrl: 'auth/views/auth.login.html'
    })
  ;
}

module.exports = homeRoutes;