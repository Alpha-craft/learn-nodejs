import {User,Role} from './models/index.js'

(async() => {
  // const Ainur = await User.create({
  //   nama:'Ainur',
  //   kelas:'SIJA',
  //   absen:4
  // })
  const users = await User.findAll()
  console.log(users)
})()