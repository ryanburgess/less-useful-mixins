var gulp        = require('gulp'),
  less          = require('gulp-less'),
  notify        = require('gulp-notify'),
  path          = require('path');

gulp.task('less', function () {
  return gulp.src('test.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'mixins') ]
    }))
    .pipe(gulp.dest('./build/css/'))
    .pipe(notify({ message: 'CSS complete' }));
});

gulp.task('watch', function() {f
  gulp.watch('**/*.less', ['less']);
});

gulp.task('default', ['watch']);
