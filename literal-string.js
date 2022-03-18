const hendlo = (nama,umur,callback) => {
  let time = null;
  if (umur > 19){
    time = 3000;
  }
  else{
    time = 5000;
  }
  setTimeout(()=>{
    callback({nama,umur})
  },time);
}

const saya = hendlo('Ainur',18,(hasil)=>{
  console.log(hasil);
})

const dia = hendlo('Rita Rossweisse',22,(hasil)=>{
  console.log(hasil)
})