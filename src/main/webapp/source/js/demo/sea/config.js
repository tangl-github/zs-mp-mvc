/**
 * Created by tangl on 2016/7/8.
 */
// seajs 的简单配置
seajs.config({
    debug:true,
    base: "/source/js/",
    paths:{
        '@sea': 'demo/sea'
    },
    alias: {
        "jquery": "lib/jquery/jquery-1.12.1.min.js"
    }
});
// 加载入口模块
seajs.use(['jquery',"@sea/main"],function ($, m) {
    console.log("use main.js");
    $(function () {
        $("#a").click(function (e) {
            console.log("a");
            e.stopPropagation();
        });
        $("#b").click(function () {
            console.log("b");
        });
        $("#c").click(function () {
            console.log("c");
        });

        $('body').on("click","button",function (e) {
            console.log(e.target);
            console.log(e);
            e.preventDefault();
        });
    });

    m.doSomething();
});