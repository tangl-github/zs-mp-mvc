/**
 * Created by tangl on 2016/7/8.
 */
// Require.js allows us to configure shortcut alias
// require.config({
//     baseUrl: "/dist/js/demo"
// });
require(['a', 'b'], function(a, b){
    console.log('in.js执行');
    a.hello();
    $('#b').click(function(){
        b.hello();
    });
});