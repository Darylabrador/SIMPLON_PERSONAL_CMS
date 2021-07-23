"use strict";
/**
 * Request
 *
 * This file is used to handle request from server
 * It will parse all params we will need in the request depending method
 * @module core/server/Response
 * @author Daryl ABRADOR
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MethodsEnum_1 = require("../enum/MethodsEnum");
var url_1 = __importDefault(require("url"));
var Request = /** @class */ (function () {
    function Request(request) {
        this.SERVER_REQUEST = request;
        this.url = request.url;
        this.method = request.method;
        this.setData(request);
    }
    ;
    Request.prototype.setData = function (request) {
        var _this = this;
        var _a;
        var baseURI = url_1.default.parse(request.url, true);
        var path = (_a = baseURI.pathname) === null || _a === void 0 ? void 0 : _a.split('/');
        var params = path === null || path === void 0 ? void 0 : path.slice(1)[path.length - 2];
        var query = baseURI.query;
        var body = [];
        switch (request.method) {
            case MethodsEnum_1.MethodsEnum.Get:
                this.data = { params: params, query: query };
            case MethodsEnum_1.MethodsEnum.Post:
                this.SERVER_REQUEST.on('data', function (chunk) {
                    body.push(chunk);
                }).on('end', function () {
                    var parsedBody = Buffer.concat(body).toString();
                    _this.data = { body: parsedBody };
                });
            case MethodsEnum_1.MethodsEnum.Put:
                this.SERVER_REQUEST.on('data', function (chunk) {
                    body.push(chunk);
                }).on('end', function () {
                    var parsedBody = Buffer.concat(body).toString();
                    _this.data = { params: params, body: parsedBody };
                });
            case MethodsEnum_1.MethodsEnum.Delete:
                this.data = { params: params };
            default:
                break;
        }
    };
    return Request;
}());
exports.default = Request;
