/**
 * Created by tangl on 2016/7/8.
 */
// Require.js allows us to configure shortcut alias
// require.config({
//     baseUrl: "/dist/js/demo"
// });
define(function () {
    console.log('in2.js执行');
    require(['a'],function (a) {
        a.hello();
    });
    $('#b').click(function(){
        require(['b'], function(b){
            b.hello();
        });
    });
});