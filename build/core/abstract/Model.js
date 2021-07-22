"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Query_1 = __importDefault(require("../config/Query"));
var Model = /** @class */ (function () {
    function Model(table, fields) {
        this.fields = [];
        this.table = table;
        this.fields = fields;
        this.query = new Query_1.default(table);
    }
    Model.prototype.findAll = function () {
        var query = new Query_1.default(this.table);
        return query.findAll();
    };
    Model.prototype.find = function (id) {
        var query = new Query_1.default(this.table);
        return query.find(id);
    };
    return Model;
}());
exports.default = Model;
