import asyncHandler from 'express-async-handler';
import Stock from '../model/stockModel.js';
import * as utils from './utils/lib.js';

export const getStocks = asyncHandler(async (req, res) => {
	const stocks = await Stock.find({}).sort({ stockedAt: -1 });

	if (!stocks) {
		res.status(404);
		throw new Error('존재하지 않는 재고입니다');
	}

	res.status(200);
	res.json(stocks);
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
	const stock = await Stock.create({
		pin: Date.now(),
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
		throw new Error('존재하지 않는 재고입니다');
	} else {
		stock.remove();
		res.status(200);
		res.json({ message: '성공적으로 삭제되었습니다' });
	}
});

export const editStocks = asyncHandler(async (req, res) => {
	const stack = req.body;

	const result = stack.map((stock) => {
		return Stock.findByIdAndUpdate(
			stock._id,
			{
				...stock,
				status: stock.status || '입고대기',
				stockedAt: utils.isToday(stock) ? utils.formatToday() : stock.stockedAt,
				soldAt: utils.isToday(stock) ? utils.formatToday() : stock.soldAt,
				pin: !stock.pin ? Date.now() : stock.pin,
			},
			{ new: true }
		);
	});

	if (!result) {
		res.status(404);
		throw new Error('재고를 수정하는 데 실패했습니다');
	}

	const editedStocks = await Promise.all(result);

	res.status(200);
	res.json({ message: editedStocks });
});
