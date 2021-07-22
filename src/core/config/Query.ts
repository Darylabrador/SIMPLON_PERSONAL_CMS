/** 
 * Query
 * 
 * This file is used to define all database dynamic query and use it in abstract model
 * @module core/config/Query
 * @author Daryl ABRADOR
 */

 import FieldInterface from "../interfaces/FieldInterface";
import Database from "./Database";

class Query {
    table: string;
    fields: Array<FieldInterface> = [];
    searchFields: string = "";

    constructor(table: string, fields: Array<FieldInterface>) {
        this.table = table;
        this.fields = fields;

        this.searchFields += fields[0].field;

        for(let i = 1; i < fields.length; i++) {
            this.searchFields += `, ${fields[i].field}`
        }
        
  
    }

    async findAll() {
        try {
            const requestData = await Database.query(`SELECT ${this.searchFields} FROM ${this.table}`, [])
            return requestData;
        } catch (error) {
            console.log("Error in class query: findAll()")
            console.log(error);
        }
    }

    async find(id: Number) {
        try {
            const requestData = await Database.query(`SELECT ${this.searchFields} FROM ${this.table} where id = ?`, [id])
            return requestData;
        } catch (error) {
            console.log("Error in class query: find()")
            console.log(error);
        }
    }
}

export default Query;