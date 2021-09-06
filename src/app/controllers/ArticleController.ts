/** 
 * Article controller
 * That's controller return only data that will be transform as json thanks to response class
 */

import Request from "../../core/server/Request";
import Viewer from "../../core/templating/Viewer";
import Article from "../models/Article";
import Comment from "../models/Comments";

class ArticleController {
    public static async getArticles() {
        try {     
            const articles = await Article.findAll();
            return Viewer.render('templateObject', { articles })
        } catch (error) {
            console.log('error in articles (html)', error)
        }
    }

    public static async getSingleArticle(request: Request) {
        try {
            const  { data }  = request;
            const id         = data.params; 
            const article    = await Article.find(id)
            return Viewer.render('templateSingleObject', { article })
        } catch (error) {
            console.log('error in single article (html)', error)
        }
    }

    public static async getApiArticles() {
        try {     
            const articles = await Article.findAll();
            return articles;
        } catch (error) {
            console.log('error in articles (api)', error)
        }
    }

    public static async getApiSingleArticle(request: Request) {
        try {
            const  { data }  = request;
            const id         = data.params; 
            const articles   = await Article.find(id)
            return articles;
        } catch (error) {
            console.log('error in single article (api)', error)
        }
    }

    public static getCreateArticle() {
        return Viewer.render('createArticle', { title: 'Create article' })
    }

    
    public static async postArticle(request: any) {
        try {
            const {title, content} = request.data.body;
            const createdArticle = await Article.create({ title, content});
            return {id: createdArticle.insertId, title, content}
        } catch (error) {
            console.log('error in post article (api)', error)
        }
    }

    public static postArticleHtml(request: Request) {
        console.log('post article in controller ', request.data)
        return {test: "test post html"};
    }

    public static async putArticle(request: Request) {
        try {
            const  { data }         = request;
            const id                = data.params; 
            const {title, content}  = data.body;
            await Article.update({id}, {title, content});
            return {message: 'article was updated'}
        } catch (error) {
            console.log('Error in put article (api)', error)
        }

    }

    public static async deleteArticle(request: Request) {
        try {
            const  { data }  = request;
            const id         = data.params; 
            await Article.delete({id});
            return {message: 'article was deleted'}
        } catch (error) {
            console.log('error in delete article (api)', error)
        }
    }
}

export default ArticleController;