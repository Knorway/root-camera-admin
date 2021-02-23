import asyncHandler from 'express-async-handler';
import Stock from '../model/stockModel.js';

export const getSales = asyncHandler(async (req, res) => {
	const { limit, page, ...rest } = req.query;
	const filter = { inStock: false, status: { $ne: '분실' }, stockedAt: {} };
	const pageNumber = +page + 1;

	Object.entries(rest).forEach((e) => {
		if (e[0] === 'dateFrom') return (filter.stockedAt['$gte'] = e[1]);
		if (e[0] === 'dateTo') return (filter.stockedAt['$lte'] = `${e[1]}T23:59:59Z`);
		filter[e[0]] = { $regex: e[1], $options: 'i' };
	});

	const sales = await Stock.find(filter)
		.limit(+limit)
		.skip(+limit * (pageNumber - 1))
		.sort({ soldAt: -1 });

	if (!sales) {
		res.status(404);
		throw new Error('판매 목록을 불러오는 데 실패했습니다');
	}

	const count = await Stock.countDocuments(filter);

	res.status(200);
	res.json({ sales, count });
});
