import Article from "../models/Article";
import Database from "../core/config/Database";

class ArticleController {
    public static getArticles(): any {
        Database.query(
            'SELECT * FROM `articles`',
            function(err: any, results: any) {
                if(err) return console.log(err);
                return console.log(results);
            }
        )
    }
}

export default ArticleController;