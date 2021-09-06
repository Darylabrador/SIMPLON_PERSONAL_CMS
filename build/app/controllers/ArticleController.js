"use strict";
/**
 * Article controller
 * That's controller return only data that will be transform as json thanks to response class
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
var Viewer_1 = __importDefault(require("../../core/templating/Viewer"));
var Article_1 = __importDefault(require("../models/Article"));
var ArticleController = /** @class */ (function () {
    function ArticleController() {
    }
    ArticleController.getArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var articles, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Article_1.default.findAll()];
                    case 1:
                        articles = _a.sent();
                        return [2 /*return*/, Viewer_1.default.render('templateObject', { articles: articles })];
                    case 2:
                        error_1 = _a.sent();
                        console.log('error in articles (html)', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArticleController.getSingleArticle = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, id, article, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = request.data;
                        id = data.params;
                        return [4 /*yield*/, Article_1.default.find(id)];
                    case 1:
                        article = _a.sent();
                        return [2 /*return*/, Viewer_1.default.render('templateSingleObject', { article: article })];
                    case 2:
                        error_2 = _a.sent();
                        console.log('error in single article (html)', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArticleController.getApiArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var articles, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Article_1.default.findAll({ id: 2 })];
                    case 1:
                        articles = _a.sent();
                        return [2 /*return*/, articles];
                    case 2:
                        error_3 = _a.sent();
                        console.log('error in articles (api)', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArticleController.getApiSingleArticle = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, id, articles, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = request.data;
                        id = data.params;
                        return [4 /*yield*/, Article_1.default.find(id)];
                    case 1:
                        articles = _a.sent();
                        return [2 /*return*/, articles];
                    case 2:
                        error_4 = _a.sent();
                        console.log('error in single article (api)', error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArticleController.getCreateArticle = function () {
        return Viewer_1.default.render('createArticle', { title: 'Create article' });
    };
    ArticleController.postArticle = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, content, createdArticle, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.data.body, title = _a.title, content = _a.content;
                        return [4 /*yield*/, Article_1.default.create({ title: title, content: content })];
                    case 1:
                        createdArticle = _b.sent();
                        return [2 /*return*/, { id: createdArticle.insertId, title: title, content: content }];
                    case 2:
                        error_5 = _b.sent();
                        console.log('error in post article (api)', error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArticleController.postArticleHtml = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, content, articles, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        console.log('post article in controller ', request.data);
                        _a = request.data.body, title = _a.title, content = _a.content;
                        return [4 /*yield*/, Article_1.default.create({ title: title, content: content })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, Article_1.default.findAll()];
                    case 2:
                        articles = _b.sent();
                        return [2 /*return*/, Viewer_1.default.render('templateObject', { articles: articles })];
                    case 3:
                        error_6 = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArticleController.putArticle = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, id, _a, title, content, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = request.data;
                        id = data.params;
                        _a = data.body, title = _a.title, content = _a.content;
                        return [4 /*yield*/, Article_1.default.update({ id: id }, { title: title, content: content })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, { message: 'article was updated' }];
                    case 2:
                        error_7 = _b.sent();
                        console.log('Error in put article (api)', error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArticleController.deleteArticle = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, id, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = request.data;
                        id = data.params;
                        return [4 /*yield*/, Article_1.default.delete({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { message: 'article was deleted' }];
                    case 2:
                        error_8 = _a.sent();
                        console.log('error in delete article (api)', error_8);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ArticleController;
}());
exports.default = ArticleController;
