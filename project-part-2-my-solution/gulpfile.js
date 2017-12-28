//require() tools
var gulp = require("gulp");
var browserSync = require("browser-sync").create();


//Development tasks
//-------------------

//BrowserSync
gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: ""
        }
    })
});

//and at each save inject new html, css, js into browser
gulp.task("watch", ["browserSync"], function () {
    gulp.watch("*.css", browserSync.reload);
    gulp.watch("*.html", browserSync.reload);
});
