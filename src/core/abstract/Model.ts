import Query from "./Query";

class Model extends Query {
    name: string;
    fields: Array<object> = [];

    constructor(name: string, fields: Array<object>) {
        super();
        this.name   = name;
        this.fields = fields;
    }
}

export default Model;