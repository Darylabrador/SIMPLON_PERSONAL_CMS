import * as ejs     from "ejs";
import * as fs      from "fs";
import * as path    from "path";
import { ServerResponse } from 'http';
import ConfigServer from "../server/ConfigServer";

class Viewer {
    private constructor(){}

    public static render(filename: string, entries: object) {
        const response     = ConfigServer.getResponse();
        const rootFolder   = path.resolve('./');
        const templatePath = path.join(rootFolder, 'build', 'views', `${filename}.ejs`);
        const values = { ...entries };
        const template = fs.readFileSync(templatePath, 'utf8');
        const output = ejs.render(template, values);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(output);
        return response.end();
    }

    public static renderAPI(entries: object) {
        const response     = ConfigServer.getResponse();
        response.setHeader('Content-Type', 'application/json');
        return response.end(JSON.stringify({...entries}));
    }
}

export default Viewer;