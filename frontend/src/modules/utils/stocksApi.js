import axios from 'axios';

const getStocks = async (query = {}) => {
  const { limit } = query;
  const response = await axios.get(`/api/stocks?limit=${limit}`);
  return response;
};

const getStockById = async (id) => {
  const response = await axios.get(`/api/stocks/${id}`);
  return response;
};

export { getStocks, getStockById };
