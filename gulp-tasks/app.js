const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");

const APP_FILES = [
    "src/app/*.json", "src/app/**/*.json",
    "src/app/*.js", "src/app/**/*.js",
    "!src/app/tsconfig.json",
    "!src/app/constants/app.secrets_template.json"
];
const APP_SRC_DIR = "src/app";
const APP_DEST_DIR = "dist/app";
const APP_TS_CONFIG = "./src/app/tsconfig.json";
const APP_SOURCEMAP_ROOT = "../../src/app"; // This is with resepect to APP_DEST_DIR

const appTsProject = ts.createProject(APP_TS_CONFIG);

gulp.task("move_app_data", () => {
    return gulp.src(APP_FILES)
        .pipe(gulp.dest(APP_DEST_DIR));
});

gulp.task("build_app", ["move_app_data"], () => {
    return appTsProject.src()
        .pipe(sourcemaps.init())
        .pipe(appTsProject())
        .js
        .pipe(sourcemaps.write(".", { includeContent: true, sourceRoot: APP_SOURCEMAP_ROOT }))
        .pipe(gulp.dest(APP_DEST_DIR));
});

gulp.task("app", ["build_app"]);
module.exports = "app";