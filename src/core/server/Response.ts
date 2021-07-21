import { ServerResponse } from 'http';

class Response  {
    SERVER_RESPONSE: ServerResponse;

    public constructor(response: ServerResponse) {
        this.SERVER_RESPONSE = response;
    };
 
    public handler(content: any) {
        if(typeof content == "string") {
            this.SERVER_RESPONSE.writeHead(200, { 'Content-Type': 'text/html' });
            this.SERVER_RESPONSE.end(content);
            this.SERVER_RESPONSE.end();
        } else if(typeof content === "object") {
            this.SERVER_RESPONSE.setHeader('Content-Type', 'application/json');
            this.SERVER_RESPONSE.end(JSON.stringify({...content}));
        } else {
            this.SERVER_RESPONSE.statusCode = 500;
            this.SERVER_RESPONSE.end(JSON.stringify({ error: "La réponse est incorrect" }));
        }
    }

}

export default Response;