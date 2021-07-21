import Database from "../config/Database";

class Model {
    name: string;
    fields: Array<object> = [];

    constructor(name: string, fields: Array<object>) {
        this.name   = name;
        this.fields = fields;
    }

    async findAll() {
        try {
            const requestData = await Database.query("SELECT * FROM articles", [])
            return requestData;
        } catch (error) {
            console.log("Error in Abstract Model")
            console.log(error);
        }
    }

    async findByPk(id: Number) {
        try {
            const requestData = await Database.query("SELECT * FROM articles where id = ?", [id])
            return requestData;
        } catch (error) {
            console.log("Error in Abstract Model")
            console.log(error);
        }
    }
}

export default Model;