/** 
 * Routes WEB
 * @module routers/Routes
 * @author Daryl ABRADOR
 */

import Router from '../../core/routing/Router';
import ArticleController from '../controllers/ArticleController';


class Routes {
    static build() {
        Router.get('/', () => {
            return {
                view: 'template',
                payload: { title: "Page d'accueil" }
            }
        });

        Router.get('/articles', ArticleController.getArticles)
        Router.get('/articles/create', ArticleController.getCreateArticle)
        Router.get('/articles/:id', ArticleController.getSingleArticle);
        Router.post('/articles', ArticleController.postArticleHtml)
    }
}

export default Routes;