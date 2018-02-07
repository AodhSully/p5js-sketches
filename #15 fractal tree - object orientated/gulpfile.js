var gulp = require('gulp'),
    browserSync = require('browser-sync');
    reload = browserSync.reload;

gulp.task('start', function() {
  browserSync({
    notify: true,
    port: 9000,
    server: {
      baseDir: ['.'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    './*.html',
    './src/*.js'
  ]).on('change', reload);
});
