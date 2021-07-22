/** 
 * Routes API
 * @module routers/Api
 * @author Daryl ABRADOR
 */

import Router from '../../core/routing/Router';
import ArticleController from '../controllers/ArticleController';

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

        Router.get('/api/articles', ArticleController.getArticles);
        Router.get('/api/article/:id', ArticleController.getSingleArticle);
        Router.post('/api/article', ArticleController.postArticle);
        Router.put('/api/article/:id', ArticleController.putArticle);
        Router.delete('/api/article/:id', ArticleController.deleteArticle);
    }
}

export default Api;