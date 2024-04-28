import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Bredcrumb from 'src/components/core/Bredcrumb';
import Pagination from 'src/components/ecommerce/products/pagination';
import ProductList from 'src/components/ecommerce/products/productList';
import { getProducts } from 'src/features/product/productSlice';

const AllProducts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    },[]);

    const productState = useSelector((state) => state.products.products);

  return (
    <div className="content">
        <div className="container-fluid">
            
            <Bredcrumb title="All Products" />

            <div className="row">
                <div className="col-12">
                    <div className="card-box">
                        <div className="row">
                            <div className="col-lg-8">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <label for="inputPassword2" className="sr-only">Search</label>
                                        <input type="search" className="form-control" id="inputPassword2" placeholder="Search..." />
                                    </div>
                                    <div className="form-group mx-sm-3">
                                        <label for="status-select" className="mr-2">Sort By</label>
                                        <select className="custom-select" id="status-select">
                                            <option selected="">All</option>
                                            <option value="1">Popular</option>
                                            <option value="2">Price Low</option>
                                            <option value="3">Price High</option>
                                            <option value="4">Sold Out</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-lg-right mt-3 mt-lg-0">
                                    <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i className="mdi mdi-cog"></i></button>
                                    <Link to="/admin/mera-bazzar/add-product" className="btn btn-danger waves-effect waves-light"><i className="mdi mdi-plus-circle mr-1"></i> Add New</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

            <div className="row">
                {productState.map((product) => (
                        <div className="col-md-6 col-xl-3">
                        <ProductList product={product} />
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col-12">
                    <Pagination />
                </div> 
            </div>
        </div> 
    </div>
  )
}

export default AllProducts