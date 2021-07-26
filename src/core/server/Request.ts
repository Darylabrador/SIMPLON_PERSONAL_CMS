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
        this.setData()
    };

    public async setData() {
        let baseURI = url.parse(this.url, true);
        let path = baseURI.pathname?.split('/');
        let params = path?.slice(1)[path.length - 2];
        let query = baseURI.query;
        let body: any;

        switch (this.method) {
            case MethodsEnum.Get:
                this.data = { params, query }
                break;
            case MethodsEnum.Post:
                body = await this.parseBody();
                this.data = { body }
                break;
            case MethodsEnum.Put:
                body = await this.parseBody();
                this.data = { params, body }
                break;
            case MethodsEnum.Delete:
                this.data = { params }
                break;
            default:
                break;
        }
    }

    private parseUrlEncoded(parsedBody: any) {
        let dataSplited = parsedBody.split('&')
        let dataObject: any = new Object();
        dataSplited.forEach((data: any) => {
            let tab   = data.split('=');
            let key   = tab[0];
            let value = tab[1];
            dataObject[key]   = value
        })
        return dataObject;
    }

    private parseBody() {
        let body: Array<any> = [];
        return new Promise((resolve, reject) => {
            this.SERVER_REQUEST.on('data', (chunk: any) => {
                body.push(chunk)
            }).on('end', () => {
                let headerType = this.SERVER_REQUEST.headers['content-type'];
                const parsedBody = Buffer.concat(body).toString();
                if(headerType == "application/json") return resolve(JSON.parse(parsedBody))
                if(headerType == "application/x-www-form-urlencoded") return resolve(this.parseUrlEncoded(parsedBody))
                else return resolve(parsedBody)
            });
        })
    }
}

export default Request;