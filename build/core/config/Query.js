"use strict";
/**
 * Query
 *
 * This file is used to define all database dynamic query and use it in abstract model
 * @module core/config/Query
 * @author Daryl ABRADOR
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Query = /** @class */ (function () {
    function Query(table, fields) {
        this.fields = [];
        this.selectedFields = [];
        this.selectedCondition = "";
        this.selectedAction = "";
        this.table = table;
        this.fields = fields;
    }
    Query.prototype.select = function (args) {
        this.selectedFields = args;
        return this;
    };
    Query.prototype.where = function (args) {
        var _this = this;
        var conditions = "";
        if (typeof args === 'object') {
            conditions += " ( " + this.and(args) + " ) ";
        }
        else if (Array.isArray(args)) {
            args.map(function (arg, index) {
                if (arg && index === 0)
                    conditions += " ( " + _this.and(arg) + " ) ";
                if (arg && index > 0)
                    conditions += " OR " + " (" + _this.and(arg) + " ) ";
            });
        }
        if (conditions !== "")
            this.selectedCondition += " WHERE " + conditions;
        return this;
    };
    Query.prototype.and = function (args) {
        var conditions = "";
        var keys = Object.keys(args);
        if (keys && keys.length > 1) {
            keys.map(function (key, index) {
                if (key && index === 0)
                    conditions += key + " = " + args[key];
                if (key && index > 0)
                    conditions += " AND " + key + " = '" + args[key] + "'";
            });
        }
        else {
            conditions += keys[0] + " = '" + args[keys[0]] + "'";
        }
        return conditions;
    };
    Query.prototype.from = function (table, alias) {
        if (alias === void 0) { alias = null; }
        if (!alias) {
            this.table = table;
        }
        else {
            this.table = table + " AS " + alias;
        }
        return this;
    };
    Query.prototype.create = function (values) {
        var keys = Object.keys(values);
        var vals = Object.values(values);
        var arrayField = "" + keys[0];
        var arrayValues = "" + vals[0];
        for (var i = 1; i < keys.length; i++) {
            arrayField += ", " + keys[i];
        }
        for (var i = 1; i < vals.length; i++) {
            arrayValues += ", " + vals[i];
        }
        return "INSERT INTO " + this.table + " (" + arrayField + ") values (" + arrayValues + ")";
    };
    Query.prototype.update = function (search, values) {
        var keys = Object.keys(values);
        var vals = Object.values(values);
        var arrayField = keys[0] + " = " + vals[0];
        for (var i = 1; i < keys.length; i++) {
            arrayField += ", " + keys[i] + " = " + vals[i];
        }
        return "UPDATE " + this.table + " SET " + arrayField + " WHERE " + search;
    };
    Query.prototype.destroy = function (id) {
        return "DELETE FROM " + this.table + " WHERE id = " + id;
    };
    Query.prototype.toString = function () {
        var liestFields = (this.selectedFields.length > 0) ? this.selectedFields.join(', ') : '*';
        var query = 'SELECT ' + liestFields + ' FROM ' + this.table + this.selectedCondition;
        this.selectedFields = [];
        this.table = "";
        this.selectedCondition = "";
        return query;
    };
    return Query;
}());
exports.default = Query;
