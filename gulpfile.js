/**
 * Created by gpl on 15/12/16.
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');

// TODO: use tsconfig.json to build src and test
var srcProject = ts.createProject('src/tsconfig.json');
var testProject = ts.createProject('test/tsconfig.json');

gulp.task('build-src', function () {
    var tsResult = srcProject.src() // instead of gulp.src(...)
        .pipe(ts(srcProject));

    return tsResult.js.pipe(gulp.dest('src'));
});

gulp.task('build-test', function () {
    var tsResult = testProject.src() // instead of gulp.src(...)
        .pipe(ts(testProject));

    return tsResult.js.pipe(gulp.dest('test'));
});