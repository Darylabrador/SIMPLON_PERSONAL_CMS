import { createServer, IncomingMessage, ServerResponse } from 'http';
import { MethodsEnum } from "./MethodsEnum";
import Route from "./Route";
import Rendering from "../templating/Rendering";

class Router {
    private static instance: Router;
    private routes: Array<any> = [];
    private constructor(){}

    private static getInstance(): Router {
        if(!this.instance) {
            this.instance = new Router();
        }
        return this.instance;
    }

    public createRoute(method: string, url: string, callback: any){
        this.routes.push(new Route(method, url, callback))
    }

    public static get(url: string, callback: any) {
        this.getInstance().createRoute(MethodsEnum.Get, url, callback)
    }

    public static post(url: string, callback: any) {
        this.getInstance().createRoute(MethodsEnum.Post, url, callback)
    }

    public static put(url: string, callback: any) {
        this.getInstance().createRoute(MethodsEnum.Put, url, callback)
    }

    public static delete(url: string, callback: any) {
        this.getInstance().createRoute(MethodsEnum.Delete, url, callback)
    }

    public static check(request: IncomingMessage, response: ServerResponse) {
        const method        = request.method;
        const url           = request.url;
        const findRoute     = this.getInstance().routes.find(element => element.method === method && element.url == url);
        
        if(findRoute){
            if(findRoute.callback()) {
                const data = findRoute.callback();
                if(data.view) {
                    const output = new Rendering(data.view, data.payload); 
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(output.web());
                    return response.end(); 
                } else {
                    response.setHeader('Content-Type', 'application/json');
                    response.end(JSON.stringify({...data.payload}));
                }
            }
        } else {
            const output = new Rendering("error", {}); 
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(output.web());
            return response.end();
        }
    }
}

export default Router;