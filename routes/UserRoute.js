import express from "express";
import {test,getAllUser} from '../controllers/UserController.js' //import controller

const router = express.Router();

router.get('/test',test)
router.get('/user',getAllUser)
export default router;

