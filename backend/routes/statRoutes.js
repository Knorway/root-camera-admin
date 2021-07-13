import express from 'express';
import { getOverview } from '../controllers/statController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// router.use(protect);

router.route('/').get(getOverview);

export default router;
