'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var config = require('../config');

module.exports = gulp.task('watchify', function () {
  var bundler = browserify({
    entries: [config.paths.src.modules],
    cache:{},
    plugin:[watchify]
  });
  console.log("=====Load From Entry====");

  bundler.on('update', rebundle);
  function rebundle() {
    console.log("Rebundle!");
    return bundler.bundle()
      .pipe(source(config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.build.scripts));
  }

  return rebundle();
});
