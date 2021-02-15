import csv from 'csv-parser';
import fs from 'fs';

const filterStockedAt = (stock) => {
	if (!stock.stockedAt) {
		return {
			...stock,
			stockedAt: new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
		};
	}

	return {
		...stock,
		stockedAt: stock.stockedAt
			.trim()
			.split('.')
			.map((e) => e.trim())
			.join('-'),
	};
};

const filterInStock = (stock) => {
	if (stock.inStock) {
		return {
			...stock,
			inStock: true,
		};
	}

	return {
		...stock,
		inStock: false,
	};
};

const filterSoldFrom = (stock) => {
	let filtered = { ...stock };

	Object.keys(filtered).forEach((key) => {
		if (key.startsWith('soldFrom') && key !== 'soldFrom_method') {
			if (!filtered[key]) {
				return (filtered[key] = false);
			}

			return (filtered[key] = true);
		}
	});

	return filtered;
};

const filterStatus = (stock) => {
	if (stock.inStock && !stock.status) {
		return {
			...stock,
			status: '재고있음',
		};
	}

	return stock;
};

const filter = (stock) => {
	let filtered;

	filtered = filterStockedAt(stock);
	filtered = filterInStock(filtered);
	filtered = filterSoldFrom(filtered);
	filtered = filterStatus(filtered);

	return filtered;
};

export const importCsv = (path, callback) => {
	const result = [];

	fs.createReadStream(path)
		.pipe(csv({}))
		.on('data', (data) => result.push(filter(data)))
		.on('end', () => {
			callback(result);
		});
};
