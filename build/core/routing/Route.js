"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Route = /** @class */ (function () {
    function Route(method, url, callback) {
        this.method = method;
        this.url = url;
        this.callback = callback;
    }
    return Route;
}());
exports.default = Route;
