"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var Router_1 = __importDefault(require("../routing/Router"));
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
    ConfigServer.prototype.startServer = function () {
        var server = http_1.createServer(function (request, response) {
            Router_1.default.check(request, response);
        });
        server.listen(this.port);
    };
    ConfigServer.start = function () {
        this.getInstance().startServer();
    };
    return ConfigServer;
}());
exports.default = ConfigServer;
