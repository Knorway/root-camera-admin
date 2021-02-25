import express from 'express';
import {
	createStock,
	deleteStock,
	editStocks,
	getStockById,
	getStocks,
} from '../controllers/stockController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.route('/').get(getStocks).post(createStock).put(editStocks);
router.route('/:id').get(getStockById).delete(deleteStock);

export default router;
