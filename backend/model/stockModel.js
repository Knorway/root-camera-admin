import mongoose from 'mongoose';

// const offset = new Date().getTimezoneOffset() * 60000;
// const today = new Date(Date.now() - offset);

const stockSchema = new mongoose.Schema({
	inStock: {
		type: Boolean,
		default: true,
	},
	status: {
		type: String,
		default: '재고있음',
	},
	currentlyAt: {
		type: String,
	},
	purchasedFrom: {
		type: String,
	},
	pin: {
		type: String,
		required: true,
	},
	serialNumber: {
		type: String,
	},
	name: {
		type: String,
		required: true,
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
		default: new Date(),
	},
	brand: {
		type: String,
	},
	caterory: {
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
		default: new Date(),
	},
	buyer_name: {
		type: String,
	},
	buyer_phoneNumer: {
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
	},
	soldFrom_insta: {
		type: Boolean,
	},
	soldFrom_bungae: {
		type: Boolean,
	},
	soldFrom_jungna: {
		type: Boolean,
	},
	soldFrom_register: {
		type: Boolean,
	},
	soldFrom_method: {
		type: String,
	},
});

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;
