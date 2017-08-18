const gulp = require("gulp");
const apptask = require("./gulp-tasks/app");
const cleantask = require("./gulp-tasks/clean");

const APP_FILES = "src/app/**/*.*";

const TASKS = [
    apptask,
];

gulp.task("default", TASKS);

gulp.task("watch", TASKS, function () {
    gulp.watch(APP_FILES, [apptask]);
});
