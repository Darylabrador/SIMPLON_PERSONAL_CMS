import Article from "../models/Article";

class ArticleController {
    public static async getArticles() {
        return Article.findAll();
    }

    public static async getSingleArticle() {
        return Article.findByPk(1);
    }
}

export default ArticleController;