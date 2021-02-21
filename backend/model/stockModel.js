import mongoose from 'mongoose';
import { generateDate } from '../controllers/utils/lib.js';

const stockSchema = new mongoose.Schema({
	inStock: {
		type: Boolean,
		default: true,
	},
	status: {
		type: String,
		default: '입고대기',
	},
	currentlyAt: {
		type: String,
	},
	purchasedFrom: {
		type: String,
	},
	pin: {
		type: String,
	},
	serialNumber: {
		type: String,
	},
	name: {
		type: String,
	},
	purchasedForUSD: {
		type: Number,
		default: 0,
	},
	purchasedForKRW: {
		type: Number,
		default: 0,
	},
	internationalShippingCost: {
		type: Number,
		default: 0,
	},
	extraCost: {
		type: Number,
		default: 0,
	},
	shippingCost: {
		type: Number,
		default: 0,
	},
	totalPurchaseCost: {
		type: Number,
	},
	soldFor: {
		type: Number,
	},
	profit: {
		type: Number,
	},
	stockedAt: {
		type: Date,
		default: generateDate().today,
	},
	brand: {
		type: String,
	},
	category: {
		type: String,
	},
	memo_inStock: {
		type: String,
	},
	meta_inStock: {
		type: String,
	},
	soldAt: {
		type: Date,
	},
	buyer_name: {
		type: String,
	},
	buyer_phoneNumber: {
		type: String,
	},
	profit_filter_a: {
		type: Number,
	},
	profit_filter_b: {
		type: Number,
	},
	profit_filter_c: {
		type: Number,
	},
	soldFrom_site: {
		type: Boolean,
		default: false,
	},
	soldFrom_insta: {
		type: Boolean,
		default: false,
	},
	soldFrom_bungae: {
		type: Boolean,
		default: false,
	},
	soldFrom_jungna: {
		type: Boolean,
		default: false,
	},
	soldFrom_register: {
		type: Boolean,
		default: false,
	},
	soldFrom_method: {
		type: String,
	},
	memo_sold: {
		type: String,
	},
	meta_sold: {
		type: String,
	},
});

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;
