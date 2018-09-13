var gulp = require('gulp'), // Lade Gulp
  less = require('gulp-less'), // Lade LESS
  sass = require('gulp-sass'), // Lade SASS
  lessGlob = require('gulp-less-glob'), // global imports for LESS
  sassGlob = require('gulp-sass-glob'), // global imports for SASS
  livereload = require('gulp-livereload'), // Lade Livereload
  concat = require('gulp-concat'), // Lade Concat - Dateien zusammenführen
  cssnano = require('gulp-cssnano'), // Lade cssnano (minify css)
  plumber = require('gulp-plumber'), // Lade Browser-Prefixer
  uglify = require('gulp-uglify'), // Leerzeichen entfernen (JS)
  include = require("gulp-include"),
  autoprefixer = require('gulp-autoprefixer'),
  gcmq = require('gulp-group-css-media-queries'),
  sourcemaps = require('gulp-sourcemaps'),
  svgSprite = require("gulp-svg-sprites");

var dir = '../'; // Projekt angeben
var stylesheet = sass; // LESS ODER SASS
var stylesheetExt = 'scss'; // LESS ODER SCSS

if (stylesheet == less) {
  var glob = lessGlob;
} else if (stylesheet == sass) {
  var glob = sassGlob;
}

// Styles-Minifed-Task
gulp.task('styles-minified', function() {
  gulp.src(dir + 'src/' + stylesheetExt + '/main.' + stylesheetExt + '') // Lade die Datei style.less
    .pipe(glob()) // global import
    .pipe(sourcemaps.init()) // init sourcemap
    .pipe(plumber()) // Check for errors
    .pipe(stylesheet()) // Compile
    .pipe(autoprefixer()) // Autoprefix
    .pipe(gcmq()) // group media queries
    .pipe(concat('style.min.css')) // füge alle Style-Dateien in einer style.min.css zusammen
    .pipe(cssnano({
      zindex: false
    })) // Leerzeichen entfernen
    .pipe(plumber.stop()) // Keep Gulp running
    .pipe(sourcemaps.write('/maps')) // create sourcemap
    .pipe(gulp.dest(dir + '/dist/css')) // Zielordner für konvertierte LESS-Datei
    .pipe(livereload()); // Livereload
});

// Styles-Task
gulp.task('styles', function() {
  gulp.src(dir + 'src/' + stylesheetExt + '/main.' + stylesheetExt + '') // Lade die Datei style.less
    .pipe(glob()) // global import
    .pipe(plumber()) // Check for errors
    .pipe(stylesheet()) // Compile
    .pipe(autoprefixer()) // Autoprefix
    .pipe(gcmq()) // group media queries
    .pipe(concat('style.css')) // füge alle Style-Dateien in einer style.min.css zusammen
    .pipe(plumber.stop()) // Keep Gulp running
    .pipe(gulp.dest(dir + 'dist/css')) // Zielordner für konvertierte LESS-Datei
    .pipe(livereload()); // Livereload
});

// Scripts-Task
gulp.task('scripts', function() {
  gulp.src('' + dir + 'src/js/scripts.js') // Lade die scripts.js
    .pipe(sourcemaps.init()) // init sourcemap
    .pipe(plumber()) // Check for errors
    .pipe(include({
      extensions: "js",
      hardFail: true
    }))
    .pipe(uglify()) // Leerzeichen entfernen
    .pipe(concat('scripts.min.js')) // füge alle JS-Dateien in einer scripts.min.js zusammen
    .pipe(plumber.stop()) // Keep Gulp running
    .pipe(sourcemaps.write('/maps')) // create sourcemap
    .pipe(gulp.dest(dir + 'dist/js/')) // Speicherort
    .pipe(livereload()); // Livereload
});

// Create a SVG-Spritesheet
gulp.task('svg-sprites', function() {
  return gulp.src(dir + 'assets/img/icons/origin/*.svg')
    .pipe(svgSprite())
    .pipe(gulp.dest(dir + 'assets/img/icons/spritesheet'));
});

// Create a SVG-Symbolsheet
gulp.task('svg-symbols', function() {
  return gulp.src(dir + 'assets/img/icons/origin/*.svg')
    .pipe(svgSprite({
      mode: "symbols"
    }))
    .pipe(gulp.dest(dir + 'assets/img/icons/symbols'));
});


// Watch-Task
// Watches JS and LESS/SCSS
gulp.task('watch', function() {
  livereload.listen(); // Livereload
  gulp.watch('' + dir + 'src/' + stylesheetExt + '/**/*.' + stylesheetExt + '', ['styles-minified', 'styles']); // if modified run styles-Task
  gulp.watch('' + dir + 'src/js/**/*', ['scripts']); // if modified run Scripts-Task
  gulp.watch('' + dir + 'templates/modules/**/*.' + stylesheetExt + '', ['styles-minified', 'styles']); // if modified run styles-Task
  gulp.watch('' + dir + 'templates/modules/**/*.js', ['scripts']); // if modified run Scripts-Task
});

// Defaultbefehl
// run 'scripts' + 'styles' + 'watch'
gulp.task('default', ['watch', 'styles', 'styles-minified', 'scripts']);
