var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');


// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: './'
        }
    })
})

// Watchers
gulp.task('watch', function () {
    gulp.watch('*.css', browserSync.reload)
    gulp.watch('*.html', browserSync.reload);})

gulp.task('default', function (callback) {
    runSequence(['browserSync'], 'watch',
        callback
    )
});
