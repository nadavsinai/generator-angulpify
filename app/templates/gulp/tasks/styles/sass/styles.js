'use strict';

var gulp = require('gulp');
var rev = require('gulp-rev');
var gulpif = require('gulp-if');
var csso = require('gulp-csso');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var env = require('../utilities').env;
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var config = require('../config').styles;

gulp.task('styles', function () {

  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(gulpif(env.isDev(), sourcemaps.init()))
    .pipe(sass())
    .on('error', function (error) {
      gutil.log(gutil.colors.red(error.message));
    })
    .pipe(rename({basename: config.basename}))
    .pipe(gulpif(env.isProd(), rev()))
    .pipe(gulpif(env.isProd(), rename({suffix: '.min'})))
    .pipe(gulpif(env.isProd(), csso()))
    .pipe(autoprefixer({skipApplySourceMap: true}))
    .pipe(gulpif(env.isDev(), sourcemaps.write('./')))
    .pipe(gulp.dest(config.dest));
});
