const gulp = require("gulp");
const clean = require("gulp-clean");

const DEST_DIR = "dist";
const DEST_APP_DIR = "dist/app";
const DEST_UI_DIR = "dist/ui";

const CLEAN_TASKS = [
    "clean_app",
    "clean_ui"
];

gulp.task("clean_app", () => {
    return gulp.src(DEST_APP_DIR, { read: false })
        .pipe(clean());
});

gulp.task("clean_ui", () => {
    return gulp.src(DEST_UI_DIR, { read: false })
        .pipe(clean());
});


gulp.task("clean", () => {
    return gulp.src(DEST_DIR, { read: false })
        .pipe(clean());
});

module.exports = "clean";