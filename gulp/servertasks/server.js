/** Created by CUIJA on 2015-11-16.*/
'use strict';
var gulp = require('gulp');
var config = require('../config');
var express = require('express');
var path = require('path');
var lodash = require('lodash');
var glob = require('glob');

function initModulesClientRoutes(app){
  var staticServerPath = config.folder.build;
  if (release) {
    staticServerPath = config.folder.release;
  }
  app.use('/',express.static(path.resolve('./'+staticServerPath)));

}

function initModulesServerRoutes(app){
  //hard code here for testing

  var serverRoutePath = [
    'src/server/!(home)/routes/*.js',
    'src/server/home/routes/*.js'
  ];

  var moduleServerRoutePath = getGlobalPaths(serverRoutePath);

  moduleServerRoutePath.forEach(function (routePath) {
    require(path.resolve(routePath))(app);
  });
}

function initModulesConfiguration(app){

}


function initExpress(){
  var app = express();
  initModulesClientRoutes(app);
  initModulesServerRoutes(app);
  initModulesConfiguration(app);
  return app;
}


function init(callback){
  var app = initExpress();
  if(callback){
    callback(app);
  }
}

function start(callback){
  init(function (app) {
    app.listen(config.ports.staticServer, function () {
      console.log("Listen Port:" + config.ports.staticServer);
      if (callback) {
        callback(app);
      }
    });
  });
  console.log("Server Start");
}


/* Get Server JS file Path */

function getGlobalPaths(globPatterns, excludes) {
  // URL paths regex
  var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

  // The output array
  var output = [];

  // If glob pattern is array then we use each pattern in a recursive way, otherwise we use glob
  if (lodash.isArray(globPatterns)) {
    globPatterns.forEach(function (globPattern) {
      output = lodash.union(output, getGlobalPaths(globPattern, excludes));
    });
  }
  else if (lodash.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      output.push(globPatterns);
    }
    else {
      var files = glob.sync(globPatterns);
      if (excludes) {
        files = files.map(function (file) {
          if (lodash.isArray(excludes)) {
            for (var i in excludes) {
              file = file.replace(excludes[i], '');
            }
          }
          else {
            file = file.replace(excludes, '');
          }
          return file;
        });
      }
      output = lodash.union(output, files);
    }
  }

  return output;
}


module.exports = gulp.task('server', function (next) {
  var server = start();
});



