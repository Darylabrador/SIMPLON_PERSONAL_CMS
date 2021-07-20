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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MethodsEnum_1 = require("./MethodsEnum");
var Route_1 = __importDefault(require("./Route"));
var Rendering_1 = __importDefault(require("../templating/Rendering"));
var Router = /** @class */ (function () {
    function Router() {
        this.routes = [];
    }
    Router.getInstance = function () {
        if (!this.instance) {
            this.instance = new Router();
        }
        return this.instance;
    };
    Router.prototype.createRoute = function (method, url, callback) {
        this.routes.push(new Route_1.default(method, url, callback));
    };
    Router.get = function (url, callback) {
        this.getInstance().createRoute(MethodsEnum_1.MethodsEnum.Get, url, callback);
    };
    Router.post = function (url, callback) {
        this.getInstance().createRoute(MethodsEnum_1.MethodsEnum.Post, url, callback);
    };
    Router.put = function (url, callback) {
        this.getInstance().createRoute(MethodsEnum_1.MethodsEnum.Put, url, callback);
    };
    Router.delete = function (url, callback) {
        this.getInstance().createRoute(MethodsEnum_1.MethodsEnum.Delete, url, callback);
    };
    Router.check = function (request, response) {
        var method = request.method;
        var url = request.url;
        var findRoute = this.getInstance().routes.find(function (element) { return element.method === method && element.url == url; });
        if (findRoute) {
            if (findRoute.callback()) {
                var data = findRoute.callback();
                if (data.view) {
                    var output = new Rendering_1.default(data.view, data.payload);
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(output.web());
                    return response.end();
                }
                else {
                    response.setHeader('Content-Type', 'application/json');
                    response.end(JSON.stringify(__assign({}, data.payload)));
                }
            }
        }
        else {
            var output = new Rendering_1.default("error", {});
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(output.web());
            return response.end();
        }
    };
    return Router;
}());
exports.default = Router;
