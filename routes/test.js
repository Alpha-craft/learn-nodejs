import express from 'express'
import {bruh,test} from '../controllers/test.js'
const router = express.Router();

router.get('/test',test)
router.get('/bruh',bruh)

export default router;