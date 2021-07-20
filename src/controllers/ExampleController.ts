type route = { payload: object, view?: string };
import Viewer from "../core/templating/Viewer";

class ExampleController {
    public static getAccount(): void {
        Viewer.render('template', {title: "account"})
    }

    public static getSettings(): void {
        Viewer.renderAPI({title: "Settings"})
    }
}

export default ExampleController;