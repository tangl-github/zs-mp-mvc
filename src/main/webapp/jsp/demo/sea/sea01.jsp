<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html>
<head>
    <%@ include file="/dist/libs/metalibs.jsp"%>
    <script type="text/javascript" src="/source/js/lib/seajs/sea.min.js"></script>
    <script type="text/javascript" src="/source/js/lib/seajs/plugins/seajs-text.js"></script>
    <script type="text/javascript" src="/source/js/demo/sea/config.js"></script>
    <title>sea</title>
</head>
<body>
<%@ include file="../../common/header.jsp"%>
<div id="content">
    <ul>
        <li><a href="#list">列表</a></li>
        <li><a href="#view">页面</a></li>
        <li><a href="#save">保存</a></li>
    </ul>
    <ul>
        <li><button id="a">a</button></li>
        <li><span id="b">b</span></li>
        <li><a id="c">c</a></li>
    </ul>
</div>
<%@ include file="../../common/footer.jsp"%>
</body>
</html>