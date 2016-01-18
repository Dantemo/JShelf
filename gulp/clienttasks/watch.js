'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');
var livereload = require('gulp-livereload');

module.exports = gulp.task('livereload', function () {
  livereload.listen();
  gulp.watch(config.paths.src.livereload, function(file){
    livereload.changed(file.path);
  });

  watch({glob: [config.paths.src.scripts]},[]);
  watch({glob: [config.paths.src.index]}, ['index']);
  watch({glob: [config.paths.src.templates, config.paths.src.templatesHTML]}, ['templates']);
  watch({glob: [config.paths.src.stylesGlob]}, ['styles']);

});



