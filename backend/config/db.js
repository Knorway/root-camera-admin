import mongoose from 'mongoose';

const mongoDB = async () => {
	try {
		const { connection } = await mongoose.connect(
			process.env.NODE_ENV === 'production'
				? process.env.MONGO_URI
				: process.env.DEV_MONGO_URI,
			{
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			}
		);
		console.log(`mongoDB connected ${connection.host}`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

export default mongoDB;
