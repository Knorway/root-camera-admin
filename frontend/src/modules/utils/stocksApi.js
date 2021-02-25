import axios from 'axios';

const getStocks = async (query, config) => {
  let url = '/api/stocks?';

  Object.values(query).forEach((each) => {
    Object.entries(each).forEach((keyword) => {
      url += `${keyword[0]}=${keyword[1]}&`;
    });
  });

  const response = await axios.get(url, config);
  return response;
};

const getStockById = async (id, config) => {
  const response = await axios.get(`/api/stocks/${id}`, config);
  return response;
};

const createStock = async () => {
  const response = await axios.post('/api/stocks');
  return response;
};

export { getStocks, getStockById, createStock };
