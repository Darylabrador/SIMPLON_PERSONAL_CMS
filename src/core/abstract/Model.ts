import Database from "../config/Database";

abstract class Model {
    name: string;
    fields: Array<object> = [];

    constructor(name: string, fields: Array<object>) {
        this.name   = name;
        this.fields = fields;
    }

    // findAll() {
    //     Database.query(
    //         `SELECT * FROM ${this.name}`,
    //         function(err: any, results: any) {
    //             if(err) return console.log(err)
    //             return results;
    //         }
    //     )
    // }
}

export default Model;