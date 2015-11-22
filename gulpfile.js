var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
//var babel = require("babel-core");
var es6transpiler = require('gulp-es6-transpiler');


// listen for ES6 changes only
// watch([settings.customJsFolder], function() {
//   gulp.start('transpiling-js-to-es6');
// });

watch(['app.js', 'conversions/*.js', 'factories/*.js', 'helpers/*.js', 'models/*.js'], function() {
  gulp.start('default');
});

gulp.task('default', function () {

  gulp.start('transpiling-es6-to-es5');
  //gulp.start('uglify');

  return gulp.src('gulp_scratch/exoplanet.js')
    .pipe(concat('exoplanet.js'))
    //.pipe(uglify()) - no need to minify except for production/dist
    .pipe(gulp.dest('dist/'));
});

gulp.task('transpiling-es6-to-es5', function() {
  // old ['app.js', 'conversions/*.js', 'factories/*.js', 'helpers/*.js', 'models/*.js']
   //var babel.transformFileSync('app.js', options).code;

   return gulp.src('exoplanet.js')
    .pipe(concat('exoplanet.js'))
    .pipe(es6transpiler())
    .pipe(gulp.dest('gulp_scratch/'));
});
gulp.task('uglify', function() {
  return gulp.src('gulp_scratch/exoplanet.js')
    .pipe(concat('exoplanet.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});
