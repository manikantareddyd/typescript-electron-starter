const gulp = require("gulp");
const clean = require("gulp-clean");

const DEST_DIR = "dist";
const DEST_APP_DIR = "dist/app";

const CLEAN_TASKS = [
    "clean_app",
];

gulp.task("clean_app", () => {
    return gulp.src(DEST_APP_DIR, { read: false })
        .pipe(clean());
});


gulp.task("clean", () => {
    return gulp.src(DEST_DIR, { read: false })
        .pipe(clean());
});

module.exports = "clean";