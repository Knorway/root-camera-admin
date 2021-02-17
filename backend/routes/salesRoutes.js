import express from 'express';
import { getSales } from '../controllers/salesController.js';

const router = express.Router();

router.route('/').get(getSales);

export default router;
