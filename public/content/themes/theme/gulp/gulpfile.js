var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'), // Lade Concat - Dateien zusammenführen
    cssnano = require('gulp-cssnano'), // Lade cssnano (minify css)
    plumber = require('gulp-plumber'), // Lade Browser-Prefixer
    include = require("gulp-include"),
    beautify = require('gulp-cssbeautify'), // CSS Beautify
    autoprefixer = require('gulp-autoprefixer'),
    gcmq = require('gulp-group-css-media-queries'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');// Leerzeichen entfernen (JS)
    watch = require('gulp-watch');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');


var config = {
    styleSource: '../src/scss/main.scss',
    jsSource: '../src/js/',
    jsFilename: 'main'
};

gulp.task('styles-minified', function() {
    return gulp.src(config.styleSource) // Lade die Datei style.less
        .pipe(sourcemaps.init()) // init sourcemap
        .pipe(sass()) // Compile
        .pipe(autoprefixer()) // Autoprefix
        .pipe(gcmq()) // group media queries
        .pipe(concat('style.min.css')) // füge alle Style-Dateien in einer style.min.css zusammen
        .pipe(cssnano({
            zindex: false
        })) // Leerzeichen entfernen
        .pipe(plumber.stop()) // Keep Gulp running
        .pipe(sourcemaps.write('/maps')) // create sourcemap
        .pipe(gulp.dest('../dist/css/')) // Speichere Minifizierte CSS Datei in css-Ordner
});

gulp.task('scripts', function(done){
    browserify({
        entries: [config.jsSource + config.jsFilename + '.js'],
        debug: true
    })
        .bundle()
        .pipe(source(config.jsFilename + '.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(sourcemaps.init()) // init sourcemap
        .pipe(plumber())  // Check for errors
        .pipe(include({
            extensions: "js",
            hardFail: true
        }))
        .pipe(uglify())  // Leerzeichen entfernen
        .pipe(concat('scripts.min.js')) // füge alle JS-Dateien in einer scripts.min.js zusammen
        .pipe(plumber.stop()) // Keep Gulp running
        .pipe(sourcemaps.write('/maps/')) // create sourcemap
        .pipe(gulp.dest('../dist/js/')); // Speicherort
    done();
});

gulp.task('watch', function() {
    gulp.watch('../src/**/*.scss', gulp.series('styles-minified'));
    gulp.watch('../src/**/*.js', gulp.series('scripts'));
});