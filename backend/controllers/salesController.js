import asyncHandler from 'express-async-handler';
import Stock from '../model/stockModel.js';

export const getSales = asyncHandler(async (req, res) => {
	const sales = await Stock.find({ inStock: false, status: { $ne: '분실' } }).sort({
		soldAt: -1,
	});

	if (!sales) {
		res.status(404);
		throw new Error('판매 목록을 불러오는 데 실패했습니다');
	}

	res.status(200);
	res.json(sales);
});
