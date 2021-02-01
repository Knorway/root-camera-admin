import express from 'express';
import { getStockById, getStocks } from '../controllers/stockController.js';

const router = express.Router();

router.route('/').get(getStocks);
router.route('/:id').get(getStockById);

export default router;
