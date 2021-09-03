"use strict";
/**
 * Routes API
 * @module routers/Api
 * @author Daryl ABRADOR
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Router_1 = __importDefault(require("../../core/routing/Router"));
var ArticleController_1 = __importDefault(require("../controllers/ArticleController"));
var CommentController_1 = __importDefault(require("../controllers/CommentController"));
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.build = function () {
        Router_1.default.get('/api/joindre', function () {
            return {
                payload: [{
                        title: "Joindre page",
                        content: "Joindre content"
                    }]
            };
        });
        Router_1.default.get('/api/contact', function () {
            return {
                payload: { title: "Contact page" }
            };
        });
        Router_1.default.get('/api/articles', ArticleController_1.default.getApiArticles);
        Router_1.default.get('/api/articles/:id', ArticleController_1.default.getApiSingleArticle);
        Router_1.default.post('/api/articles', ArticleController_1.default.postArticle);
        Router_1.default.put('/api/articles/:id', ArticleController_1.default.putArticle);
        Router_1.default.delete('/api/articles/:id', ArticleController_1.default.deleteArticle);
        Router_1.default.get('/api/comments', CommentController_1.default.getComments);
        Router_1.default.get('/api/comment/:id', CommentController_1.default.getSingleComment);
        Router_1.default.post('/api/comment', CommentController_1.default.postComment);
        Router_1.default.put('/api/comment/:id', CommentController_1.default.putComment);
        Router_1.default.delete('/api/comment/:id', CommentController_1.default.deleteComment);
    };
    return Api;
}());
exports.default = Api;
