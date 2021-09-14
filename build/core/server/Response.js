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
var ResponseTypeEnum_1 = require("../enum/ResponseTypeEnum");
var Response = /** @class */ (function () {
    function Response(response) {
        this.SERVER_RESPONSE = response;
    }
    ;
    Response.prototype.setHeader = function (customHeader) {
        if (customHeader === void 0) { customHeader = null; }
        if (customHeader)
            this.SERVER_RESPONSE.writeHead(200, customHeader);
        else if (typeof this.saveContent === ResponseTypeEnum_1.ResponseTypeEnum.Object)
            this.SERVER_RESPONSE.setHeader('Content-Type', 'application/json');
    };
    Response.prototype.setReponse = function () {
        var responseContent;
        if (typeof this.saveContent == ResponseTypeEnum_1.ResponseTypeEnum.String)
            responseContent = this.saveContent;
        else if (typeof this.saveContent === ResponseTypeEnum_1.ResponseTypeEnum.Object)
            responseContent = JSON.stringify(__assign({}, this.saveContent));
        return this.SERVER_RESPONSE.end(responseContent);
    };
    Response.prototype.handler = function (content) {
        this.saveContent = content;
        this.setHeader();
        this.setReponse();
    };
    return Response;
}());
exports.default = Response;
