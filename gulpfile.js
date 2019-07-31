const gulp = require('gulp'); // 引入gulp模块
const rename = require('gulp-rename'); // 引入gulp-rename模块
const htmlmin = require('gulp-htmlmin'); // 引入gulp-htmlmin模块
const cssmin = require('gulp-cssmin'); // 引入gulp-cssmin模块
const uglify = require('gulp-uglify'); // 引入gulp-uglify模块
const imagemin = require('gulp-imagemin'); // 引入gulp-imagemin模块
const path = require('path'); // 引入path模块

// 1.压缩html
gulp.task('htmlmin', function() {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/html'));
});

// 2.压缩css
gulp.task('cssmin', function() {
    return gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
});

// 3.压缩js
gulp.task('jsmin', function() {
    return gulp.src(['./src/js/*.js', '!./src/js/.min.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/js'));
});



//  4.压缩img
gulp.task('imagemin', function() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
});

// 5.合并js 减少请求次数
// gulp.task('js',function(){
//     return gulp.src('./')
// });

// 6. 文件监听
gulp.task('watch', function() {
    gulp.watch(['./src/html/*.html', './src/images/*', './src/css/*.css', './src/js/*js'], gulp.series('htmlmin', 'cssmin', 'jsmin'));
});