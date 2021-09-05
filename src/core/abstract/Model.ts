/** 
 * Model
 * 
 * This file extends all model classes to enable all database query
 * @module core/config/Query
 * @author Daryl ABRADOR
 */

import FieldInterface from "../interfaces/FieldInterface";
import Query from "../config/Query";
import Database from "../config/Database";

abstract class Model {
    table: string;
    fields: Array<FieldInterface> = [];

    query: Query;
    selection: any = []

    constructor(table: string, fields: Array<FieldInterface>) {
        this.table   = table;
        this.fields  = fields;
        this.query = new Query(table, fields)
    }

    public findAll(data:any = null) {
        let queryString:string = "";
        if(!data) {
            queryString = this.query.select(this.selection).from(this.table).toString()
        } else {
            queryString = this.query.select(this.selection).from(this.table).where(data).toString()
        }
        return this.runQuery(queryString)
    }

    public async find(id: number) {   
        const queryString:string = this.query.select(this.selection).from(this.table).where({id: id}).toString()
        return await this.runQuery(queryString)
    }
 

    public async create(values: object) {
        const queryString:string = this.query.create(values);
        const data:any = await this.runQuery(queryString) 
        return data;
    }


    public async update(search: Object, values: Object) {
        const queryString:string = this.query.update(search, values);
        const data:any = await this.runQuery(queryString) 
        return data;
    }
 

    public async delete(search:Object) {
        this.query = new Query(this.table, this.fields)
        const queryString:string = this.query.delete(search);
        const data:any = await this.runQuery(queryString);
        return data;
    }

    
    public selectFields(data: Array<any>){
        this.selection = data
        return this
    }


    public excludeFields(data: Array<any>){
        let temp:any = []
        this.fields.map((item:any)=> {
            if(!data.includes(item.field)){
                temp.push(item.field)
            }
        })
        this.selection = [...temp]
        temp = []
        return this
    }


    private resetSelection(){
        this.selection = []
    }


    private async runQuery(queryString: string) {
        try {
            this.resetSelection();
            const data:any = await Database.query(queryString)
            return data
        } catch (error) {
            return {error: error}
        }
    }

    
}

export default Model;