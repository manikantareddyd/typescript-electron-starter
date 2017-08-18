const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");

const UI_FILES = [
    "src/ui/*.json", "src/ui/**/*.json",
    "src/ui/*.js", "src/ui/**/*.js",
    "src/ui/*.css", "src/ui/**/*.css",
    "src/ui/*.html", "src/ui/**/*.html",
    "!src/ui/tsconfig.json"
];

const UI_SRC_DIR = "src/ui";
const UI_DEST_DIR = "dist/ui";
const UI_TS_CONFIG = "./src/ui/tsconfig.json";
const UI_SOURCEMAP_ROOT = "../../src/ui"; // This is with resepect to UI_DEST_DIR

const UI_TASKS = [
    "build_ui",
    "move_ui_data"
];

const uiTsProject = ts.createProject(UI_TS_CONFIG);


gulp.task("move_ui_data", () => {
    return gulp.src(UI_FILES)
        .pipe(gulp.dest(UI_DEST_DIR));
});


gulp.task("build_ui", ["move_ui_data"], () => {
    return uiTsProject.src()
        .pipe(sourcemaps.init())
        .pipe(uiTsProject())
        .js
        .pipe(sourcemaps.write(".", { includeContent: true, sourceRoot: UI_SOURCEMAP_ROOT }))
        .pipe(gulp.dest(UI_DEST_DIR));
});

gulp.task("ui", ["build_ui"]);
module.exports = "ui";