"use strict";
/**
 * Model
 *
 * This file extends all model classes to enable all database query
 * @module core/config/Query
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Query_1 = __importDefault(require("../config/Query"));
var Database_1 = __importDefault(require("../config/Database"));
var Model = /** @class */ (function () {
    function Model(table, fields) {
        this.fields = [];
        this.selection = [];
        this.jointure = "";
        this.whereArray = [];
        this.table = table;
        this.fields = fields;
        this.query = new Query_1.default(table, fields);
    }
    Model.prototype.findAll = function (data) {
        if (data === void 0) { data = null; }
        var queryString = "";
        if (!data) {
            queryString = this.query.select(this.selection).from(this.table).toString();
        }
        else {
            queryString = this.query.select(this.selection).from(this.table).where(data).toString();
        }
        return this.runQuery(queryString);
    };
    Model.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryString = this.query.select(this.selection).from(this.table).where({ id: id }).toString();
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Model.prototype.create = function (values) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryString = this.query.create(values);
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Model.prototype.update = function (search, values) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryString = this.query.update(search, values);
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Model.prototype.delete = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.query = new Query_1.default(this.table, this.fields);
                        queryString = this.query.delete(search);
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Model.prototype.selectFields = function (data) {
        this.selection = data;
        return this;
    };
    Model.prototype.excludeFields = function (data) {
        var temp = [];
        this.fields.map(function (item) {
            if (!data.includes(item.field)) {
                temp.push(item.field);
            }
        });
        this.selection = __spreadArray([], temp);
        temp = [];
        return this;
    };
    Model.prototype.resetSelection = function () {
        this.selection = [];
    };
    Model.prototype.runQuery = function (queryString) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.resetSelection();
                        return [4 /*yield*/, Database_1.default.query(queryString)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, { error: error_1 }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Model.prototype.setJoin = function (queryString) {
        this.query.defineJoin(queryString);
    };
    /**
     * Model format after join :
     *
     * Ex :
     *
     * Article.defineJoin(['comments', 'comments.article_id', '=', 'articles.id', 'articles'])
     */
    Model.prototype.defineJoin = function (model, fields) {
        var arrayFields = [];
        model.fields.forEach(function (element) {
            if (!element.field.includes('_id')) {
                arrayFields.push(" " + model.table + "." + element.field + " AS " + model.table + element.field + " ");
            }
        });
        var arrayFieldSelect = arrayFields.join(', ');
        this.query.defineJoinField(arrayFieldSelect);
        this.setJoin(" LEFT JOIN " + fields[0] + " ON " + fields[1] + " " + fields[2] + " " + fields[3] + " ");
        return this;
    };
    return Model;
}());
exports.default = Model;
