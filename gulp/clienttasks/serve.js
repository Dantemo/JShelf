'use strict';

var gulp = require('gulp');
var config = require('../config');
var nodeStatic = require('node-static');

module.exports = gulp.task('serve', function (next) {
  var staticServerPath = config.folder.build;
  if (release){
    staticServerPath = config.folder.release;
  }

  var file = new nodeStatic.Server(staticServerPath);

  require('http').createServer(function (request, response) {
    request.addListener('end', function () {
      file.serve(request, response);
    }).resume();
  }).listen(config.ports.staticServer);
});
