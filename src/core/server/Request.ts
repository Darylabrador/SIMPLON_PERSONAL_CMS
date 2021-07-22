import url from "url";
import { IncomingMessage } from 'http';
import { MethodsEnum } from '../enum/MethodsEnum';

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

        let baseURI = url.parse(this.url, true);
        let path = baseURI.pathname?.split('/')

        switch (this.method) {
            case MethodsEnum.Get:
                this.query = this.getQuery(baseURI);
                this.params = this.getParams(path);
                break;
            case MethodsEnum.Post:
                console.log('retrieve body')
                break;
            case MethodsEnum.Put:
                this.params = this.getParams(path);
                break;
            case MethodsEnum.Delete:
                this.params = this.getParams(path);
                break;
            default:
                break;
        }
    };

    private getParams(path: any) {
        return path?.slice(1)[1];
    }

    private getQuery(baseURI: url.UrlWithParsedQuery) {
        return baseURI.query;
    }

    private getBody() {

    }
}

export default Request;