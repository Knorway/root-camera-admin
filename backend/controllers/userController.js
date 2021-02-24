import asyncHandler from 'express-async-handler';
import { generateToken } from './utils/generateToken.js';
import User from '../model/userModel.js';

export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	const existUser = await User.findOne({ email });

	if (existUser) {
		res.status(400);
		throw new Error('이미 존재하는 유저입니다');
	}

	const user = await User.create({
		name,
		email,
		password,
	});

	if (user) {
		console.log(user);
		res.status(201);
		res.json({
			name: user.name,
			email: user.email,
			isOwner: user.isOwner,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('새로운 계정을 생성하는 데 실패했습니다');
	}
});

export const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.status(200);
		res.json({
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
			isOwner: user.isOwner,
		});
	} else {
		res.status(404);
		throw new Error('존재하지 않거나 올바르지 않은 정보입니다');
	}
});

export const authUser = asyncHandler(async (req, res) => {
	res.json(req.user);
});
