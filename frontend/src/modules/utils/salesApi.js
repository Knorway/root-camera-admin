import axios from 'axios';

const getSales = async (query) => {
  let url = '/api/sales?';

  Object.values(query).forEach((each) => {
    Object.entries(each).forEach((keyword) => {
      url += `${keyword[0]}=${keyword[1]}&`;
    });
  });

  const response = await axios.get(url);
  return response;
};

export { getSales };
