﻿/// <binding AfterBuild='default' />
var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');

var config = {
    //Include all js files but exclude any min.js files
    src: ['node_modules/**/*.js']
}

//delete the output file(s)
gulp.task('clean', function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del(['./wwwroot/libs/all.js']);
});

// Combine and minify all files from the app folder
// This tasks depends on the clean task which means gulp will ensure that the 
// Clean task is completed before running the scripts task.
gulp.task('scripts', ['clean'], function () {

    return gulp.src(config.src)
      //.pipe(uglify()) if minification needed
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./wwwroot/libs/'));
});


gulp.task('default', ['scripts'], function (done) {

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));
});