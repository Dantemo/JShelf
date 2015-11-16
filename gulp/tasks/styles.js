'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config');



module.exports = gulp.task('styles', function () {
  console.log('Building CSS bundle');
  return gulp.src(config.paths.src.styles)
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulpif(release, csso(),csso()))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
