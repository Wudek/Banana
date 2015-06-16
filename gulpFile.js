var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
//var babel = require('gulp-babel');
var react = require('gulp-react');
var reactify = require('reactify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');

//var b = browserify('./client/app.js', {
//	cache : {},
//	debug : true,
//	fullPaths: true,
//	packageCache : {}
//}).transform(babelify);
var b = browserify('./client/app.js', watchify.args).transform(babelify);

var bundler = watchify(b);

var bundle = function () {
	gutil.log('Staring \'', gutil.colors.cyan('js compilation'), '\'...');
	return bundler.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('app.js'))
//		// optional, remove if you dont want sourcemaps
//		.pipe(buffer())
//		.pipe(uglify())
//		.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
//		.pipe(sourcemaps.write('./')) // writes .map file
		.pipe(gulp.dest('build'));
};

gulp.task('js', bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('time', function (time) {
	gutil.log('Finished \'', gutil.colors.cyan('js compilation'), '\' after ', gutil.colors.magenta(time / 1000 + ' s'));
});


gulp.task('clean', function (cb) {
	del(['build'], cb);
});

//gulp.task('babel', function() {
//	return gulp.src('./server/*.js')
//		.pipe( babel({
//			blacklist: ['regenerator']
//		}) )
//		.pipe( gulp.dest('./build') );
//});

gulp.task('thirdparty', function () {
	return gulp.src('thirdparty/**/*')
		.pipe(gulp.dest('build/thirdparty/'));
});

gulp.task('thirdparty_fonts', function () {
	return gulp.src('thirdparty_fonts/**')
		.pipe(gulp.dest('build/fonts/'));
});

gulp.task('html', function () {
	return gulp.src(['client/**/*', '!client/**/*.js'])
		.pipe(gulp.dest('build'));
});

gulp.task('watch_html', function () {
	gulp.watch(['client/**/*', '!client/**/*.js'], ['html']);
});

gulp.task('watch_thirdparty', function () {
	gulp.watch(['thirdparty/**/*'], ['thirdparty']);
});
gulp.task('watch_thirdparty_fonts', function () {
	gulp.watch(['thirdparty_fonts/**'], ['thirdparty_fonts']);
});

gulp.task('default', function () {
	return runSequence('clean', ['html', 'thirdparty', 'thirdparty_fonts', 'js'], ['watch_html', 'watch_thirdparty', 'watch_thirdparty_fonts']);
});
//gulp.task('default', ['babel']);
