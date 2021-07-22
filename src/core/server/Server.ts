/** 
 * Server (singleton class)
 * 
 * This file is used to generate the server and handle routes
 * @module core/server/Server
 * @author Daryl ABRADOR
 */

import { createServer } from 'http';
import Router from '../routing/Router';
import Viewer from "../templating/Viewer";
import Request from './Request';
import Response from './Response';
import { MethodsEnum } from '../enum/MethodsEnum';
import url from "url";

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

    private getParams(path: any) {
        return path?.slice(1)[path.length - 2];
    }

    private getQuery(baseURI: url.UrlWithParsedQuery) {
        return baseURI.query;
    }

    private async check(request: any, response: any) {
        let baseURI = url.parse(request.url, true);
        let path    = baseURI.pathname?.split('/');
        let params  = this.getParams(path);
        let query   = this.getQuery(baseURI);

        // let allRoutes = Router.getAll().filter(element => baseURI.pathname?.match(element.url));
        // console.log(allRoutes)

        let findRoute = Router.getAll().find(element =>
            (element.url.match(baseURI.path) && element.method == request.method) ||
            (element.url.match('[^\:]*', params) && element.url.replace(':id', params) == baseURI.path && element.method == request.method)
        );

        if (findRoute) {
            if (typeof findRoute.callback === "function") {
                if (findRoute.callback()) {
                    await request.setParams(params);
                    await request.setQuery(query);
                    const data = await findRoute.callback(params, query);
                    if (typeof data == "string") {
                        response.handler(data)
                    } else if (data.view) {
                        const viewContent = Viewer.render(data.view, data.payload);
                        response.handler(viewContent)
                    } else {
                        let returningData;
                        if (!data.payload) returningData = { data }
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
            const requestHandler = new Request(request);
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