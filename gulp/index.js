/** Created by CUIJA on 2015-11-16.*/
'use strict';
var fs = require('fs');
var argv = require('yargs').argv;
var tasks = fs.readdirSync('./gulp/clienttasks/');
var config = require('./config');

global.release = argv.release;

tasks.forEach(function (task) {
  require('./clienttasks/' + task);
});
