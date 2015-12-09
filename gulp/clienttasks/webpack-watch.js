/** Created by Jason Cui on 2015-12-09.*/
'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');


gulp.task('webpack-watch', function () {
  console.log('[webpack-watch] is watching file');
  var scriptWatcher = gulp.watch(config.paths.src.scripts, ['webpack']);
  var indexHtmlWatcher = gulp.watch(config.paths.src.index, ['index']);
  var templateHtmlWatcher = gulp.watch([config.paths.src.templates, config.paths.src.templatesHTML], ['templates','webpack']);
  var cssWatcher = gulp.watch(config.paths.src.stylesGlob, ['styles']);

  function reloadEvent(event){
    console.log('File:'+event.path+' has bean changed.Reloading..');
  }

  scriptWatcher.on('change',reloadEvent);
  indexHtmlWatcher.on('change',reloadEvent);
  templateHtmlWatcher.on('change',reloadEvent);
  cssWatcher.on('change',reloadEvent);

});