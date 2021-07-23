/** 
 * Model
 * 
 * This file extends all model classes to enable all database query
 * @module core/config/Query
 * @author Daryl ABRADOR
 */

import FieldInterface from "../interfaces/FieldInterface";
import Query from "../config/Query";

abstract class Model {
    table: string;
    fields: Array<FieldInterface> = [];

    constructor(table: string, fields: Array<FieldInterface>) {
        this.table   = table;
        this.fields  = fields;
    }

    public findAll() {
        const query = new Query(this.table, this.fields); 
        return query.findAll();
    }

    public find(id: Number) {
        const query = new Query(this.table, this.fields); 
        return query.find(id);
    }
}

export default Model;