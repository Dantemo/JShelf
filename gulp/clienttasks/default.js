/** Created by CUIJA on 2015-11-16.*/
'use strict';
var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function () {
  if (release) {
    runSequence(
      'clean',
      ['index', 'styles', 'fonts', 'assets', 'templates'],
      ['webpack'],
      'minify',
      'serve'
    );
  }
  else {
    runSequence(
      'clean',
      ['index', 'styles', 'fonts', 'assets', 'templates'],
      ['watchify', 'livereload'],
      'serve'
    );
  }
});
