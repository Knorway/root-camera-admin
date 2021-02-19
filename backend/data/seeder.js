import dotenv from 'dotenv';
import mongoDB from '../config/db.js';
import Stock from '../model/stockModel.js';
import { importCsv } from './csv.js';

dotenv.config();
mongoDB();

export const importData = async (stocks) => {
	try {
		// await Stock.deleteMany();

		await Stock.insertMany(stocks);

		console.log('Data Imported!');
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

export const destroyData = async () => {
	try {
		await Stock.deleteMany();

		console.log('Data Destroyed!');
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importCsv('../rootadmin-stocks.csv', importData);
}
