import express from "express";
import {
  test,
  getAllUser,
  getUser
} from '../controllers/UserController.js' //import controller

const router = express.Router();

router.get('/test',test)
router.get('/user',getAllUser)
router.get('/user/:id',getUser)
export default router;