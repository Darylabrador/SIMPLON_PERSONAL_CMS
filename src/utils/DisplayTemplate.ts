import * as ejs   from "ejs";
import * as fs    from "fs";
import * as path  from "path";

class DisplayTemplate {
    filename: string;
    entries: object;

    constructor(filename: string, entries: object){
        this.filename = filename;
        this.entries = entries;
    }

    render() {
        const templatePath = path.join(__dirname,'..', 'views', `${this.filename}.ejs`);
        const values = { entries: this.entries };
        const template = fs.readFileSync(templatePath, 'utf8');
        return ejs.render(template, values);
    }
}

export default DisplayTemplate;