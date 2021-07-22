import FieldInterface from "../interfaces/FieldInterface";
import Query from "../config/Query";

abstract class Model {
    table: string;
    fields: Array<FieldInterface> = [];
    query: any;

    constructor(table: string, fields: Array<FieldInterface>) {
        this.table   = table;
        this.fields  = fields;
        this.query   = new Query(table)
    }

    public findAll() {
        const query = new Query(this.table); 
        return query.findAll();
    }


    public find(id: Number) {
        const query = new Query(this.table); 
        return query.find(id);
    }
}

export default Model;