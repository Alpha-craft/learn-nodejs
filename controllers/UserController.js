import User from '../models/User.js'

export const test = async (req,res) => {
  res.send('Test Controller');
}

export const getAllUser = async (req, res) => {
  const users = await User.findAll()
   res.json(users);
}