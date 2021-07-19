type route = { url: string, payload: object, view: string, method: string };
interface routes { url: string, payload: object, view: string, method: string }[];

class Routing {
    routes: routes[] = [];

    constructor() {
        this.routes = [];
    }

    add(url: string, payload: object, view: string, method: string) {
        const urlExist = this.routes.find(element => element.url === url)
        if (!urlExist) this.routes.push({ url, payload, view, method });
    }

    remove(url: string) {
        const filteredUrl = this.routes.filter(element => element.url != url);
        this.routes = filteredUrl;
    }

    addFromController(payload: route) {
        const urlExist = this.routes.find(element => element.url === payload.url)
        if (!urlExist) this.routes.push({ ...payload });
    }

    deleteAll() {
        this.routes = [];
    }
}

export default Routing;