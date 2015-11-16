/** Created by Aquariuslt on 2015-11-16.*/
'use strict';

function homeRoute(app){
    var homeController =require('../controllers/home.controller');
    app.route('/api/hello').get(homeController.hello);
}

module.exports = homeRoute;