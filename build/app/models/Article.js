"use strict";
/**
 * First article model
 * @author Daryl ABRADOR
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __importDefault(require("../../core/abstract/Model"));
var FieldTypes_1 = require("../../core/enum/FieldTypes");
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.table = 'articles';
        _this.fields = [
            { field: "id", type: FieldTypes_1.FieldTypes.Number },
            { field: "title", type: FieldTypes_1.FieldTypes.String },
            { field: "content", type: FieldTypes_1.FieldTypes.String },
        ];
        return _this;
    }
    return Article;
}(Model_1.default));
var article = new Article('articles', [
    { field: "id", type: FieldTypes_1.FieldTypes.Number },
    { field: "title", type: FieldTypes_1.FieldTypes.String },
    { field: "content", type: FieldTypes_1.FieldTypes.String },
]);
exports.default = article;
