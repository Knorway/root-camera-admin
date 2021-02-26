import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
	const token = jwt.sign({ id }, process.env.TOKEN_SECRET);
	return token;
};
