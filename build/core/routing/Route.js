"use strict";
/**
 * Route
 *
 * This file is used to define what the created route need as params
 * @module core/routing/Route
 * @author Daryl ABRADOR
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Route = /** @class */ (function () {
    function Route(method, url, callback, regexp) {
        this.method = method;
        this.url = url;
        this.callback = callback;
        this.regexp = regexp;
    }
    return Route;
}());
exports.default = Route;
