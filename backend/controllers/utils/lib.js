const offset = new Date().getTimezoneOffset() * 60000;
const today = new Date(Date.now() - offset);
const todaySubstring = today.toISOString().substring(0, 10);

const isToday = (stock) => {
	return stock.stockedAt === todaySubstring;
};

const formatToday = () => {
	return new Date(`${todaySubstring} ${today.toTimeString()}`);
};

export { today, isToday, formatToday };
