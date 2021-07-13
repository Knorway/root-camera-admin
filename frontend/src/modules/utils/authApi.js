import axios from 'axios';

const loginUser = async (form) => {
  const response = await axios.post('/api/users/login', form);
  return response;
};

export { loginUser };
