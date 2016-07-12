/**
 * Created by tangl on 2016/7/12.
 */
(function (root, factory) {
    // Start with AMD.
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'TanMv'], function($, me) {
            root.TanMv = factory(root, me, $);
        });
    } else {
        root.TanMv = factory(root, {}, (root.jQuery || root.Zepto || root.ender || root.$));
    }
})(this, function (root, me, $) {
    // Returns a reference to this, Resolve naming conflicts
    var previousTanMv = root.TanMv;
    me.noConflict = function() {
        root.TanMv = previousTanMv;
        return this;
    };

    // Current version
    me.VERSION = '1.0.1';

    var Events = {
        initialize: function () {}
    };

    // 数据模型
    var Model = me.Model = function (attributes, options) {
        attributes || (attributes = {});
        options || (options = {});
        this.initialize.apply(this, arguments);
    };
    $.extend(Model.prototype,Events,{
        // Get the value of an attribute.
        get: function(key) {
            return this.attributes[key];
        },
        set: function (key, value, options) {
            if(key == null) return this;
            return this;
        },
        has: function(key) {
            return this.get(key) != null;
        }
    });
    return me;
});