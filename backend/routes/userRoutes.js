import express from 'express';
import { authUser, loginUser, registerUser } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router.route('/auth').get(protect, authUser);

export default router;
