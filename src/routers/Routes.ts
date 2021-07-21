import Router from '../core/routing/Router';
import ExampleController from '../controllers/ExampleController';
import AccountController from '../controllers/AccountController';

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
        Router.get('/account', AccountController.getAccount);
    }
}

export default Routes;