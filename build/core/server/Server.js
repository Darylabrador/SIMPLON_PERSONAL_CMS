"use strict";
/**
 * Server (singleton class)
 *
 * This file is used to generate the server and handle routes
 * @module core/server/Server
 * @author Daryl ABRADOR
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var Router_1 = __importDefault(require("../routing/Router"));
var Viewer_1 = __importDefault(require("../templating/Viewer"));
var Request_1 = __importDefault(require("./Request"));
var Response_1 = __importDefault(require("./Response"));
var url_1 = __importDefault(require("url"));
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
    Server.prototype.getParams = function (path) {
        return path === null || path === void 0 ? void 0 : path.slice(1)[path.length - 2];
    };
    Server.prototype.getQuery = function (baseURI) {
        return baseURI.query;
    };
    Server.prototype.check = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var baseURI, path, params, query, findRoute, data, viewContent, returningData, viewContent;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        baseURI = url_1.default.parse(request.url, true);
                        path = (_a = baseURI.pathname) === null || _a === void 0 ? void 0 : _a.split('/');
                        params = this.getParams(path);
                        query = this.getQuery(baseURI);
                        findRoute = Router_1.default.getAll().find(function (element) {
                            return (element.url.match(baseURI.path) && element.method == request.method) ||
                                (element.url.match(element.regexp, params) && element.url.replace(element.regexp, params) == baseURI.path && element.method == request.method);
                        });
                        console.log(findRoute);
                        if (!findRoute) return [3 /*break*/, 5];
                        if (!(typeof findRoute.callback === "function")) return [3 /*break*/, 4];
                        if (!findRoute.callback()) return [3 /*break*/, 4];
                        return [4 /*yield*/, request.setParams(params)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, request.setQuery(query)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, findRoute.callback(params, query)];
                    case 3:
                        data = _b.sent();
                        if (typeof data == "string") {
                            response.handler(data);
                        }
                        else if (data.view) {
                            viewContent = Viewer_1.default.render(data.view, data.payload);
                            response.handler(viewContent);
                        }
                        else {
                            returningData = void 0;
                            if (!data.payload)
                                returningData = { data: data };
                            else
                                returningData = data.payload;
                            response.handler({ entries: returningData });
                        }
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        viewContent = Viewer_1.default.render("error", {});
                        response.handler(viewContent);
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
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
