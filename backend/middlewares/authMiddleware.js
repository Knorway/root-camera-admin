import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
	const authHeader = req.headers.authorization;
	let token;

	if (authHeader && authHeader.startsWith('Bearer')) {
		try {
			token = authHeader.split(' ')[1];
			const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
			req.user = await User.findById(decoded.id).select('-password');

			next();
		} catch {
			res.status(404);
			throw new Error('접근 권한이 없는 요청입니다');
		}
	}
});
