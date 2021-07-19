type route = { url: string, payload: object, view: string, method: string };

class ExampleController {
    getIndexPage(): route {
        return {
            url: '/',
            payload: {title: "Page d'ccueil"},
            view: 'template',
            method: 'GET'
        }
    }
    
    getContactpage(): route {
        return {
            url: '/contact',
            payload: {title: "Page de contact"},
            view: 'template',
            method: 'GET'
        }
    }
}

export default ExampleController;