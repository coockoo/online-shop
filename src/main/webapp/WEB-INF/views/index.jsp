<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
    <title>Home</title>
</head>
<body>
	<div class="container">
	</div>
    <script src='<c:url value="/resources/bower_components/requirejs/require.js" />'
        data-main='<c:url value="/resources/js/main.js" />'></script>
</body>
</html>
