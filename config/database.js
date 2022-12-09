import {Sequelize} from "sequelize";
import dotenv from "dotenv"
dotenv.config({path:'.env'})
let database = process.env.DB_NAME
let user = process.env.DB_USER
let pass = process.env.DB_PASS
const db = new Sequelize(database,user,pass,{
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

export default db;