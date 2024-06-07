import { Router } from 'express';
import { userRegister } from '../controllers/user.controller.js';
const router = Router();
console.log('Setting up user routes');
router.route("/register").post(userRegister)
export default router;



