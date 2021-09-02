"use strict";
/**
 * Database
 *
 * This file is used to create a connection to database and return asynchronous query used by Query class
 * @module core/config/Database
 * @author Daryl ABRADOR
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var process = __importStar(require("process"));
var mysql2_1 = __importDefault(require("mysql2"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.connection = function () {
        return mysql2_1.default.createConnection({
            database: process.env.MYSQL_DATABASE,
            host: process.env.DB_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD
        });
    };
    Database.query = function (sqlQuery) {
        var db = this.connection();
        return new Promise(function (resolve, reject) {
            db.query(sqlQuery, function (err, rows, fields) {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    };
    return Database;
}());
exports.default = Database;
