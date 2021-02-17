import axios from 'axios';

const getSales = async () => {
  const response = await axios.get('/api/sales');
  return response;
};

export { getSales };
