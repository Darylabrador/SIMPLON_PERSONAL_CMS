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
var http_1 = require("http");
var Router_1 = __importDefault(require("../routing/Router"));
var Rendering_1 = __importDefault(require("../templating/Rendering"));
var ConfigServer = /** @class */ (function () {
    function ConfigServer() {
        this.port = 3000;
    }
    ConfigServer.getInstance = function () {
        if (!this.instance) {
            this.instance = new ConfigServer();
        }
        return this.instance;
    };
    ConfigServer.prototype.check = function (request, response) {
        var method = request.method;
        var url = request.url;
        var findRoute = Router_1.default.getAll().find(function (element) { return element.method === method && element.url == url; });
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
    ConfigServer.prototype.startServer = function () {
        var _this = this;
        var server = http_1.createServer(function (request, response) {
            _this.check(request, response);
        });
        server.listen(this.port);
    };
    ConfigServer.start = function () {
        this.getInstance().startServer();
    };
    return ConfigServer;
}());
exports.default = ConfigServer;
