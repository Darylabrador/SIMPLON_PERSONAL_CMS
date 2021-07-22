import Database from "../config/Database";

abstract class Query {
    public constructor() {}

    async findAll() {
        try {
            const requestData = await Database.query("SELECT * FROM articles", [])
            return requestData;
        } catch (error) {
            console.log("Error in Abstract Model")
            console.log(error);
        }
    }

    async find(id: Number) {
        try {
            const requestData = await Database.query("SELECT * FROM articles where id = ?", [id])
            return requestData;
        } catch (error) {
            console.log("Error in Abstract Model")
            console.log(error);
        }
    }
}

export default Query;