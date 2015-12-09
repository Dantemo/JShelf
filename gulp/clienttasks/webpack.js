/** Created by Jason Cui on 2015-12-08.*/

var gulp = require('gulp');
var webpack = require('webpack');
var config = require('../config');

var webpackDevOptions={
  entry:'./'+config.paths.src.modules,
  output:{
    path:config.paths.dest.build.scripts,
    filename:config.filenames.build.scripts
  }
};

var webpackRelOptions={
  entry:'./'+config.paths.src.modules,
  output:{
    path:config.paths.dest.release.scripts,
    filename:config.filenames.release.scripts
  }
};


gulp.task('webpack',function(callback){
  if(release){
    webpack(webpackRelOptions,function(error,status){
      if(error){
        console.log(error);
      }
      console.log('[webpack]',status.toString({}));
      callback();
    });
  }
  else{
    webpack(webpackDevOptions,function(error,status){
      if(error){
        console.log(error);
      }
      console.log('[webpack]',status.toString({}));
      callback();
    });
  }
});