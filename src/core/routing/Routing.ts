interface routes {url: string, title: string, template: string, method: string}[];

class Routing {
    routes: routes[] = [];

    constructor() {
        this.routes = [];
    }

    add(url: string, title: string, template: string, method: string){
        const urlExist = this.routes.find(element => element.url === url)
        if(!urlExist) this.routes.push({url, title, template, method});
    }

    remove(url: string){
        const filteredUrl = this.routes.filter(element => element.url != url);
        this.routes = filteredUrl;
    }

    deleteAll() {
        this.routes = [];
    }
}

export default Routing;