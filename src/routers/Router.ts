import { IncomingMessage, ServerResponse } from 'http';
import DisplayTemplate from '../core/templating/DisplayTemplate';
import Routing from '../core/routing/Routing';

/**
 * General router handler
 * @param {IncomingMessage} request 
 * @param {ServerResponse} response 
 */
const routerHandler = (request: IncomingMessage, response: ServerResponse) => {
    const route = new Routing();
    route.add('/', "Page d'accueil", 'index', 'GET');
    route.add('/contact', "Page de contact", 'contact', 'GET');

    const existingRoute = route.routes.find(element => element.url == request.url);

    if(existingRoute) {
        if(existingRoute.method == "GET"){
            const entries = {title: existingRoute.title};
            const output = new DisplayTemplate(existingRoute.template, entries); 
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(output.render());
            return response.end();
        }
    } else {
        const output = new DisplayTemplate("error", {}); 
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(output.render());
        return response.end();
    }
}

export default routerHandler;