import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import customersReducer from '../features/customers/customerSlice';
import productReducer from '../features/product/productSlice';
import brandReducer from '../features/brand/brandSlice';
import categoryReducer from '../features/pcategory/categorySlice';
import colorReducer from '../features/color/colorSlice';
import blogReducer from '../features/blog/blogSlice';
import blogCategoryReducer from '../features/bcategory/bCategorySlice';
import enquiryReducer from '../features/enquiry/enquirySlice';
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupon/couponSlice";
import orderReducer from "../features/order/orderSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        customers: customersReducer,
        products: productReducer,
        brands: brandReducer,
        categories: categoryReducer,
        colors: colorReducer,
        blogs: blogReducer,
        blogCategories: blogCategoryReducer,
        enquiries: enquiryReducer,
        upload: uploadReducer,
        coupon: couponReducer,
        order: orderReducer
    },
})