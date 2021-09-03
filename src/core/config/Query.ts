/** 
 * Query
 * 
 * This file is used to define all database dynamic query and use it in abstract model
 * @module core/config/Query
 * @author Daryl ABRADOR
 */

import FieldInterface from "../interfaces/FieldInterface";

class Query {
    table: string;
    fields: Array<FieldInterface> = [];
    selectedFields: Array<any> = [];
    selectedCondition: string = "";
    selectedAction: string = "";

    constructor(table: string, fields: Array<FieldInterface>) {
        this.table   = table;
        this.fields  = fields;
    }

    select(args: any){
        this.selectedFields = args;
        return this;
    }

    where(args: any) {
        let conditions:string = "";

        if(typeof args === 'object') {
            conditions += " ( " + this.and(args) + " ) "
        } else if(Array.isArray(args)) {
            args.map((arg: any, index:number) => {
                if(arg && index === 0) conditions += " ( " +this.and(arg) + " ) " 
                if(arg && index > 0) conditions += " OR "  +  " (" +this.and(arg) + " ) "    
            })
        }

        if(conditions !== "") this.selectedCondition += " WHERE " + conditions;
        return this;
    }

    and(args: any) {
        let conditions: string =  "";
        const keys:any = Object.keys(args);

        if(keys && keys.length > 1) {
            keys.map((key: any, index:number) => {
                if(key && index === 0) conditions += key + " = " + args[key]
                if(key && index > 0) conditions += " AND "  + key + " = '" + args[key] + "'"
            })
        } else{
            conditions += keys[0] + " = '" + args[keys[0]] + "'"
        } 
        return conditions;
    }

    from(table: any, alias:any = null) {
        if(!alias) {
            this.table = table;
        } else {
            this.table = `${table} AS ${alias}`
        }
        return this;
    }

    create(values: object) {
        const keys:any = Object.keys(values);
        const vals:any = Object.values(values);

        let arrayField:string  = `${keys[0]}`;
        let arrayValues:string = `'${vals[0]}'`;

        for(let i = 1; i < keys.length; i++) {
            arrayField += `, ${keys[i]}`;
        }

        for(let i = 1; i < vals.length; i++) {
            arrayValues += `, '${vals[i]}'`;
        }
        
        return `INSERT INTO ${this.table} (${arrayField}) values (${arrayValues})`;
    }

    update(search:Object, values: Object) {
        const keys:any = Object.keys(values);
        const vals:any = Object.values(values);

        const keys2:any = Object.keys(search);
        const vals2:any = Object.values(search);

        let conditionSearch: string = `${keys2[0]} = ${vals2[0]}`;

        for(let i = 1; i < keys2.length; i++) {
            conditionSearch += ` AND ${keys2[i]} = '${vals2[i]}'`;
        }

        let arrayField:string  = `${keys[0]} = '${vals[0]}'`;

        for(let i = 1; i < keys.length; i++) {
            arrayField += `, ${keys[i]} = '${vals[i]}'`;
        }

        return `UPDATE ${this.table} SET ${arrayField} WHERE ${conditionSearch}`;
    }

    delete(search:Object) {
        const keys2:any = Object.keys(search);
        const vals2:any = Object.values(search);

        let conditionSearch: string = `${keys2[0]} = ${vals2[0]}`;

        for(let i = 1; i < keys2.length; i++) {
            conditionSearch += ` AND ${keys2[i]} = '${vals2[i]}'`;
        }

        console.log(`DELETE FROM ${this.table} WHERE ${conditionSearch}`)
        return `DELETE FROM ${this.table} WHERE ${conditionSearch}`;
    }

    toString() {
        const liestFields:string = (this.selectedFields.length > 0) ? this.selectedFields.join(', ') : '*'
        const query = 'SELECT '+ liestFields + ' FROM ' + this.table + this.selectedCondition;
        this.selectedFields     = [];
        this.table              = "";
        this.selectedCondition  = "";
        return query;  
    }
}

export default Query;