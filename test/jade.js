/*global describe, beforeEach, it */
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angulpify: jade', function () {

  var promptOptions = {
    project: 'angulpify',
    styles: 'css',
    templates: 'jade'
  }

  var options = {
    'skip-install-message': true,
    'skip-install': true,
    'skip-welcome-message': true,
    'skip-message': true
  };

  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions(options)
      .withPrompt(promptOptions)
      .on('end', done);
  });


  it('creates expected config files', function () {

    var expected = [
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      '.yo-rc.json'
    ];

    assert.file(expected);
  });


  it('creates expected gulp files', function () {
    var expected = [
      'gulpfile.js',
      'gulp/config.js',
      'gulp/utilities.js',
      'gulp/tasks/assets.js',
      'gulp/tasks/browserify-app.js',
      'gulp/tasks/browserify-vendors.js',
      'gulp/tasks/clean.js',
      'gulp/tasks/default.js',
      // 'gulp/tasks/images.js',
      'gulp/tasks/index.js',
      'gulp/tasks/lint.js',
      //'gulp/tasks/minify.js',
      'gulp/tasks/serve.js',
      'gulp/tasks/styles.js',
      'gulp/tasks/templates.js',
      'gulp/tasks/watch.js',
      //'gulp/tasks/watchify.js'
    ];

    assert.file(expected);
  });

  it('creates expected script files', function () {
    var expected = [
      'src/scripts/app/app.config.js',
      'src/scripts/app/app.module.js',
      'src/scripts/app/vendors.js',
      'src/scripts/app/core/core.module.js',
      'src/scripts/app/layout/layout.config.js',
      'src/scripts/app/layout/layout.module.js',
      'src/scripts/app/welcome/welcome.config.js',
      'src/scripts/app/welcome/welcome.controller.js',
      'src/scripts/app/welcome/welcome.module.js'
    ];

    assert.file(expected);

  });


  it('creates expected template files', function () {
    var expected = [
      'src/scripts/index.jade',
      'src/scripts/app/layout/layout.jade',
      'src/scripts/app/welcome/welcome.jade'
    ];

    assert.file(expected);
  });

});
