import express from 'express';
import {
	createStock,
	deleteStock,
	editStocks,
	getStockById,
	getStocks,
} from '../controllers/stockController.js';

const router = express.Router();

router.route('/').get(getStocks).post(createStock).put(editStocks);
router.route('/:id').get(getStockById).delete(deleteStock);

export default router;
