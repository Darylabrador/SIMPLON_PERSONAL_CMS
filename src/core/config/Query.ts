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
    selectedJoin: string = "";
    selectedJoinField: string = "";

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

        if(Array.isArray(args)) {
            if(args.length > 1) {
                if(args[0][2].includes('%')) args[0][2] = `'${args[0][2]}'`
                conditions += " " + args[0][0] + " " + args[0][1] + " " + args[0][2] +  " "

                for (let index = 1; index < args.length; index++) {
                    if(args[index][0].includes('%')) args[index][0] = `'${args[index][0]}'`
                    conditions += " AND " + args[index][0] + " " + args[index][1] + " " + args[index][2] +  " "
                }

            } else {
                args.forEach(element => {
                    if(element[2].includes('%')) element[2] = `'${element[2]}'`
                    conditions += " " + element[0] + " " + element[1] + " " + element[2] +  " "
                })
            }
        }

        if(typeof args === 'object' && !Array.isArray(args)) {
            conditions += " " + this.and(args) + " "
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
                if(key && index > 0) conditions += " AND " + key + " = '" + args[key] + "'"
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
        
        console.log(`INSERT INTO ${this.table} (${arrayField}) values (${arrayValues})`)
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

        console.log(`UPDATE ${this.table} SET ${arrayField} WHERE ${conditionSearch}`)
        return `UPDATE ${this.table} SET ${arrayField} WHERE ${conditionSearch}`;
    }

    delete(search:Object) {
        const keys2:any = Object.keys(search);
        const vals2:any = Object.values(search);

        let conditionSearch: string = `${keys2[0]} = ${vals2[0]}`;

        for(let i = 1; i < keys2.length; i++) {
            conditionSearch += ` AND ${keys2[i]} = '${vals2[i]}'`;
        }
        
        return `DELETE FROM ${this.table} WHERE ${conditionSearch}`;
    }

    /**
     * Model format after join :
     * 
     * modelnamefield
     */
    defineJoin(queryString: string) {
        this.selectedJoin += queryString;
    }

    defineJoinField(joinFields: any = null){
        if(joinFields) this.selectedJoinField += `, ${joinFields} `;
    }

    toString() {
        const liestFields:string = (this.selectedFields.length > 0) ? this.selectedFields.join(`, `) : '*'
        let query:string = "";

        if(this.selectedJoin != "") {
            const arrayFields: any = [];

            this.fields.forEach(element => {
                arrayFields.push(`${this.table}.${element.field} AS ${this.table}${element.field} `)
            })

            const arrayFieldSelect = arrayFields.join(', ');

            query = 'SELECT '+ arrayFieldSelect +  this.selectedJoinField + ' FROM ' + this.table + this.selectedJoin + this.selectedCondition;
        } else {
            query = 'SELECT '+ liestFields + ' FROM ' + this.table + this.selectedCondition;
        }

        this.selectedJoin       = "";
        this.selectedJoinField  = "";
        this.selectedFields     = [];
        this.table              = "";
        this.selectedCondition  = "";
        return query;  
    }
}

export default Query;