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
var url_1 = __importDefault(require("url"));
var MethodsEnum_1 = require("../enum/MethodsEnum");
var Request = /** @class */ (function () {
    function Request(request) {
        var _a;
        this.SERVER_REQUEST = request;
        this.url = request.url;
        this.method = request.method;
        var baseURI = url_1.default.parse(this.url, true);
        var path = (_a = baseURI.pathname) === null || _a === void 0 ? void 0 : _a.split('/');
        switch (this.method) {
            case MethodsEnum_1.MethodsEnum.Get:
                this.query = this.getQuery(baseURI);
                this.params = this.getParams(path);
                break;
            case MethodsEnum_1.MethodsEnum.Post:
                console.log('retrieve body');
                break;
            case MethodsEnum_1.MethodsEnum.Put:
                this.params = this.getParams(path);
                break;
            case MethodsEnum_1.MethodsEnum.Delete:
                this.params = this.getParams(path);
                break;
            default:
                break;
        }
    }
    ;
    Request.prototype.getParams = function (path) {
        return path === null || path === void 0 ? void 0 : path.slice(1)[1];
    };
    Request.prototype.getQuery = function (baseURI) {
        return baseURI.query;
    };
    Request.prototype.getBody = function () {
    };
    return Request;
}());
exports.default = Request;
