/**
 * Created by tangl on 2016/7/8.
 */
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    console.log("run main.js");

    // 通过 exports 对外提供接口
    exports.doSomething = function () {
        console.log("main doSomething");
        // 通过 require 引入依赖
        var $mod1 = require('@sea/mod1');
        $mod1.doSomething();
        $mod1.m1();
    };
});