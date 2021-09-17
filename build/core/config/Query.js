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
        this.selectedJoin = "";
        this.selectedJoinField = "";
        this.table = table;
        this.fields = fields;
    }
    Query.prototype.select = function (args) {
        this.selectedFields = args;
        return this;
    };
    Query.prototype.where = function (args) {
        var conditions = "";
        if (Array.isArray(args)) {
            if (args.length > 1) {
                if (args[0][2].includes('%'))
                    args[0][2] = "'" + args[0][2] + "'";
                conditions += " " + args[0][0] + " " + args[0][1] + " " + args[0][2] + " ";
                for (var index = 1; index < args.length; index++) {
                    if (args[index][0].includes('%'))
                        args[index][0] = "'" + args[index][0] + "'";
                    conditions += " AND " + args[index][0] + " " + args[index][1] + " " + args[index][2] + " ";
                }
            }
            else {
                args.forEach(function (element) {
                    if (element[2].includes('%'))
                        element[2] = "'" + element[2] + "'";
                    conditions += " " + element[0] + " " + element[1] + " " + element[2] + " ";
                });
            }
        }
        if (typeof args === 'object' && !Array.isArray(args)) {
            conditions += " " + this.and(args) + " ";
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
        var arrayValues = "'" + vals[0] + "'";
        for (var i = 1; i < keys.length; i++) {
            arrayField += ", " + keys[i];
        }
        for (var i = 1; i < vals.length; i++) {
            arrayValues += ", '" + vals[i] + "'";
        }
        console.log("INSERT INTO " + this.table + " (" + arrayField + ") values (" + arrayValues + ")");
        return "INSERT INTO " + this.table + " (" + arrayField + ") values (" + arrayValues + ")";
    };
    Query.prototype.update = function (search, values) {
        var keys = Object.keys(values);
        var vals = Object.values(values);
        var keys2 = Object.keys(search);
        var vals2 = Object.values(search);
        var conditionSearch = keys2[0] + " = " + vals2[0];
        for (var i = 1; i < keys2.length; i++) {
            conditionSearch += " AND " + keys2[i] + " = '" + vals2[i] + "'";
        }
        var arrayField = keys[0] + " = '" + vals[0] + "'";
        for (var i = 1; i < keys.length; i++) {
            arrayField += ", " + keys[i] + " = '" + vals[i] + "'";
        }
        console.log("UPDATE " + this.table + " SET " + arrayField + " WHERE " + conditionSearch);
        return "UPDATE " + this.table + " SET " + arrayField + " WHERE " + conditionSearch;
    };
    Query.prototype.delete = function (search) {
        var keys2 = Object.keys(search);
        var vals2 = Object.values(search);
        var conditionSearch = keys2[0] + " = " + vals2[0];
        for (var i = 1; i < keys2.length; i++) {
            conditionSearch += " AND " + keys2[i] + " = '" + vals2[i] + "'";
        }
        return "DELETE FROM " + this.table + " WHERE " + conditionSearch;
    };
    /**
     * Model format after join :
     *
     * modelnamefield
     */
    Query.prototype.defineJoin = function (queryString) {
        this.selectedJoin += queryString;
    };
    Query.prototype.defineJoinField = function (joinFields) {
        if (joinFields === void 0) { joinFields = null; }
        if (joinFields)
            this.selectedJoinField += ", " + joinFields + " ";
    };
    Query.prototype.toString = function () {
        var _this = this;
        var liestFields = (this.selectedFields.length > 0) ? this.selectedFields.join(", ") : '*';
        var query = "";
        if (this.selectedJoin != "") {
            var arrayFields_1 = [];
            this.fields.forEach(function (element) {
                arrayFields_1.push(_this.table + "." + element.field + " AS " + _this.table + element.field + " ");
            });
            var arrayFieldSelect = arrayFields_1.join(', ');
            query = 'SELECT ' + arrayFieldSelect + this.selectedJoinField + ' FROM ' + this.table + this.selectedJoin + this.selectedCondition;
        }
        else {
            query = 'SELECT ' + liestFields + ' FROM ' + this.table + this.selectedCondition;
        }
        console.log(query);
        this.selectedJoin = "";
        this.selectedJoinField = "";
        this.selectedFields = [];
        this.table = "";
        this.selectedCondition = "";
        return query;
    };
    return Query;
}());
exports.default = Query;
