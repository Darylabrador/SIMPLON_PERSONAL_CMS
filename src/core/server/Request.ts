/** 
 * Request
 * 
 * This file is used to handle request from server
 * It will parse all params we will need in the request depending method
 * @module core/server/Response
 * @author Daryl ABRADOR
 */

import { MethodsEnum } from '../enum/MethodsEnum';
import url from "url";

class Request {
    SERVER_REQUEST: any;
    url: any;
    method: any;
    data: any;

    public constructor(request: any) {
        this.SERVER_REQUEST = request;
        this.url = request.url;
        this.method = request.method;
        this.setData(request)
    };

    private setData(request: any) {
        let baseURI = url.parse(request.url, true);
        let path = baseURI.pathname?.split('/');
        let params = path?.slice(1)[path.length - 2];
        let query = baseURI.query;

        let body: Array<any> = [];

        switch (request.method) {
            case MethodsEnum.Get:
                this.data = { params, query }
            case MethodsEnum.Post:
                this.SERVER_REQUEST.on('data', (chunk: any) => {
                    body.push(chunk)
                }).on('end', () => {
                    const parsedBody = Buffer.concat(body).toString();
                    this.data = { body: parsedBody}
                });
            case MethodsEnum.Put:
                this.SERVER_REQUEST.on('data', (chunk: any) => {
                    body.push(chunk)
                }).on('end', () => {
                    const parsedBody = Buffer.concat(body).toString();
                    this.data = {params, body: parsedBody}
                });
            case MethodsEnum.Delete:
                this.data = { params }
            default:
                break;
        }
    }
}

export default Request;