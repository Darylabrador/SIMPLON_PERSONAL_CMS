import Router from '../core/routing/Router';
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

        Router.get('/joindre', () => {
            return {
                payload: [{ 
                    title: "Joindre page",
                    content: "Joindre content"
                }]
            }
        });

        Router.get('/contact', () => {
            return {
                payload: { title: "Contact page" }
            }
        });
        
        Router.get('/settings', ExampleController.getSettings);

        Router.get('/articles', ArticleController.getArticles);
        Router.get('/article/1', ArticleController.getSingleArticle);
        Router.post('/article', ArticleController.postArticle);
        Router.put('/article/:1', ArticleController.putArticle);
        Router.delete('/article/:1', ArticleController.deleteArticle);
    }
}

export default Routes;