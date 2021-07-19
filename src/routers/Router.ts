import { IncomingMessage, ServerResponse } from 'http';
import DisplayTemplate from '../core/templating/DisplayTemplate';
import Routing from '../core/routing/Routing';
import ExampleController from "../controllers/ExampleController";

/**
 * General router handler
 * @param {IncomingMessage} request 
 * @param {ServerResponse} response 
 */
const routerHandler = (request: IncomingMessage, response: ServerResponse) => {
    const route = new Routing();
    const exampleController = new ExampleController();

    route.addFromController(exampleController.getIndexPage())
    route.addFromController(exampleController.getContactpage())

    route.add('/users', {title: "Page de la liste des utilisateurs"}, 'template', 'GET');
    route.add('/compte', {title: "Page de mon compte"}, 'template', 'GET');

    const existingRoute = route.routes.find(element => element.url == request.url);

    if(existingRoute) {
        if(existingRoute.method == "GET"){
            const output = new DisplayTemplate(existingRoute.view,  existingRoute.payload); 
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