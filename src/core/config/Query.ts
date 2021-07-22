/** 
 * Query
 * 
 * This file is used to define all database dynamic query and use it in abstract model
 * @module core/config/Query
 * @author Daryl ABRADOR
 */

import Database from "./Database";

class Query {
    table: string;

    constructor(table: string) {
        this.table = table;
    }

    async findAll() {
        try {
            const requestData = await Database.query(`SELECT * FROM ${this.table}`, [])
            return requestData;
        } catch (error) {
            console.log("Error in class query: findAll()")
            console.log(error);
        }
    }

    async find(id: Number) {
        try {
            const requestData = await Database.query(`SELECT * FROM ${this.table} where id = ?`, [id])
            return requestData;
        } catch (error) {
            console.log("Error in class query: find()")
            console.log(error);
        }
    }
}

export default Query;