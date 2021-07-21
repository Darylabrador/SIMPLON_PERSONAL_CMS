import Viewer from "../core/templating/Viewer";

class ExampleController {
    public static getSettings(): any {
        return Viewer.render('template', {title: "Setting page"});
    }
}

export default ExampleController;