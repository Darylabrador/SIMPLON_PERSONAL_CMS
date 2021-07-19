import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = 3000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
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