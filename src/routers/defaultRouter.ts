import { IncomingMessage, ServerResponse } from 'http';
import DisplayTemplate from '../utils/DisplayTemplate';

/**
 * General router handler
 * @param {IncomingMessage} request 
 * @param {ServerResponse} response 
 */
const routerHandler = (request: IncomingMessage, response: ServerResponse) => {
    switch (request.url) {
        case '/': {
            if (request.method === 'GET') {
                const entries = {title: "mon titre via ejs"};
                const output = new DisplayTemplate("index", entries); 
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(output.render());
                return response.end();
            }
            break;
        }
        default: {
            response.statusCode = 404;
            response.end();
        }
    }
}

export default routerHandler;