const generateDate = () => {
	const offset = new Date().getTimezoneOffset() * 60000;
	const today = new Date(Date.now() - offset);
	const todayYYMMDD = today.toISOString().substring(0, 10);
	const todayHHMMSS = today.toISOString().substring(10, 24);

	return { today, todayYYMMDD, todayHHMMSS };
};

const isToday = (stockedAt) => {
	const { todayYYMMDD } = generateDate();

	return stockedAt === todayYYMMDD;
};

const formatToday = () => {
	const { todayYYMMDD, todayHHMMSS } = generateDate();

	return new Date(todayYYMMDD + todayHHMMSS);
};

export { generateDate, isToday, formatToday };
