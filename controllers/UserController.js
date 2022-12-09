import User from '../models/User.js'

export const test = async (req,res) => {
  res.send('Test Controller');
  console.log(req.query)
}

export const getAllUser = async (req, res) => {
  let paramObj = {}
  if (req.query) {
    paramObj = {
      where:req.query
    }
    console.log(req.query)
  }

  const users = await User.findAll(paramObj);
  res.json(users);
}

export const getUserById =  async (req,res) => {
  const id = req.params.id
  const user = await User.findOne({
    where:{
      id:id
    }
  })
  res.json(user);
}

export const addUser = async (req, res) => {
  const user = await User.create(req.body)
  res.send('posted')
}

export const deleteUser = async (req, res) => {
  await User.destroy({
    where:{
      id:req.params.id
    }
  })
  res.send("deleted")
}

export const updateUser = async (req, res) => {
  console.log(req.body)
  await User.update(req.body,{
    where:{
      id:req.params.id
    }
  })
  res.send("Updated")
}