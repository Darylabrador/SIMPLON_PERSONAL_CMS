"use strict";
/**
 * Routes WEB
 * @module routers/Routes
 * @author Daryl ABRADOR
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Router_1 = __importDefault(require("../../core/routing/Router"));
var ArticleController_1 = __importDefault(require("../controllers/ArticleController"));
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.build = function () {
        Router_1.default.get('/', function () {
            return {
                view: 'template',
                payload: { title: "Page d'accueil" }
            };
        });
        Router_1.default.get('/articles', ArticleController_1.default.getArticles);
        Router_1.default.get('/article/create', ArticleController_1.default.getCreateArticle);
        Router_1.default.get('/article/:id', ArticleController_1.default.getSingleArticle);
        Router_1.default.post('/article', ArticleController_1.default.postArticleHtml);
    };
    return Routes;
}());
exports.default = Routes;
