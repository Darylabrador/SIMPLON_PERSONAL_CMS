"use strict";
/**
 * Article controller
 * That's controller return only data that will be transform as json thanks to response class
 */
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
    ArticleController.getSingleArticle = function (id) {
        console.log('in controller ', id);
        return Article_1.default.find(id);
    };
    ArticleController.postArticle = function () {
        return { message: 'test create article' };
    };
    ArticleController.putArticle = function () {
        return { message: 'test update article' };
    };
    ArticleController.deleteArticle = function () {
        return { message: 'test delete article' };
    };
    return ArticleController;
}());
exports.default = ArticleController;
