'use strict'

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin');

sass.compiler = require('node-sass');

gulp.task('sass', async function() {
  return gulp.src('./css/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./css'));
})

gulp.task('sass:watch', async function() {
  gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('browser-sync', async function() {
  var files = ['./*.html', './css/*.css', './img/*.{png, jpg, gif}', './js/*.js'];
  browserSync.init(files, {
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', gulp.parallel('browser-sync'), async function() {
  gulp.start('sass:watch');
});

gulp.task('clean', async function() {
  return del(['dist']);
});

gulp.task('copyfonts', async function() {
  gulp.src('./node_modules/open-iconic/font/fonts/*.{ttf,woff,eof,svg,eot,otf}*')
  .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('imagemin', async function() {
  return gulp.src('./img/*.{png,jpg,jpeg,gif}')
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('usemin', async function() {
  return gulp.src('./*.html')
    .pipe(flatmap(function(stream, file) {
      return stream
        .pipe(usemin({
          css: [rev()],
          html: [function() { return htmlmin({collapseWhitespace: true})}],
          js: [uglify(), rev()],
          inlinejs: [uglify()],
          inlinecss: [cleanCss(), 'concat']
        }));
    }))
    .pipe(gulp.dest('dist/'));
});

/*gulp.task('build', gulp.parallel('clean'), async function() {
  gulp.start('copyfonts', 'imagemin', 'usemin');
});*/

gulp.task('build',gulp.parallel('clean','copyfonts','imagemin','usemin'))
