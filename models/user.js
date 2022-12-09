import {Sequelize} from "sequelize";
import db from "../config/database.js";
 
const {DataTypes} = Sequelize;
 
const User = db.define('users',{
    nama: DataTypes.STRING,
    kelas: DataTypes.INTEGER,
    absen: DataTypes.STRING
},{
    freezeTableName: true
});
 
export default Product;
 
(async()=>{
    await db.sync();
})();