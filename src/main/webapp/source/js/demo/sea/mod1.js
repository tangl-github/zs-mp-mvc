/**
 * Created by tangl on 2016/7/8.
 */
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    console.log("run mod1.js");
    // 通过 exports 对外提供接口
    // exports.doSomething = function () {
    //     console.log("mod1 doSomething");
    // };

    // 或者通过 module.exports 提供整个接口
    module.exports = {
        doSomething: function () {
            console.log("mod1 doSomething");
        },
        m1: function () {
            console.log("mod1 m1");
        }
    }
});