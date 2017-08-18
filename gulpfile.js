const gulp = require("gulp");
const apptask = require("./gulp-tasks/app");
const uitask = require("./gulp-tasks/ui");
const cleantask = require("./gulp-tasks/clean");

const APP_FILES = "src/app/**/*.*";
const UI_FILES = "src/ui/**/*.*";

const TASKS = [
    apptask,
    uitask
];

gulp.task("default", TASKS);

gulp.task("watch", TASKS, function () {
    gulp.watch(APP_FILES, [apptask]);
    gulp.watch(UI_FILES, [uitask]);
});
