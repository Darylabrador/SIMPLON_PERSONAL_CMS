/** 
 * Viewer
 * 
 * It will find the template in views folder and return the data rendering by ejs (templating engine)
 * @module core/templating/Viewer
 * @author Daryl ABRADOR
 */

import * as ejs     from "ejs";
import * as fs      from "fs";
import * as path    from "path";

class Viewer {
    private constructor(){}

    public static render(filename: string, entries: object) {
        const rootFolder   =  path.resolve('./');
        const templatePath =  path.join(rootFolder, 'build', 'app', 'views', `${filename}.ejs`);
        const values = { ...entries };
        const template = fs.readFileSync(templatePath, 'utf8');
        return ejs.render(template, values);
    }
}

export default Viewer;