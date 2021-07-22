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
    }
}

export default Routes;