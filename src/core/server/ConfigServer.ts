import { createServer, IncomingMessage, ServerResponse } from 'http';
import Router from '../routing/Router';
import Rendering from "../templating/Rendering";

class ConfigServer {
    private static instance: ConfigServer;
    port: number = 3000;

    private constructor(){}

    private static getInstance(): ConfigServer {
        if(!this.instance) {
            this.instance = new ConfigServer();
        }
        return this.instance;
    }

    private check(request: IncomingMessage, response: ServerResponse) {
        const method        = request.method;
        const url           = request.url;
        const findRoute     = Router.getAll().find(element => element.method === method && element.url == url);
        
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

    private startServer() {
        let server = createServer((request: IncomingMessage, response: ServerResponse) => {
            this.check(request, response);
        })
        server.listen(this.port);
    }

    public static start() {
        this.getInstance().startServer()
    }
}

export default ConfigServer;