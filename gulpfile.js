const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const watch = require('gulp-watch');
//var uglify = require('gulp-uglify');

watch(['./app/*.js'], () => {
  console.log("[exoplanetjs] App has been modified; re-compiling.");
  gulp.start('default');
});

gulp.task('default', () => {
  return browserify('./app/app.js')
    .transform("babelify", {presets: ["es2015"] })
    .bundle()
    .pipe(source('exoplanet.js'))
    .pipe(gulp.dest('./dist/'))
});
