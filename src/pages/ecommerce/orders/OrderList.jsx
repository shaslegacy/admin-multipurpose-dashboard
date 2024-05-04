import React, { useEffect } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb'
import Pagination from 'src/components/ecommerce/products/pagination';
import { getOrders } from '../../../features/order/orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import OrderTableHeader from 'src/components/ecommerce/orders/OrderTableHeader';
import OrderTableBody from 'src/components/ecommerce/orders/OrderTableBody';

const OrderList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    },[]);

    const orderState = useSelector((state) => state.auth.orders);

  return (
    <div className="content">
        <div className="container-fluid">

            <Bredcrumb title="Orders"/> 

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-lg-8">
                                    <form className="form-inline">
                                        <div className="form-group mb-2">
                                            <label for="inputPassword2" className="sr-only">Search</label>
                                            <input type="search" className="form-control" id="inputPassword2" placeholder="Search..." />
                                        </div>
                                        <div className="form-group mx-sm-3 mb-2">
                                            <label for="status-select" className="mr-2">Status</label>
                                            <select className="custom-select" id="status-select">
                                                <option selected>Choose...</option>
                                                <option value="1">Paid</option>
                                                <option value="2">Awaiting Authorization</option>
                                                <option value="3">Payment failed</option>
                                                <option value="4">Cash On Delivery</option>
                                                <option value="5">Fulfilled</option>
                                                <option value="6">Unfulfilled</option>
                                            </select>
                                        </div>
                                    </form>                            
                                </div>
                                <div className="col-lg-4">
                                    <div className="text-lg-right">
                                        <button type="button" className="btn btn-danger waves-effect waves-light mb-2 mr-2"><i className="mdi mdi-basket mr-1"></i> Add New Order</button>
                                        <button type="button" className="btn btn-light waves-effect mb-2">Export</button>
                                    </div>
                                </div>
                            </div>
    
                            <div className="table-responsive">
                                <table className="table table-centered table-nowrap mb-0">
                                   <OrderTableHeader />
                                   <OrderTableBody dataState={orderState} />
                                </table>
                            </div>

                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default OrderList