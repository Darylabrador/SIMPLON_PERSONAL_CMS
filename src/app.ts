import { createServer, IncomingMessage, ServerResponse } from 'http';
 
const port = 3000;
 
const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    const url    = request.url;
    if (url === "/") {
        response.write('<html>');
        response.write('<head> <title> Entrer message</title></head>');
        response.write('<body><p> Node JS + TypeScript </p></body>');
        response.write('</html>');
        return response.end();
    }
});
 
server.listen(port);