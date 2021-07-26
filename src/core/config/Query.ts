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
    insertFields: string = "";

    // TODO : implements 

    // selectField(), 
    // excludeField(), 
    // where()
    // AndWhere()

    // example : where(xx) {
    // ...
    // return this
    // })

    constructor(table: string, fields: Array<FieldInterface>) {
        this.table   = table;
        this.fields  = fields;

        this.searchFields += fields[0].field;
        this.insertFields += "?";

        for(let i = 1; i < fields.length; i++) {
            this.searchFields += `, ${fields[i].field}`;
            this.insertFields += `, ?`;
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
            const requestData: any = await Database.query(`SELECT ${this.searchFields} FROM ${this.table} where id = ?;`, [id])
            return requestData;
        } catch (error) {
            console.log("Error in class query: find()")
            console.log(error);
        }
    }

    async create(values: object) {
        let valuesArray   = Object.values(values)
        let questionMarks = this.insertFields.split(",").splice(0, this.fields.length-1).join();
        let createFiels   = this.searchFields.split(",").splice(1, this.fields.length).join();
        const requestData: any = await Database.query(`INSERT INTO ${this.table} (${createFiels}) VALUES (${questionMarks});`, valuesArray);
        return requestData;
    }
    
    async update(id: Number, values: Object) {
        let valuesArray     = Object.values(values)
        let updatedFields   = this.searchFields.split(",").splice(1, this.fields.length).join();
        let setUpdateFields = updatedFields.split(',').map(element => `${element} = ?`).join();
        valuesArray.push(Number(id))
        const requestData: any = await Database.query(`UPDATE ${this.table} SET ${setUpdateFields} WHERE id = ?;`, valuesArray);
        return requestData;
    }

    async delete(id: Number) {
        const requestData: any = await Database.query(`DELETE FROM ${this.table} WHERE id = ?;`, [id]);
        return requestData;
    }
}

export default Query;