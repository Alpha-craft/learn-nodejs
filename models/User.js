import {Sequelize} from "sequelize";
import db from "../config/database.js";
 
const {DataTypes} = Sequelize;
 
const User = db.define('users',{
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    absen: DataTypes.INTEGER
},{
    freezeTableName: true
});
 
export default User;
 
(async()=>{
    await db.sync();
})();