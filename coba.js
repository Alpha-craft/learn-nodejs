const { time } = require("console");

// Syncchronous
const getUserSync = (id) => {
  let nama = '';
  if (id == 1){
    nama = 'Ainur'
  }
  else{
    nama = 'Alpha'
  }
  return {id,nama}
};

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2)
// console.log(userDua);  

// Asynchronous
const getUser = (id,callback) => {
  let time = null;
  if (id == 1 ){
    time = 3000;
  }
  else{
    time = 2000;
  }
  setTimeout(() => {
    let nama = ''
    if (id == 1){
      nama = 'Rita';
    }
    else {
      nama = 'Bianka'
    }
    callback({id,nama})
  },time);
}; 

const userAsyncSatu = getUser(1,(hasil)=>{
  console.log(hasil);
});
console.log(userAsyncSatu)

const userAsyncDua = getUser(2,(hasil)=>{
  console.log(hasil)
});
console.log(userAsyncDua);
