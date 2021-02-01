import axios from 'axios';

const getStocks = async () => {
  const response = await axios.get('/api/stocks');
  return response;
};

const getStockById = async (id) => {
  const response = await axios.get(`/api/stocks/${id}`);
  return response;
};

export { getStocks, getStockById };
