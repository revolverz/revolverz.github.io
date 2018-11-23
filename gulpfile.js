var gulp         = require('gulp');
var less         = require('gulp-less');
var watch        = require('gulp-watch');
var concat       = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var gls          = require('gulp-live-server');
var imagemin     = require('gulp-imagemin');

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
	gulp.watch( 'src/common.blocks/**/*', ['compile-less', 'concat-js', 'copy-img'] );
});

gulp.task('copy-img', function(){
	return gulp.src('src/common.blocks/**/*.{png,jpg}')
	.pipe(gulp.dest('public/img/'));
  });
 
gulp.task( 'concat-js', function() {
	return gulp.src('src/common.blocks/js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('public/js/'));
});

gulp.task('live-server', function() {
	var server = gls.static('public');
	server.start();
 
	//use gulp.watch to trigger server actions(notify, start or stop)
	gulp.watch(['public/**/*.css', 'public/**/*.html'], function (file) {
	 server.notify.apply(server, [file]);
	});
 });

gulp.task('compress', function() {
    gulp.src('public/img/**/*.{png,jpg}')
    .pipe(imagemin({
	  progressive: true
    }))
    .pipe(gulp.dest('public/img/'));
});

/* Task when running `gulp` from terminal */
gulp.task( 'default', [ 'compile-less', 'watch-less', 'concat-js', 'copy-img', 'live-server', 'compress' ]);