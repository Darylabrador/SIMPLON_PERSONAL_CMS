import { createServer, IncomingMessage, ServerResponse } from 'http';
import Router from '../routing/Router';

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

    private startServer() {
        let server = createServer((request: IncomingMessage, response: ServerResponse) => {
            Router.check(request, response);
        })
        server.listen(this.port);
    }

    public static start() {
        this.getInstance().startServer()
    }
}

export default ConfigServer;