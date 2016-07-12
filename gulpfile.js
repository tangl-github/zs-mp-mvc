(function () {
    'use strict';
    //导入工具包 require('node_modules里对应模块')
    var gulp = require('gulp'),
        path = require('path'),
        del = require('del'),
        merge = require('merge-stream');
    //加载gulp-load-plugins插件，并马上运行它
    var plugins = require('gulp-load-plugins')();

    var baseRoot = 'src/main/webapp/',
        paths = {
            root:'./',
            source: {
                root: baseRoot + 'source/',
                libs: baseRoot + 'source/libs/',
                styles: baseRoot + 'source/css/',
                scripts: baseRoot + 'source/js/'
            },
            dist: {
                root: baseRoot + 'dist/',
                libs: baseRoot + 'dist/libs/',
                styles: baseRoot + 'dist/css/',
                scripts: baseRoot + 'dist/js/'
            }
        },
        project = {
            name: 'mvc',
            moduleFile:[
                paths.source.scripts + 'module/**/*.js'
            ],
            libFile:[
                paths.source.scripts + 'lib/**/*.js'
            ]
        };

    /**
     * 定义任务：发布引用文件
     */
    gulp.task('release-libs',function () {
        return gulp.src(paths.source.libs + '*.jsp')
            .pipe(gulp.dest(paths.dist.libs));
    });

    /**
     * 定义任务：发布样式文件
     * 1.less编译成css文件
     * 2.合并
     * 3.压缩
     */
    gulp.task('release-css',function () {
        return gulp.src(paths.source.styles + '**/*.less')
           // .pipe(plugins.watch(paths.source.styles + '**/*.less'))//只处理更改过的less
            .pipe(plugins.less())//less文件编译成css
            .pipe(plugins.concat(project.name + '.css'))
            .pipe(gulp.dest(paths.dist.styles))//输出
            .pipe(plugins.cleanCss())//压缩css
            .pipe(plugins.rename(project.name + '.min.css'))//重命名
            .pipe(gulp.dest(paths.dist.styles))//输出
            .pipe(plugins.rev())
            .pipe(plugins.rev.manifest())          //- 生成一个rev-manifest.json
            .pipe(gulp.dest(paths.dist.root + 'rev/css'));   //- 将 rev-manifest.json 保存到rev目录内
    });

    /**
     * 定义任务：发布脚本文件
     * 1.发布第三方类库
     * 2.发布项目脚本文件（合并，压缩）
     */
    gulp.task('release-js',['out-js'],function () {
        // 压缩，重命名，加版本
        return gulp.src(paths.dist.scripts + '*.js')
            .pipe(plugins.tap(function (file) {
                //console.log("file:" + file.path);
            }))
            .pipe(plugins.uglify()) //使用uglify进行压缩
            .pipe(plugins.rename({suffix:'.min'}))//重命名
            .pipe(gulp.dest(paths.dist.scripts)) //输出
            .pipe(plugins.rev())
            .pipe(plugins.rev.manifest())          //- 生成一个rev-manifest.json
            .pipe(gulp.dest(paths.dist.root + 'rev/js'));   //- 将 rev-manifest.json 保存到rev目录内
    });

    gulp.task('out-js',function () {
        // 发布第三方类库文件
        var s1 = gulp.src(project.libFile)
            .pipe(gulp.dest(paths.dist.scripts + 'lib'));

        // 发布模块脚本
        var s2 = gulp.src(project.moduleFile)
            .pipe(plugins.concat(project.name + '.js'))
            .pipe(gulp.dest(paths.dist.scripts));//输出

        // 发布主文件
        var s3 = gulp.src(paths.source.scripts + 'main.js')
            .pipe(gulp.dest(paths.dist.scripts)); //输出
        return merge(s1,s2,s3);
    });


    /**
     * 定义任务：替换引用文件路径
     */
    gulp.task('release',['release-css','release-js'], function () {
        //生成新的版本路径并替换引用文件
        return gulp.src([paths.dist.root + 'rev/**/*.json', paths.source.libs + '*.jsp'])
            .pipe(plugins.revCollector())
            .pipe(gulp.dest(paths.dist.libs));//输出
    });

    /**
     * 定义任务：编译前清除文件
     */
    gulp.task('clean',function () {
        return del([paths.dist.root]);
    });

    /**
     * 定义主线任务：发布
     * 1.清除文件
     * 2.发布引用文件
     * 3.发布样式文件和脚本文件
     * 4.替换引用文件中的样式文件和脚本文件路径
     */
    gulp.task('dev',function (done) {
        plugins.sequence(
            'clean',
            'release-libs',
            'release',
            done);
    });

    gulp.task('watch', function () {
        // 监听js文件
        gulp.watch(paths.source.scripts + '**/*.js', function (e) {
            console.log('js file was:' + e.path + " | type:" + e.type);
        });
        // 监听less文件
        gulp.watch(paths.source.styles + '**/*.less', function (e) {
            console.log('less file was:' + e.path + " | type:" + e.type);
        });
    });

    //定义默认任务,如果使用命令gulp就会执行默认任务，默认任务列表中的所有任务都将执行
    gulp.task('default',['dev', 'watch']);
})();