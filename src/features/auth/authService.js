import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/admin-login`, userData);
  
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/get-all-orders`, config);

  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}user/get-order-by-user/${id}`,
    "",
    config
  );

  return response.data;
};

const authService = {
  login,
  getOrders,
  getOrder,
};

export default authService