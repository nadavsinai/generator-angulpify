/*global describe, beforeEach, it */
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angulpify: default features (javascript/css/html)', function () {

  // not testing the actual run of generators yet
  it('the generator can be required without throwing', function () {
    this.app = require('../app');
  });

  var promptOptions = {
    project: 'angulpify',
    styles: 'css',
    templates: 'html'
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

  it('creates expected style files', function () {
    var expected = [
      'src/styles/layout.css',
      'src/styles/main.css'
    ];

    assert.file(expected);

  });

  it('creates expected template files', function () {
    var expected = [
      'src/scripts/index.html',
      'src/scripts/app/layout/layout.html',
      'src/scripts/app/welcome/welcome.html'
    ];

    assert.file(expected);
  });

});
