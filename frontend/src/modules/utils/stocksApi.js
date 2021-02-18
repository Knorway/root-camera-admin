import axios from 'axios';

const getStocks = async (query) => {
  let url = '/api/stocks?';

  Object.values(query).forEach((each) => {
    Object.entries(each).forEach((keyword) => {
      url += `${keyword[0]}=${keyword[1]}&`;
    });
  });

  const response = await axios.get(url);
  return response;
};

const getStockById = async (id) => {
  const response = await axios.get(`/api/stocks/${id}`);
  return response;
};

export { getStocks, getStockById };
