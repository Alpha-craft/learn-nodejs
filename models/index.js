import Role from "./Role.js";
import User from "./User.js";

Role.hasMany(User,{foreignKey:'roleId'})
User.belongsTo(Role);

export {User,Role}