var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

/* Task to compile less */
gulp.task('compile-less', function () {
	gulp.src('styles.less')
		.pipe(less())
		.pipe(gulp.dest('./'));
});

/* Task to watch less changes */
gulp.task('watch-less', function () {
	gulp.watch('./common.blocks/**/*', ['compile-less', 'concat-js']);
});

gulp.task('concat-js', function () {
	return gulp.src('./common.blocks/js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('autoprefixer', function () {
	gulp.src('./styles.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./'));
});

var params = {
	out: 'public',
	htmlSrc: 'index.html',
	levels: ['common.blocks']
}

getFileNames  = require('html2bl').getFilesNames(params);

gulp.task('less', function() {
	/*getFileNames.then(function(files){
		console.log(files);
	})*/
	gulp.src(['./common.blocks/**/*.less'])
	.pipe(concat('stule.less'))
	.pipe(gulp.dest(params.out))
	.pipe(reload({stream: true}));
});

/* Task when running `gulp` from terminal */
gulp.task('default', ['compile-less', 'watch-less', 'concat-js', 'autoprefixer', 'less']);

