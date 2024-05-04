import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";


const getOrders = async () => {
  const response = await axios.get(`${base_url}order/get-all-orders`, config);

  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}order/get-order-by-user/${id}`,
    "",
    config
  );

  return response.data;
};

const getMonthlyOrders = async () => {
  const response = await axios.get(`${base_url}order/get-monthly-orders`, config);

  return response.data;
}

const getYearlyOrders = async () => {
  const response = await axios.get(`${base_url}user/get-yearly-orders`, config);

  return response.data;
}

const authService = {
  getOrders,
  getOrder,
  getMonthlyOrders,
  getYearlyOrders
};

export default authService