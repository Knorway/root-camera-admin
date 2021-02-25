import express from 'express';
import { getSales } from '../controllers/saleController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.route('/').get(getSales);

export default router;
