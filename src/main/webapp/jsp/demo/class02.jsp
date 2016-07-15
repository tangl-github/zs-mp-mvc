<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html>
<head>
    <%@ include file="/dist/libs/metalibs.jsp"%>
    <%@ include file="/dist/libs/csslibs.jsp"%>
    <%@ include file="/dist/libs/jslibs.jsp"%>
    <title>mvc</title>
</head>
<body>
<div id="content">
    <button class="btn-search">搜索</button>
    <button class="btn-refresh">刷新</button>
    <div class="result-body"></div>
</div>

<div id="content2">
    <button class="btn-search2">搜索</button>
    <button class="btn-refresh">刷新</button>
    <div class="result-body"></div>
</div>
</body>
<script type="text/javascript" src="${ctx}/source/js/demo/demo.js"></script>
<script>
    new listController($('#content'),'plan1');
    new listController($('#content2'),'plan2',{
        urls:{
            searchUrl: "list.shtml"
        },
        events:{
        'click|.btn-search2': 'search'
    }});
</script>
</html>