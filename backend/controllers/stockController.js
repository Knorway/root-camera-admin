import asyncHandler from 'express-async-handler';
import Stock from '../model/stockModel.js';
import { formatToday, generateDate, isToday } from './utils/lib.js';

export const getStocks = asyncHandler(async (req, res) => {
	const { limit, page, ...rest } = req.query;
	const filter = { inStock: true, stockedAt: {} };
	const pageNumber = +page + 1;

	Object.entries(rest).forEach((e) => {
		if (e[0] === 'dateFrom') return (filter.stockedAt['$gte'] = e[1]);
		if (e[0] === 'dateTo') return (filter.stockedAt['$lte'] = `${e[1]}T23:59:59Z`);
		filter[e[0]] = { $regex: e[1], $options: 'i' };
	});

	const stocks = await Stock.find(filter)
		.limit(+limit)
		.skip(+limit * (pageNumber - 1))
		.sort({ stockedAt: -1 });

	if (!stocks) {
		res.status(404);
		throw new Error('재고 목록을 불러오는 데 실패했습니다');
	}

	const count = await Stock.countDocuments(filter);

	res.status(200);
	res.json({ stocks, count });
});

export const getStockById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const stock = await Stock.findById(id);

	if (!stock) {
		res.status(404);
		throw new Error('존재하지 않는 재고입니다');
	}

	res.status(200);
	res.json(stock);
});

export const createStock = asyncHandler(async (req, res) => {
	const { today } = generateDate();

	const stock = await Stock.create({
		pin: Date.now(),
		stockedAt: today,
	});

	if (!stock) {
		res.status(404);
		throw new Error('새 재고를 작성하는 데 실패했습니다');
	}

	res.status(201);
	res.json(stock);
});

export const deleteStock = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const stock = await Stock.findById(id);

	if (!stock) {
		res.status(404);
		throw new Error('재고를 삭제하는 데 실패했습니다');
	}

	stock.remove();
	res.status(200);
	res.json({ message: '성공적으로 삭제되었습니다' });
});

export const editStocks = asyncHandler(async (req, res) => {
	const stack = req.body;

	const result = Object.values(stack).map((stock) => {
		return Stock.findByIdAndUpdate(
			stock._id,
			{
				...stock,
				status: stock.status || '입고대기',
				stockedAt: isToday(stock.stockedAt) ? formatToday() : stock.stockedAt,
				soldAt: !stock.inStock
					? stock.soldAt
						? stock.soldAt
						: formatToday()
					: stock.soldAt,
				pin: !stock.pin ? Date.now() : stock.pin,
			},
			{ new: true }
		);
	});

	if (!result) {
		res.status(400);
		throw new Error('재고를 수정하는 데 실패했습니다');
	}

	const editedStocks = await Promise.all(result);

	res.status(200);
	res.json(editedStocks);
});
