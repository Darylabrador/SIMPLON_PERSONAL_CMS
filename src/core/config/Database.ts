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

    public static query(sqlQuery: string, params: any) {
        const db = this.connection();
        return new Promise(function (resolve, reject) {
            db.query(sqlQuery, params, function(err, rows, fields){
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        })
    }
}

export default Database;