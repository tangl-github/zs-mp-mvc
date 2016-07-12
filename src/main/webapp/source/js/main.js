/**
 * Created by tangl on 2016/7/8.
 */
// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    baseUrl: "/dist/js",
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: 'lib/jquery/jquery-1.12.1.min',
        underscore: 'lib/underscore/underscore-1.8.2.min',
        backbone: 'lib/backbone/backbone-1.1.2.min',
        backboneLocalstorage: 'lib/backbone/backbone.localStorage.min',
        text: 'lib/require/text.min'
    }
});