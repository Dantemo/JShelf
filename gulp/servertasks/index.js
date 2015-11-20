/** Created by Aquariuslt on 2015-11-20.*/
'use strict';
var gulp = require('gulp');
var argv = require('yargs').argv;
var runSequence = require('run-sequence');
require('../clienttasks/index');
require('../clienttasks/assets');
require('../clienttasks/browserify');
require('../clienttasks/clean');
require('../clienttasks/images');
require('../clienttasks/minify');
require('../clienttasks/styles');
require('../clienttasks/templates');
require('../clienttasks/watch');
require('../clienttasks/watchify');
require('./server');

global.release = argv.release;

function start(){
  if (release) {
    runSequence(
      'clean',
      ['index', 'styles', 'images', 'assets', 'templates'],
      'browserify',
      'minify',
      'server'
    );
  }
  else {
    runSequence(
      'clean',
      ['index', 'styles', 'images', 'assets', 'templates'],
      ['watchify', 'watch'],
      'server'
    );
  }
}

module.exports.start = start;