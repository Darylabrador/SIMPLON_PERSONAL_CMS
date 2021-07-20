"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var Router_1 = __importDefault(require("../routing/Router"));
var Viewer_1 = __importDefault(require("../templating/Viewer"));
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
    ConfigServer.getResponse = function () {
        return this.getInstance().SERVER_RESPONSE;
    };
    ConfigServer.prototype.check = function (request, response) {
        var method = request.method;
        var url = request.url;
        var findRoute = Router_1.default.getAll().find(function (element) { return element.method === method && element.url == url; });
        this.SERVER_RESPONSE = response;
        if (findRoute) {
            if (typeof findRoute.callback === "function") {
                if (findRoute.callback()) {
                    var data = findRoute.callback();
                    if (data.view) {
                        Viewer_1.default.render(data.view, data.payload);
                    }
                    else {
                        Viewer_1.default.renderAPI({ entries: data.payload });
                    }
                }
            }
        }
        else {
            Viewer_1.default.render("error", {});
            ;
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
