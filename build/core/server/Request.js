"use strict";
/**
 * Request
 *
 * This file is used to handle request from server
 * It will parse all params we will need in the request depending method
 * @module core/server/Response
 * @author Daryl ABRADOR
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Request = /** @class */ (function () {
    function Request(request) {
        this.SERVER_REQUEST = request;
        this.url = request.url;
        this.method = request.method;
    }
    ;
    Request.prototype.setQuery = function (query) {
        this.query = query;
    };
    Request.prototype.setParams = function (params) {
        this.params = params;
    };
    Request.prototype.setBody = function (body) {
        this.body = body;
    };
    return Request;
}());
exports.default = Request;
