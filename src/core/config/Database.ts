import * as process from "process";
import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();
 
class Database {
    private static connection(): mysql.Connection {   
        return mysql.createConnection({
            database: process.env.MYSQL_DATABASE,
            host: process.env.DB_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD
        });
    }

    public static query(query: string, callback: any) {
        const db  = this.connection();
        return db.query(query, callback)
    }
}

export default Database;