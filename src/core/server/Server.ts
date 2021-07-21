import { createServer } from 'http';
import Router from '../routing/Router';
import Viewer from "../templating/Viewer";
import Request from './Request';
import Response from './Response';

class Server {
    private static instance: Server;
    port: number = 3000;

    private constructor() { }

    private static getInstance(): Server {
        if (!this.instance) {
            this.instance = new Server();
        }
        return this.instance;
    }

    private async check(request: any, response: any) {
        const findRoute      = Router.getAll().find(element => element.method === request.method && element.url == request.url);
        if (findRoute) {
            if (typeof findRoute.callback === "function") {
                if (findRoute.callback()) {
                    const data = await findRoute.callback();
                    
                    if(typeof data == "string") {
                        response.handler(data)
                    } else if (data.view) {
                        const viewContent = Viewer.render(data.view, data.payload);
                        response.handler(viewContent)
                    } else {
                        let returningData;
                        if(!data.payload) returningData = { data }
                        else returningData = data.payload
                        response.handler({ entries: returningData });
                    }
                }
            }
        } else {
            const viewContent = Viewer.render("error", {});
            response.handler(viewContent)
        }
    }

    private startServer() {
        let server = createServer((request: any, response: any) => {
            const requestHandler  = new Request(request);
            const responseHandler = new Response(response);
            this.check(requestHandler, responseHandler);
        })
        server.listen(this.port);
    }

    public static start() {
        this.getInstance().startServer()
    }
}

export default Server;