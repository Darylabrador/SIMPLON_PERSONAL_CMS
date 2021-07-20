import { IncomingMessage, ServerResponse } from 'http';
import Router from '../core/routing/Router';
import Rendering from '../core/templating/Rendering';

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
    }
}

export default Routes;