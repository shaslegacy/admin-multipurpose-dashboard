import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getCategories = async () => {
    const response = await axios.get(`${base_url}product-category`);

    return response.data;
}

const createCategory = async (category) => {
    const response = await axios.post(`${base_url}product-category/`, category, config);

    return response.data;
};

const getProductCategory = async (id) => {
    const response = await axios.get(`${base_url}product-category/${id}`, config);

    return response.data;
};

const deleteProductCategory = async (id) => {
    const response = await axios.delete(`${base_url}product-category/${id}`, config);

    return response.data;
};
const updateProductCategory = async (category) => {
    const response = await axios.put(
        `${base_url}product-category/${category.id}`,
    { title: category.pCatData.title },
    config
    );

    return response.data;
};

export const categoryService = {
    getCategories,
    createCategory,
    getProductCategory,
    deleteProductCategory,
    updateProductCategory,
}