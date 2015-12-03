'use strict';

var Browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var config = require('../config');

module.exports = gulp.task('browserify', function () {
  var bundler = new Browserify({
    entries: [config.paths.src.modules],
    cache:{}
  });

  return bundler.bundle()
    .pipe(source(config.filenames.release.scripts))
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
