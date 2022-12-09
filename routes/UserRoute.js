import express from "express";
import {
  test,
  getAllUser,
  getUserById,
  addUser,
  deleteUser,
  updateUser
} from '../controllers/UserController.js' //import controller

const router = express.Router();

router.get('/test',test)
router.get('/user',getAllUser)
router.get('/user/:id',getUserById)
router.post('/user',addUser)
router.post('/user/delete/:id',deleteUser)
router.patch('/user/update/:id',updateUser)
export default router;