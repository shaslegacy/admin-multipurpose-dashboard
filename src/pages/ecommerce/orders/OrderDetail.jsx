import React, { useEffect } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb'
import { getOrderByUser, getOrders } from 'src/features/auth/authSlice'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const OrderDetail = () => {

    const location = useLocation();
    const userId = location.pathname.split("/")[5];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderByUser(userId));
    }, []);

    const orderState = useSelector((state) => state.auth.orderbyuser);

    console.log("first", orderState)


  return (
        <div className="content">
            <div className="container-fluid">
               <Bredcrumb title="Order Detail"/>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title mb-3">Track Order</h4>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-4">
                                            <h5 className="mt-0">Order ID:</h5>
                                            <p>#VL2537</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-4">
                                            <h5 className="mt-0">Tracking ID:</h5>
                                            <p>894152012012</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="track-order-list">
                                    <ul className="list-unstyled">
                                        <li className="completed">
                                            <h5 className="mt-0 mb-1">Order Placed</h5>
                                            <p className="text-muted">April 21 2019 <small className="text-muted">07:22 AM</small> </p>
                                        </li>
                                        <li className="completed">
                                            <h5 className="mt-0 mb-1">Packed</h5>
                                            <p className="text-muted">April 22 2019 <small className="text-muted">12:16 AM</small></p>
                                        </li>
                                        <li>
                                            <span className="active-dot dot"></span>
                                            <h5 className="mt-0 mb-1">Shipped</h5>
                                            <p className="text-muted">April 22 2019 <small className="text-muted">05:16 PM</small></p>
                                        </li>
                                        <li>
                                            <h5 className="mt-0 mb-1"> Delivered</h5>
                                            <p className="text-muted">Estimated delivery within 3 days</p>
                                        </li>
                                    </ul>

                                    <div className="text-center mt-4">
                                        <a href="#" className="btn btn-primary">Show Details</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title mb-3">Items from Order #VL2537</h4>

                                <div className="table-responsive">
                                    <table className="table table-bordered table-centered mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Product name</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Polo Navy blue T-shirt</th>
                                                <td><img src="../assets/images/products/product-1.png" alt="product-img" height="32" /></td>
                                                <td>1</td>
                                                <td>$39</td>
                                                <td>$39</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Red Hoodie for men</th>
                                                <td><img src="../assets/images/products/product-5.png" alt="product-img" height="32" /></td>
                                                <td>2</td>
                                                <td>$46</td>
                                                <td>$92</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Red Hoodie for men</th>
                                                <td><img src="../assets/images/products/product-3.png" alt="product-img" height="32" /></td>
                                                <td>1</td>
                                                <td>$46</td>
                                                <td>$46</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" colspan="4" className="text-right">Sub Total :</th>
                                                <td><div className="font-weight-bold">$177</div></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" colspan="4" className="text-right">Shipping Charge :</th>
                                                <td>$24</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" colspan="4" className="text-right">Estimated Tax :</th>
                                                <td>$12</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" colspan="4" className="text-right">Total :</th>
                                                <td><div className="font-weight-bold">$213</div></td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title mb-3">Shipping Information</h4>

                                <h5 className="font-family-primary font-weight-semibold">Brent Jones</h5>
                                
                                <p className="mb-2"><span className="font-weight-semibold mr-2">Address:</span> 3559 Roosevelt Wilson Lane San Bernardino, CA 92405</p>
                                <p className="mb-2"><span className="font-weight-semibold mr-2">Phone:</span> (123) 456-7890</p>
                                <p className="mb-0"><span className="font-weight-semibold mr-2">Mobile:</span> (+01) 12345 67890</p>
    
                            </div>
                        </div>
                    </div> 
                
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title mb-3">Billing Information</h4>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <p className="mb-2"><span className="font-weight-semibold mr-2">Payment Type:</span> Credit Card</p>
                                        <p className="mb-2"><span className="font-weight-semibold mr-2">Provider:</span> Visa ending in 2851</p>
                                        <p className="mb-2"><span className="font-weight-semibold mr-2">Valid Date:</span> 02/2020</p>
                                        <p className="mb-0"><span className="font-weight-semibold mr-2">CVV:</span> xxx</p>
                                    </li>
                                </ul>
    
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title mb-3">Delivery Info</h4>
    
                                <div className="text-center">
                                    <i className="mdi mdi-truck-fast h2 text-muted"></i>
                                    <h5><b>UPS Delivery</b></h5>
                                    <p className="mb-1"><span className="font-weight-semibold">Order ID :</span> xxxx235</p>
                                    <p className="mb-0"><span className="font-weight-semibold">Payment Mode :</span> COD</p>
                                </div>
                            </div>
                        </div>
                    </div> 

                </div>
                
            </div> 

        </div> 
  )
}

export default OrderDetail