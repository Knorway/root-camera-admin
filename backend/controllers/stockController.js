import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Stock from '../model/stockModel.js';

export const getStocks = asyncHandler(async (req, res) => {
	const stocks = await Stock.find({});

	if (!stocks) {
		res.status(404);
		throw new Error('Stock not found');
	}

	res.status(200);
	res.json(stocks);
});

export const getStockById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const stock = await Stock.findById(id);

	if (!stock) {
		res.status(404);
		throw new Error('Stock not found');
	}

	res.status(200);
	res.json(stock);
});
