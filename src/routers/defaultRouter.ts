import { IncomingMessage, ServerResponse } from 'http';
import * as ejs   from "ejs";
import * as fs    from "fs";
import * as path  from "path";

/**
 * Display page content
 * @param {object} entries
 * 
 */
const displayPage = (entries: object) => {
    const templatePath = path.join(__dirname,'..', 'views', 'template.ejs');
    const values = { entries };
    const template = fs.readFileSync(templatePath, 'utf8');
    return ejs.render(template, values);
}


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
                const output  = displayPage(entries);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(output);
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