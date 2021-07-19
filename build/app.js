"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var port = 3000;
var server = http_1.createServer(function (request, response) {
    var url = request.url;
    if (url === "/") {
        response.write('<html>');
        response.write('<head> <title> Entrer message</title></head>');
        response.write('<body><p> Node JS + TypeScript </p></body>');
        response.write('</html>');
        return response.end();
    }
});
server.listen(port);
