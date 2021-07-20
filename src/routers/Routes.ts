import { IncomingMessage, ServerResponse } from 'http';
import Router from '../core/routing/Router';
import Rendering from '../core/templating/Viewer';

import ExampleController from '../controllers/ExampleController';

class Routes {
    static build() {
        Router.get('/', () => {
            return {
                view: 'template',
                payload: { title: "Page d'accueil" }
            }
        });

        Router.get('/contact', () => {
            return {
                payload: { title: "Contact page" }
            }
        });

        Router.get('/account', ExampleController.getAccount);
         
        Router.get('/settings', ExampleController.getSettings);
    }
}

export default Routes;