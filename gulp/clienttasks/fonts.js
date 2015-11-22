/** Created by Aquariuslt on 2015-11-22.*/
/*package bootstrap-theme resources*/
'use strict';
var gulp = require('gulp');
var gulpif = require('gulp-if');
var config = require('../config');

module.exports = gulp.task('fonts',function(){
  return gulp.src(config.paths.src.fonts)
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.fonts), gulp.dest(config.paths.dest.build.fonts)));
});