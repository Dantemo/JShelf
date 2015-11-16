'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');
var livereload = require('gulp-livereload');
var livereloadServer = livereload([
  {start:true},
  config.ports.livereloadServer
]);

module.exports = gulp.task('watch', function () {
  gulp.watch(config.paths.src.livereload).on('change', function (file) {
    //livereloadServer.watch(file.path);
    livereload(file.path);
  });

  console.log("Load Config in Task Watch:");
  console.log("script:" + config.paths.src.scripts);
  console.log("index:" + config.paths.src.index);
  console.log("templates:" + config.paths.src.templates);
  console.log("templatesHTML:" + config.paths.src.templatesHTML);
  console.log("stylesGlob:" + config.paths.src.stylesGlob);


  watch({glob: [config.paths.src.scripts]}, ['lint']);
  watch({glob: [config.paths.src.index]}, ['index']);
  watch({glob: [config.paths.src.templates, config.paths.src.templatesHTML]}, ['templates']);
  watch({glob: [config.paths.src.stylesGlob]}, ['styles']);

});



