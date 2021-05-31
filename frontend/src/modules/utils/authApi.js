import axios from 'axios';

// const loginUser = async (form) => {
//   const response = await axios.post('/api/users/login', form);
//   return response;
// };
const loginUser = async (form) => {
  const response = await axios.post('https://root-admin.herokuapp.com/api/users/login', form);
  return response;
};

export { loginUser };
