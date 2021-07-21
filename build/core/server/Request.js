"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = /** @class */ (function () {
    function Request(request) {
        this.SERVER_REQUEST = request;
        this.url = request.url;
        this.method = request.method;
    }
    ;
    return Request;
}());
exports.default = Request;
