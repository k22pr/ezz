var gulp = require("gulp");
var scss = require("gulp-sass");

gulp.task("scss", function () {
  return new Promise((resolve) => {
    gulp
      .src("./styles/index.scss")
      .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
      .pipe(gulp.dest("./styles"));
    resolve();
  });
});

gulp.task("watch", function () {
  gulp.watch("./styles/*.scss", gulp.series("scss"));
  gulp.watch("./styles/module/*.scss", gulp.series("scss"));
  gulp.watch("./styles/shared/*.scss", gulp.series("scss"));
});
