// * gulp
// * gulp-sass


var gulp = require('gulp');


//任务：利用gulp-sass编译sass
//如何使用gulp创建一个任务
var sass = require('gulp-sass');

gulp.task('compileSass',function(){
	// 找到sass文件
	gulp.src('./src/sass/*.scss') //文件流（文件在内存中的状态，水流）

		// 编译
		.pipe(sass({outputStyle:'compact'}).on('error', sass.logError))

		// 输出文件
		.pipe(gulp.dest('./src/css'))
});


// 监听文件修改，并自动执行相应任务
// 只要文件有修改，则自动编译sass文件
// *: 匹配文件名
// **: 匹配文件夹名
gulp.task('jtSass',function(){
	gulp.watch('./src/**/*.scss',['compileSass']);
})

var browserSync = require('browser-sync');
gulp.task('server',function(){
    browserSync({
        // 静态服务器
        // server:'./src/',

        // 代理服务器
        proxy:'http://localhost/1234/project/src/index.html',

        // 端口
        // port:2008,

        // 监听文件修改，自动刷新浏览器
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });



    // 开启服务器的同时，监听sass的修改
    gulp.watch('./src/**/*.scss',['compileSass']);
})