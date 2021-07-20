import * as ejs     from "ejs";
import * as fs      from "fs";
import * as path    from "path";

class Rendering {
    filename: string;
    entries: object;

    constructor(filename: string, entries: object){
        this.filename = filename;
        this.entries = entries;
    }

    web() {
        const rootFolder   = path.resolve('./');
        const templatePath = path.join(rootFolder, 'build', 'views', `${this.filename}.ejs`);
        const values = { ...this.entries };
        const template = fs.readFileSync(templatePath, 'utf8');
        return ejs.render(template, values);
    }
}

export default Rendering;