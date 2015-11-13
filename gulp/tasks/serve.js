'use strict';

var gulp = require('gulp');

var nodeStatic = require('node-static');

module.exports = gulp.task('serve', function (next) {
  var staticServerPath = BUILD_FOLDER;
  if (release)
    staticServerPath = RELEASE_FOLDER;

  var file = new nodeStatic.Server(staticServerPath);

  require('http').createServer(function (request, response) {
    request.addListener('end', function () {
          file.serve(request, response);
      }).resume();
  }).listen(process.env.PORT || config.ports.staticServer);
});
