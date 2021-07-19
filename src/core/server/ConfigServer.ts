import { createServer } from 'http';

/**
 * Singleton to initiate nodejs server
 */
class ConfigServer {
    port: number;

    constructor(port?: number){
        if(port) this.port = port;
        else     this.port = 3000;
    }

    init(routingList: any) {
        return createServer(routingList).listen(this.port)
    }
}

export default ConfigServer;