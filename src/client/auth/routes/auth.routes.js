/** Created by CUIJA on 2015-11-17.*/
'use strict';
function authRoutes($stateProvider){
  $stateProvider
    .state('auth', {
      url: '/#/register',
      templateUrl: 'auth/views/auth.register.html'
    })
  ;
}
module.exports = authRoutes;