/** 
 * Article controller
 * That's controller return only data that will be transform as json thanks to response class
 */

import Article from "../models/Article";

class ArticleController {
    public static getArticles() {
        return Article.findAll();
    }

    public static getSingleArticle(id: any) {
        return Article.find(id);
    }

    public static postArticle() {
        return {message: 'test create article'}
    }

    public static putArticle() {
        return {message: 'test update article'}
    }

    public static deleteArticle() {
        return {message: 'test delete article'}
    }
}

export default ArticleController;