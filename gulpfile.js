var gulp = require('gulp');
var gulp_browserify = require('gulp-browserify');

gulp.task('watch', function() {
  gulp.watch('./index.js').on('change', browserify);
});

gulp.task('deploy', function() {
    return browserify();
});

function browserify() {
    console.log('browserify');
    return gulp.src('./index.js')
        .pipe(gulp_browserify())
        .pipe(gulp.dest('dist'));
}
