import express from 'express';
import {
	createStock,
	deleteStock,
	editStock,
	getStockById,
	getStocks,
} from '../controllers/stockController.js';

const router = express.Router();

router.route('/').get(getStocks).post(createStock);
router.route('/:id').get(getStockById).put(editStock).delete(deleteStock);

export default router;
