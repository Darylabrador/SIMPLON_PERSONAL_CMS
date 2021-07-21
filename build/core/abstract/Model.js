"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = __importDefault(require("../config/Database"));
var Model = /** @class */ (function () {
    function Model(name, fields) {
        this.fields = [];
        this.name = name;
        this.fields = fields;
    }
    Model.prototype.findAll = function () {
        Database_1.default.query("SELECT * FROM " + this.name, function (err, results) {
            if (err)
                return console.log(err);
            return results;
        });
    };
    return Model;
}());
exports.default = Model;
