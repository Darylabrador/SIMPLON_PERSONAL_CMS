"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Article_1 = __importDefault(require("../models/Article"));
var ArticleController = /** @class */ (function () {
    function ArticleController() {
    }
    ArticleController.getArticles = function () {
        return Article_1.default.findAll();
    };
    ArticleController.getSingleArticle = function () {
        return Article_1.default.findByPk(1);
    };
    return ArticleController;
}());
exports.default = ArticleController;
