import asyncHandler from 'express-async-handler';
import Stock from '../model/stockModel.js';

export const getOverview = asyncHandler(async (req, res) => {
	const recentStocks = await Stock.find({ inStock: true })
		.sort({ createdAt: -1 })
		.limit(6);
	const recentSales = await Stock.find({ inStock: false, status: { $ne: '분실' } })
		.sort({ createdAt: -1 })
		.limit(5);

	res.json({ recentStocks, recentSales });
});
