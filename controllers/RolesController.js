import {Role,User} from '../models/index.js'

export const test = async (req,res) => {
  res.send("Roles Test")
}

export const getAllRole = async (req,res) => {
  let paramObj = {}
  if (req.query) {
    paramObj = {
      where:req.query
    },
    console.log(req.query)
  }

  // const roles = await Role.findAll(paramObj);
  const role = await Role.findAll({
    include:User
  })
  res.json(role);
}

export const addRole = async (req,res) => {
  const user = await Role.hasMany(User)
  await Role.create({
    title:req.body.title,
    user:{
      nama:req.body.nama,
      kelas:req.body.kelas,
      absen:req.body.absen
    }
  },{
    include:[user]
  });
  res.send("posted")
}