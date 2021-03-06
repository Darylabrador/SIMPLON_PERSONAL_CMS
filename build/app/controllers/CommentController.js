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
var Comments_1 = __importDefault(require("../models/Comments"));
var CommentController = /** @class */ (function () {
    function CommentController() {
    }
    CommentController.getComments = function () {
        return __awaiter(this, void 0, void 0, function () {
            var comments, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Comments_1.default.findAll()];
                    case 1:
                        comments = _a.sent();
                        return [2 /*return*/, comments];
                    case 2:
                        error_1 = _a.sent();
                        console.log('error in comments (api)', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommentController.getSingleComment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, id, comments, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = request.data;
                        id = data.params;
                        return [4 /*yield*/, Comments_1.default.find(id)];
                    case 1:
                        comments = _a.sent();
                        return [2 /*return*/, comments];
                    case 2:
                        error_2 = _a.sent();
                        console.log('error in single comment (api)', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommentController.postComment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, content, article_id, createdComment, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.data.body, content = _a.content, article_id = _a.article_id;
                        return [4 /*yield*/, Comments_1.default.create({ content: content, article_id: article_id })];
                    case 1:
                        createdComment = _b.sent();
                        return [2 /*return*/, { id: createdComment.insertId, content: content }];
                    case 2:
                        error_3 = _b.sent();
                        console.log('error in post comment (api)', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommentController.putComment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, id, content, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = request.data;
                        id = data.params;
                        content = data.body.content;
                        return [4 /*yield*/, Comments_1.default.update({ id: id }, { content: content })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { message: 'comment was updated' }];
                    case 2:
                        error_4 = _a.sent();
                        console.log('Error in put comment (api)', error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommentController.deleteComment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, id, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = request.data;
                        id = data.params;
                        return [4 /*yield*/, Comments_1.default.delete({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { message: 'comment was deleted' }];
                    case 2:
                        error_5 = _a.sent();
                        console.log('error in delete article (api)', error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CommentController;
}());
exports.default = CommentController;
