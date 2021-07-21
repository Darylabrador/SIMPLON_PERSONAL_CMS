"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = __importDefault(require("../core/config/Database"));
var ArticleController = /** @class */ (function () {
    function ArticleController() {
    }
    ArticleController.getArticles = function () {
        Database_1.default.query('SELECT * FROM `articles`', function (err, results) {
            if (err)
                return console.log(err);
            return console.log(results);
        });
    };
    return ArticleController;
}());
exports.default = ArticleController;
