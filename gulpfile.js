var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function () {
    return gulp.src('src/index.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: "system",
            target: "es6",
            noImplicitAny: true,
            outFile: "bundle.js"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['build']);