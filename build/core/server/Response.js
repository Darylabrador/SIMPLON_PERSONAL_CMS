"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Response = /** @class */ (function () {
    function Response(response) {
        this.SERVER_RESPONSE = response;
    }
    ;
    Response.prototype.handler = function (content) {
        if (typeof content == "string") {
            this.SERVER_RESPONSE.writeHead(200, { 'Content-Type': 'text/html' });
            this.SERVER_RESPONSE.end(content);
            this.SERVER_RESPONSE.end();
        }
        else if (typeof content === "object") {
            this.SERVER_RESPONSE.setHeader('Content-Type', 'application/json');
            this.SERVER_RESPONSE.end(JSON.stringify(__assign({}, content)));
        }
        else {
            this.SERVER_RESPONSE.statusCode = 500;
            this.SERVER_RESPONSE.end(JSON.stringify({ error: "La réponse est incorrect" }));
        }
    };
    return Response;
}());
exports.default = Response;
