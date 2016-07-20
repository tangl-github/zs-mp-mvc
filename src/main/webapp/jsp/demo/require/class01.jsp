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
<a onclick="one()">one</a>
</body>
<script>
    var controller = (function(){
        var count = 5;
        return {
            search: function(){console.log(count);},
            refresh: function(){}
        }
    })();
    console.log(controller.count);
</script>
</html>