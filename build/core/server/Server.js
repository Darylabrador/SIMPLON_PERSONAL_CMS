"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var Router_1 = __importDefault(require("../routing/Router"));
var Viewer_1 = __importDefault(require("../templating/Viewer"));
var Request_1 = __importDefault(require("./Request"));
var Response_1 = __importDefault(require("./Response"));
var Server = /** @class */ (function () {
    function Server() {
        this.port = 3000;
    }
    Server.getInstance = function () {
        if (!this.instance) {
            this.instance = new Server();
        }
        return this.instance;
    };
    Server.prototype.check = function (request, response) {
        var findRoute = Router_1.default.getAll().find(function (element) { return element.method === request.method && element.url == request.url; });
        if (findRoute) {
            if (typeof findRoute.callback === "function") {
                if (findRoute.callback()) {
                    var data = findRoute.callback();
                    if (typeof data == "string") {
                        response.handler(data);
                    }
                    else if (data.view) {
                        var viewContent = Viewer_1.default.render(data.view, data.payload);
                        response.handler(viewContent);
                    }
                    else {
                        var returningData = void 0;
                        if (!data.payload)
                            returningData = { data: data };
                        else
                            returningData = data.payload;
                        response.handler({ entries: returningData });
                    }
                }
            }
        }
        else {
            var viewContent = Viewer_1.default.render("error", {});
            response.handler(viewContent);
        }
    };
    Server.prototype.startServer = function () {
        var _this = this;
        var server = http_1.createServer(function (request, response) {
            var requestHandler = new Request_1.default(request);
            var responseHandler = new Response_1.default(response);
            _this.check(requestHandler, responseHandler);
        });
        server.listen(this.port);
    };
    Server.start = function () {
        this.getInstance().startServer();
    };
    return Server;
}());
exports.default = Server;
