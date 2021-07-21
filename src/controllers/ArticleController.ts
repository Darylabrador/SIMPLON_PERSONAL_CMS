import Article from "../models/Article";
import Database from "../core/config/Database";

class ArticleController {
    public static async getArticles() {
        const articles = await Database.query("SELECT * FROM articles", [])
        return articles;
    }
}

export default ArticleController;