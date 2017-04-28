"use strict";

let gulp = require("gulp");
let jshint = require("gulp-jshint");

// noinspection JSUnresolvedFunction
gulp.task("validate", () => {
    // noinspection JSUnresolvedFunction
    return gulp.src(["examples/**/*.js", "lib/**/*.js", "test/**/*.js", "index.js"])
               .pipe(jshint())
               .pipe(jshint.reporter("jshint-stylish"));
});
