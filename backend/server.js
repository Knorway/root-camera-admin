import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoDB from './config/db.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import stockRoutes from './routes/stockRoutes.js';

const app = express();

dotenv.config();
mongoDB();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/stocks', stockRoutes);

// ------------error handler------------ #
app.use(notFound);
app.use(errorHandler);

// ------------server listening--------- #
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(
		`server running on ${process.env.NODE_ENV} mode in port ${process.env.PORT}`
	);
});
