//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
	less = require('gulp-less');
	
// 定义任务
gulp.task('less', function(){
	console.log('run gulp-less');
	gulp.src('src/main/webapp/css/*.less')//该任务针对的文件
        .pipe(less())//该任务调用的模块
        .pipe(gulp.dest('src/main/webapp/css'));//将会在src/css下生成index.css
});


gulp.task('default',['less']);//定义默认任务,如果使用命令gulp就会执行默认任务，默认任务列表中的所有任务都将执行