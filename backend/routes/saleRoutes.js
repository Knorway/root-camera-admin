import express from 'express';
import { getSales } from '../controllers/saleController.js';

const router = express.Router();

router.route('/').get(getSales);

export default router;
