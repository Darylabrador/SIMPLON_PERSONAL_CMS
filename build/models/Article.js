"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __importDefault(require("../core/abstract/Model"));
var FieldTypes_1 = require("../core/enum/FieldTypes");
var Article = new Model_1.default('articles', [
    { field: "id", type: FieldTypes_1.FieldTypes.Number },
    { field: "title", type: FieldTypes_1.FieldTypes.String },
    { field: "content", type: FieldTypes_1.FieldTypes.String },
]);
exports.default = Article;
