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

export const getUser =  async (req,res) => {
  const id = req.params.id
  const user = await User.findOne({
    where:{
      id:id
    }
  })
  res.json(user);
}