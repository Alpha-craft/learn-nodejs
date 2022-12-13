import {Sequelize} from "sequelize";
import db from "../config/database.js";
 
const {DataTypes} = Sequelize;
 
const Role = db.define('roles',{
    title: DataTypes.STRING
},{
    freezeTableName: true
});
export default Role;
 
(async()=>{
    await db.sync();
})();