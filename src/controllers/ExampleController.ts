type route = { payload: object, view?: string };
import Viewer from "../core/templating/Viewer";

class ExampleController {
    public static getAccount(): void {
        const data = {
            name: "John",
            surname: "DOE",
            email: "johndoe@gmail.com"
        }
        Viewer.renderAPI(data)
    }

    public static getSettings(): void {
        Viewer.render('template', {title: "Setting page"})
    }
}

export default ExampleController;