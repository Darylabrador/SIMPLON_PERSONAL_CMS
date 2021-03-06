"use strict";
/**
 * Request
 *
 * This file is used to handle request from server
 * It will parse all params we will need in the request depending method
 * @module core/server/Response
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
var MethodsEnum_1 = require("../enum/MethodsEnum");
var url_1 = __importDefault(require("url"));
var Request = /** @class */ (function () {
    function Request(request) {
        this.SERVER_REQUEST = request;
        this.url = request.url;
        this.method = request.method;
        this.setData();
    }
    ;
    Request.prototype.setData = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var baseURI, path, params, query, body, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        baseURI = url_1.default.parse(this.url, true);
                        path = (_a = baseURI.pathname) === null || _a === void 0 ? void 0 : _a.split('/');
                        params = path === null || path === void 0 ? void 0 : path.slice(1)[path.length - 2];
                        query = baseURI.query;
                        _b = this.method;
                        switch (_b) {
                            case MethodsEnum_1.MethodsEnum.Get: return [3 /*break*/, 1];
                            case MethodsEnum_1.MethodsEnum.Post: return [3 /*break*/, 2];
                            case MethodsEnum_1.MethodsEnum.Put: return [3 /*break*/, 4];
                            case MethodsEnum_1.MethodsEnum.Delete: return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        this.data = { params: params, query: query };
                        return [3 /*break*/, 8];
                    case 2: return [4 /*yield*/, this.parseBody()];
                    case 3:
                        body = _c.sent();
                        this.data = { body: body };
                        return [3 /*break*/, 8];
                    case 4: return [4 /*yield*/, this.parseBody()];
                    case 5:
                        body = _c.sent();
                        this.data = { params: params, body: body };
                        return [3 /*break*/, 8];
                    case 6:
                        this.data = { params: params };
                        return [3 /*break*/, 8];
                    case 7: return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Request.prototype.parseUrlEncoded = function (parsedBody) {
        var dataSplited = parsedBody.split('&');
        var dataObject = new Object();
        dataSplited.forEach(function (data) {
            var tab = data.split('=');
            var key = tab[0];
            var value = tab[1];
            dataObject[key] = value;
        });
        return dataObject;
    };
    Request.prototype.parseBody = function () {
        var _this = this;
        var body = [];
        return new Promise(function (resolve, reject) {
            _this.SERVER_REQUEST.on('data', function (chunk) {
                body.push(chunk);
            }).on('end', function () {
                var headerType = _this.SERVER_REQUEST.headers['content-type'];
                var parsedBody = Buffer.concat(body).toString();
                if (headerType == "application/json")
                    return resolve(JSON.parse(parsedBody));
                if (headerType == "application/x-www-form-urlencoded")
                    return resolve(_this.parseUrlEncoded(parsedBody));
                else
                    return resolve(parsedBody);
            });
        });
    };
    return Request;
}());
exports.default = Request;
