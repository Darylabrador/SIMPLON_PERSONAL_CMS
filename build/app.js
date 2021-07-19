"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var port = 3000;
var server = http_1.createServer(function (request, response) {
    switch (request.url) {
        case '/': {
            if (request.method === 'GET') {
                response.write('<html>');
                response.write('<head> <title> TypeScript CMS </title></head>');
                response.write('<body><p> Node JS + TypeScript </p></body>');
                response.write('</html>');
                return response.end();
            }
            break;
        }
        default: {
            response.statusCode = 404;
            response.end();
        }
    }
});
server.listen(port);
