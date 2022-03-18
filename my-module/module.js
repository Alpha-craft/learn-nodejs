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

const nama = "ini adalah nama";

module.exports.getUser = getUser;
module.exports.nama = nama;
