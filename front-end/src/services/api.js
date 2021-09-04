import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const registerUser = async (name, email, password) => {
  const newUser = await axios
    .post(`${baseURL}/register`, {
      name,
      email,
      password,
    });
  return newUser;
};

export const loginUser = async (email, password) => {
  const loggedUser = await axios
    .post(`${baseURL}/login`, {
      email,
      password,
    });
  return loggedUser;
};

// export const getOrders = async () => {
//   const orders = await axios
//     .get('/customer/orders');
//   return orders;
// };

export const getProducts = async () => {
  const products = await axios
    .get(`${baseURL}/products`);
  return products;
};

export const getSellers = async () => {
  const { data } = await axios
    .get(`${baseURL}/sellers`);
  return data;
};

export const postNewOrder = async (orderObj, token) => {
  const { data } = await axios
    .post(`${baseURL}/orders`, orderObj, { headers: { Authorization: token } });
  return data;
};

export const getOrders = async (userId) => {
  const orders = await axios
    .get(`${baseURL}/customer/orders`, { userId });
  return orders;
};
