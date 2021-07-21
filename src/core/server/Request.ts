import { IncomingMessage } from 'http';

class Request  {
    SERVER_REQUEST: IncomingMessage;
    url: any;
    method: any;

    public constructor(request: IncomingMessage) {
        this.SERVER_REQUEST = request;
        this.url            = request.url;
        this.method         = request.method;
    };
}

export default Request;