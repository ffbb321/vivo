const gulp = require('gulp'),
htmlmin = require('gulp-htmlmin'),
cleanCSS=require('gulp-clean-css'),
connect = require('gulp-connect'),
imagemin = require('gulp-imagemin'),
jsmin=require('gulp-uglify');
gulp.task('html', function() {
    gulp.src('app/**/*.html')
    .pipe(htmlmin({ 
        collapseWhitespace: true,
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面 CSS
    }))
    .pipe(gulp.dest('dist'))
})  
gulp.task('css', function() {
    gulp.src('app/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'))
})
gulp.task('js', function() {
    gulp.src('app/**/*.js')
    .pipe(jsmin())
    .pipe(gulp.dest('dist'))
})
gulp.task('image', function() {
    gulp.src('app/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
})

// gulp.task( 'build', ['html', 'css', 'js']);
gulp.task('webserver', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 2333
    });
});
 
gulp.task('default', ['html','css','image','js','webserver']);