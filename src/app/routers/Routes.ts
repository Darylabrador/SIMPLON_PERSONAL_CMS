/** 
 * Routes WEB
 * @module routers/Routes
 * @author Daryl ABRADOR
 */

import Router from '../../core/routing/Router';
import ExampleController from '../controllers/ExampleController';
import ArticleController from '../controllers/ArticleController';


class Routes {
    static build() {
        Router.get('/', () => {
            return {
                view: 'template',
                payload: { title: "Page d'accueil" }
            }
        });

        Router.get('/settings', ExampleController.getSettings);
        Router.get('/articles', ArticleController.getArticles)
        Router.get('/article/create', ArticleController.getCreateArticle)
        Router.get('/article/:id', ArticleController.getSingleArticle);
        Router.post('/article', ArticleController.postArticleHtml)

    }
}

export default Routes;