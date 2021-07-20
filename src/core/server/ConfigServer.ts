import * as fs from "fs";
import * as path from "path";

import { createServer, IncomingMessage, ServerResponse } from 'http';
import Router from '../routing/Router';
import Viewer from "../templating/Viewer";

class ConfigServer {
    private static instance: ConfigServer;
    port: number = 3000;
    SERVER_RESPONSE: any;

    private constructor() { }

    private static getInstance(): ConfigServer {
        if (!this.instance) {
            this.instance = new ConfigServer();
        }
        return this.instance;
    }

    public static getResponse() {
        return this.getInstance().SERVER_RESPONSE;
    }

    private check(request: IncomingMessage, response: ServerResponse) {
        const method = request.method;
        const url    = request.url;
        const findRoute = Router.getAll().find(element => element.method === method && element.url == url);
        this.SERVER_RESPONSE = response;

        if (findRoute) {
            if (typeof findRoute.callback === "function") {
                if (findRoute.callback()) {
                    const data = findRoute.callback();
                    if (data.view) {
                        Viewer.render(data.view, data.payload);
                    } else {
                        Viewer.renderAPI({ entries: data.payload });
                    }
                }
            }
        } else {
            Viewer.render("error", {});;
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