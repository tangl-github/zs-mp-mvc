/**
 * Created by Administrator on 2016/7/13.
 */
define(function(require, exports, module){
    console.log('d.js执行');
    return {
        helloA: function(){
            var a = require('a');
            a.hello();
        },
        run: function(){
            $('#b').click(function(){
                var b = require('b');
                b.hello();
            });
        }
    }
});