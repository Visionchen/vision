var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
// 压缩JS文件
gulp.task('script', function() {

    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

});
// 自动监听js下所有js文件的变化
gulp.task('auto', function() {
        gulp.watch('js/*.js', ['script']);
});
