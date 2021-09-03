/** 
 * Routes API
 * @module routers/Api
 * @author Daryl ABRADOR
 */

import Router from '../../core/routing/Router';
import ArticleController from '../controllers/ArticleController';
import CommentController from '../controllers/CommentController';

class Api {
    static build() {
        Router.get('/api/joindre', () => {
            return {
                payload: [{ 
                    title: "Joindre page",
                    content: "Joindre content"
                }]
            }
        }); 

        Router.get('/api/contact', () => {
            return {
                payload: { title: "Contact page" }
            }
        });

        Router.get('/api/articles', ArticleController.getApiArticles)
        Router.get('/api/articles/:id', ArticleController.getApiSingleArticle)
        Router.post('/api/articles', ArticleController.postArticle);
        Router.put('/api/articles/:id', ArticleController.putArticle);
        Router.delete('/api/articles/:id', ArticleController.deleteArticle);


        Router.get('/api/comments', CommentController.getComments)
        Router.get('/api/comment/:id', CommentController.getSingleComment)
        Router.post('/api/comment', CommentController.postComment);
        Router.put('/api/comment/:id', CommentController.putComment);
        Router.delete('/api/comment/:id', CommentController.deleteComment);
    }
}

export default Api;