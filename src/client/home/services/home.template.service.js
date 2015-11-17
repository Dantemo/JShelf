/** Created by CUIJA on 2015-11-17.*/
'use strict';

module.exports = function homeTemplateService($templateCache){
  console.log('Load Template');
  $templateCache.put('../views/home.index.html');
  $templateCache.put('../views/home.header.html');
};