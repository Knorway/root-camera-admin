import axios from 'axios';

const getStockById = async (id, config) => {
  const response = await axios.get(`/api/stocks/${id}`, config);
  return response;
};

const createStock = async (_, config) => {
  const response = await axios.post('/api/stocks', {}, config);
  return response;
};

const saveStock = async (stack, config) => {
  await axios.put('/api/stocks', stack, config);
};

const deleteStock = async (id, config) => {
  await axios.delete(`/api/stocks/${id}`, config);
};

export { getStockById, createStock, saveStock, deleteStock };
