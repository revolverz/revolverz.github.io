var gulp         = require('gulp');
var less         = require('gulp-less');
var watch        = require('gulp-watch');
var concat       = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

/* Task to compile less */
gulp.task('compile-less', function() {
	gulp.src('src/bundle/styles.less')
		.pipe( less() )
		.pipe( autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		  }))
		.pipe( gulp.dest('public/css/') );
});

/* Task to watch less changes */
gulp.task( 'watch-less', function() {
	gulp.watch( 'src/common.blocks/**/*', ['compile-less', 'concat-js'] );
});

gulp.task( 'concat-js', function() {
	return gulp.src('src/common.blocks/js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('public/js/'));
});

/* Task when running `gulp` from terminal */
gulp.task( 'default', [ 'compile-less', 'watch-less', 'concat-js' ]);