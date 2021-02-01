import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
	pin: { type: String, required: true },
	serialNumber: { type: String },
	name: { type: String, required: true },
	purchasedFrom: { type: String },
	purchasedForUSD: { type: Number },
	purchasedForKRW: { type: Number },
	internationalShippingCosts: { type: Number },
	optionalCosts: { type: Number },
	shippingCosts: { type: Number },
	totalPurchaseCosts: { type: Number },
	customCosts: { type: Number },
	profit: { type: Number },
	stockedAt: { type: Date },
	brand: { type: String },
	caterory: { type: String },
	memo: { type: String },
	note: { type: String },
	metaData: { type: String },
	inStock: { type: Boolean },
	onFix: { type: Boolean },
	onPending: { type: Boolean },
	currentlyAt: { type: String },
	soldAt: { type: Date },
	soldFrom_site: { type: Boolean },
	soldFrom_insta: { type: Boolean },
	soldFrom_bungae: { type: Boolean },
	soldFrom_jungna: { type: Boolean },
	soldFrom_register: { type: Boolean },
	soldFrom_method: { type: String },
	buyer_name: { type: String },
	buyer_phoneNumer: { type: String },
});

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;
