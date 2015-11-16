'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rimraf = require('gulp-rimraf');
var config = require('../config');

module.exports = gulp.task('clean', function () {
  return gulpif(release, gulp.src(config.folder.release, {read: false}), gulp.src(config.folder.release, {read: false}))
    .pipe(rimraf());
});
