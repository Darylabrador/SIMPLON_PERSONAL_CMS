/** 
 * Article controller
 * That's controller return only data that will be transform as json thanks to response class
 */

import Request from "../../core/server/Request";
import Viewer from "../../core/templating/Viewer";
import Article from "../models/Article";

class ArticleController {
    public static async getArticles() {
        try {     
            const articles = await Article.findAll();
            return Viewer.render('templateObject', { articles })
        } catch (error) {
            console.log('error in articles', error)
        }
    }

    public static async getSingleArticle(request: Request) {
        try {
            const  { data }  = request;
            const id         = data.params; 
            const articles   = await Article.find(id)
            return Viewer.render('templateObject', { articles })
        } catch (error) {
            console.log('error in signle article ', error)
        }
    }

    public static postArticle(request: Request) {
        console.log('post article in controller ', request.data)
        return {test: "test post"};
    }

    public static putArticle(request: Request) {
        console.log('put article in controller ', request.data)
        return {message: 'test update article'}
    }

    public static deleteArticle(request: Request) {
        console.log('delete article in controller ', request.data)
        return {message: 'test delete article'}
    }
}

export default ArticleController;