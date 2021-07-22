/** 
 * Request
 * 
 * This file is used to handle request from server
 * It will parse all params we will need in the request depending method
 * @module core/server/Response
 * @author Daryl ABRADOR
 */

import { IncomingMessage } from 'http';

class Request {
    SERVER_REQUEST: IncomingMessage;
    url: any;
    method: any;
    query: any;
    params: any;
    body: any;


    public constructor(request: IncomingMessage) {
        this.SERVER_REQUEST = request;
        this.url = request.url;
        this.method = request.method;
    };

    setQuery(query: any) {
        this.query = query;
    }

    setParams(params: any) {
        this.params = params;
    }

    setBody(body: any) {
        this.body = body;
    }
}

export default Request;