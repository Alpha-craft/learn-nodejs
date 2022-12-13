import express from 'express';
import {
  test,
  getAllRole,
  addRole
} from '../controllers/RolesController.js'
const router = express.Router();

router.get('/role/test',test);
router.get('/role',getAllRole);
router.post('/role',addRole);

export default router;