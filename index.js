const myModule = require("./my-module/module");

const testVar = myModule.getUser(1,(myVar)=>{
  console.log(myVar);
})

console.log(myModule.nama);
