"use strict";
/**
 * Model
 *
 * This file extends all model classes to enable all database query
 * @module core/config/Query
 * @author Daryl ABRADOR
 */
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
    }
    Model.prototype.findAll = function () {
        var query = new Query_1.default(this.table, this.fields);
        return query.findAll();
    };
    Model.prototype.find = function (id) {
        var query = new Query_1.default(this.table, this.fields);
        return query.find(id);
    };
    Model.prototype.create = function (values) {
        var query = new Query_1.default(this.table, this.fields);
        return query.create(values);
    };
    Model.prototype.delete = function (id) {
        var query = new Query_1.default(this.table, this.fields);
        return query.delete(id);
    };
    Model.prototype.update = function (id, values) {
        var query = new Query_1.default(this.table, this.fields);
        return query.update(id, values);
    };
    return Model;
}());
exports.default = Model;
