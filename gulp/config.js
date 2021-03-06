'use strict';
var config = {
  folder: {
    src: 'src',
    build: 'dist/build',
    release: 'dist/release',
    tmp: 'dist/tmp',
    assets: 'node_modules/bootstrap/dist/css',
    fonts : 'node_modules/bootstrap/dist/fonts'
  }
};


module.exports = {
  folder: {
    src: config.folder.src,
    build: config.folder.build,
    release: config.folder.release,
    tmp: config.folder.tmp,
    assets: config.folder.assets
  },
  paths: {
    src: {
      index: config.folder.src + '/client/index.html',
      assets: [
        config.folder.src + '/client/*/assets/**/*',
        '!' + config.folder.src + '/client/*/assets/images/*'
      ],
      images: config.folder.src + '/client/*/assets/images/*',
      scripts: config.folder.src + '/client/**/*.js',
      styles: [
        config.folder.assets + '/bootstrap.css',
        config.folder.assets + '/bootstrap-theme.css',
        config.folder.src + '/client/*/styles/*.css'
      ],
      fonts:[
        config.folder.fonts + '/*.eot',
        config.folder.fonts + '/*.svg',
        config.folder.fonts + '/*.ttf',
        config.folder.fonts + '/*.woff',
        config.folder.fonts + '/*.woff2'

      ],
      stylesGlob: config.folder.src + '/client/*/styles/*.css',
      templates: config.folder.src + '/client/*/*.html',
      templatesHTML: config.folder.src + '/client/**/*.html',
      templatesCompiled: config.folder.tmp,
      livereload: [config.folder.build + '/**/*', '!' + config.folder.build + '/client/*/assets/**/*'],
      modules:config.folder.src + '/client/index.js'
    },
    dest: {
      build: {
        styles: config.folder.build,
        scripts: config.folder.build,
        fonts:  config.folder.build + '/fonts',
        images: config.folder.build + '/assets/images',
        assets: config.folder.build + '/assets',
        index: config.folder.build,
        server: config.folder.build
      },
      release: {
        styles: config.folder.release,
        scripts: config.folder.release,
        fonts:  config.folder.release + '/fonts',
        images: config.folder.release + '/assets/images',
        assets: config.folder.release + '/assets',
        index: config.folder.release,
        server: config.folder.release
      }
    }
  },
  filenames: {
    build: {
      styles: 'bundle.css',
      scripts: 'bundle.js'
    },
    release: {
      styles: 'bundle.min.css',
      scripts: 'bundle.min.js'
    },
    templates: {
      compiled: 'templates.js',
      angular: {
        moduleName: 'app.templates',
        prefix: '',
        stripPrefix: 'app/'
      }
    }
  },


  ports: {
    staticServer: 8080,
    livereloadServer: 35729
  }
};

