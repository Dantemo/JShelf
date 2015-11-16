'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var config = require('../config');

module.exports = gulp.task('assets', function () {
  return gulp.src(config.paths.src.assets)
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.assets), gulp.dest(config.paths.dest.build.assets)));
});
