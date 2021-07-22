import Article from "../models/Article";

class ArticleController {
    public static getArticles() {
        return Article.findAll();
    }

    public static getSingleArticle() {
        return Article.find(1);
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