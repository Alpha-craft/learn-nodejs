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

const siswa = {
  nama:"Ainur",
  umur:19,
  // cetakSiswa : (nama,umur) => {
  //   return `Halo,Nama saya ${this.nama},Umur Saya ${this.umur} Tahun`
  // } 
  // Undefined

  cetakSiswa () {
    return `Halo,Saya ${this.nama},Saya ${this.umur} Tahun`
  }
}

class Orang {
  constructor(){
    console.log("Objeck orang telah dibuat!!!");
  }
}


module.exports.getUser = getUser;
module.exports.nama = nama;
module.exports.siswa = siswa;
module.exports.Orang = Orang;
