import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import RightSidebar from './components/core/sidebar/RightSidebar';
import Dashboard from './pages/Dashboard';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import MainLayout from './components/core/MainLayout';
import EcomDashboard from './pages/EcomDashboard';
import RecoverPassword from './pages/auth/RecoverPassword';
import Customers from './pages/ecommerce/customers/Customers';
import AllProducts from './pages/ecommerce/products/AllProducts';
import ProductDetails from './pages/ecommerce/products/ProductDetails';
import BrandList from './pages/ecommerce/brands';
import CategoryList from './pages/ecommerce/categories';
import ColorList from './pages/ecommerce/colors';
import BlogList from './pages/blogs';
import BlogCategory from './pages/blogs/category';
import EnquiryList from './pages/enquiries/EnquiryList';
import OrderList from './pages/ecommerce/orders/OrderList';
import AddProduct from './pages/ecommerce/products/AddProduct';
import AddBrand from './pages/ecommerce/brands/addBrand';
import AddCatagory from './pages/ecommerce/categories/addCatagory';
import AddColor from './pages/ecommerce/colors/addColor';
import AddBlogCatagory from './pages/blogs/category/addBlogCatagory';
import AddBlog from './pages/blogs/AddBlog';
import Coupons from './pages/ecommerce/coupon';
import AddCoupon from './pages/ecommerce/coupon/AddCoupon';
import OrderDetail from './pages/ecommerce/orders/OrderDetail';
import { useSelector } from 'react-redux';

  const App = () => {

  return (
    <div id="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/admin/*" element={<ProtectedRoutes />} />
        </Routes>
      </Router>
      {/* Page Content End */}
      <RightSidebar />
      <div className="rightbar-overlay"></div>
    </div>
  );
}

const ProtectedRoutes = () => {
  const authState = useSelector((state) => state);
  const { user } = authState.auth;

  // Check if user is authenticated and has admin role
  const isAdmin = user && user.role === 'admin';
    return isAdmin ? (
    <MainLayout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="blog/blog-categories" element={<BlogCategory />} />
        <Route path="blog/create-blog" element={<AddBlog />} />
        <Route path="blog/edit-blog/:id" element={<AddBlog />} />
        <Route path="enquiries" element={<EnquiryList />} />
        <Route path="mera-bazzar" element={<EcomDashboard />} />
        <Route path="mera-bazzar/customers" element={<Customers />} />
        <Route path="mera-bazzar/products" element={<AllProducts />} />
        <Route path="mera-bazzar/product/:productId" element={<ProductDetails />} />
        <Route path="mera-bazzar/brands" element={<BrandList />} />
        <Route path="mera-bazzar/categories" element={<CategoryList />} />
        <Route path="mera-bazzar/colors" element={<ColorList />} />
        <Route path="mera-bazzar/orders" element={<OrderList />} />
        <Route path="mera-bazzar/order/view-order/:orderId" element={<OrderDetail />} />
        <Route path="mera-bazzar/add-product" element={<AddProduct />} />
        <Route path="mera-bazzar/edit-product/:id" element={<AddProduct />} />
        <Route path="mera-bazzar/add-brand" element={<AddBrand />} />
        <Route path="mera-bazzar/edit-brand/:id" element={<AddBrand />} />
        <Route path="mera-bazzar/add-category" element={<AddCatagory />} />
        <Route path="mera-bazzar/edit-product-category/:id" element={<AddCatagory />} />
        <Route path="mera-bazzar/add-color" element={<AddColor />} />
        <Route path="mera-bazzar/edit-color/:id" element={<AddColor />} />
        <Route path="mera-bazzar/add-blog-category" element={<AddBlogCatagory />} />
        <Route path="mera-bazzar/edit-category/:id" element={<AddBlogCatagory />} />
        <Route path="mera-bazzar/coupons" element={<Coupons />} />
        <Route path="mera-bazzar/add-coupon" element={<AddCoupon />} />
        <Route path="mera-bazzar/edit-coupon/:id" element={<AddCoupon />} />
      </Routes>
    </MainLayout>
  ) : (
    <Navigate to="/" replace />
  );
}

export default App;
