import Article from "../models/Article";

class ArticleController {
    public static getArticles() {
        return Article.findAll();
    }

    public static getSingleArticle() {
        return Article.findByPk(1);
    }
}

export default ArticleController;