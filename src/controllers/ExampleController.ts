type route = { payload: object, view?: string };

class ExampleController {
    getIndexPage(): route {
        return {
            payload: { title: "Page d'accueil" },
            view: 'template'
        }
    }

    getContactpage(): route {
        return {
            payload: { title: "Page de contact" },
            view: 'template',
        }
    }
}

export default ExampleController;