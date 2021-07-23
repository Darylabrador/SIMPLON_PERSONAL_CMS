/** 
 * Response
 * 
 * This file is used to handle response from server
 * It will set the correct header and response depending view params
 * @module core/server/Response
 * @author Daryl ABRADOR
 */

import { ServerResponse } from 'http';
import { ResponseTypeEnum } from '../enum/ResponseTypeEnum';

class Response {
    SERVER_RESPONSE: ServerResponse;
    saveContent: any;

    public constructor(response: ServerResponse) {
        this.SERVER_RESPONSE = response;
    };

    public setHeader() {
        if (typeof this.saveContent == ResponseTypeEnum.String) this.SERVER_RESPONSE.writeHead(200, { 'Content-Type': 'text/html' });
        else if (typeof this.saveContent === ResponseTypeEnum.Object) this.SERVER_RESPONSE.setHeader('Content-Type', 'application/json');
    }

    public setReponse() {
        let responseContent;
        if (typeof this.saveContent == ResponseTypeEnum.String) responseContent = this.saveContent;
        else if (typeof this.saveContent === ResponseTypeEnum.Object) responseContent = JSON.stringify({ ...this.saveContent })
        return this.SERVER_RESPONSE.end(responseContent)
    }

    public handler(content: any) {
        this.saveContent = content;
        this.setHeader();
        this.setReponse();
    }
}

export default Response;