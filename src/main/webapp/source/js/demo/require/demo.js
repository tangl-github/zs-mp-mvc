/**
 * Created by Administrator on 2016/7/13.
 */
(function ($) {
    // 默认后端请求url
    var _defaultUrl = {
        indexUrl: "index.shtml",
        searchUrl: "search.shtml",
        formUrl: "form.shtml",
        viewUrl: "view.shtml",
        exportUrl: "export.shtml",
        updateStatusUrl: "updateStatus.shtml"
    };

    // 默认筛选器
    var _defaultEvents = {
        'click|.btn-search': 'search',
        'click|.btn-refresh': 'refresh'
    };

    var listController = function (element, action, options) {
        if(typeof action !== 'string'){console.warn('action must be a string type!');return;}
        options || (options = {});
        this.element = element;
        this.result = this.element.find(".result-body");
        this.action = action;
        this.urls = $.extend({}, _defaultUrl, options.urls);
        this.events = $.extend({}, _defaultEvents, options.events);
        // 初始参数
        this.param = {
            page:1,
            size:10
        };
        this.initialize.apply(this);
    };
    $.extend(listController.prototype,{
        initialize: function () {
            console.log('初始化');
            var $this = this;
            // 绑定事件
            for(var key in this.events){
                (function () {
                    var $key = key, $events = $this.events[$key],k = $key.split("|");
                    var events = k[0],selector = k[1],fn = $this[$events];
                    $this.element.on(events, selector, function (e) {
                        fn.call($this, e);
                    });
                })();
            }
        },
        //搜索
        search: function () {
            $.extend(this.param,{page:1});
            $.ajaxPost(this._$url(this.urls.searchUrl), this.param, this.setModel);
        },
        //刷新
        refresh: function () {
            $.ajaxPost(this._$url(this.urls.searchUrl), this.param, this.setModel);
        },
        setModel:function (res) {
            //数据返回，改变数据，渲染页面
            console.log(res);
        },
        _$url: function (url) {
            return '/' + this.action + '/' + url;
        }
    });

    //实例化API，jQuery插件
    $.fn.controller = function (action, urls, events) {
        return new listController(this, action, urls, events);
    };
    //实例化API，全局对象
    window.listController = listController;
    
    $.ajaxPost = function (url, param, callback) {
        //ajax请求数据并执行回掉函数
        callback({data:'this is server res'});
    };
})(jQuery);