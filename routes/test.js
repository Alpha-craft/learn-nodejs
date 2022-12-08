import express from 'express'
import {bruh,test,post} from '../controllers/test.js'
const router = express.Router();

router.get('/test/:id',test)
router.get('/bruh/:payload',bruh)
router.post('/post',post)

export default router;