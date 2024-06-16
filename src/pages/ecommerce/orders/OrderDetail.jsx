import React, { useEffect } from 'react'
import Bredcrumb from 'src/components/core/Bredcrumb'
import { getSingleOrder } from '../../../features/order/orderSlice'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderedItems from './components/OrderedItems';
import TrackOrder from './components/TrackOrder';
import ShippingInfo from './components/deliveryinfo/ShippingInfo';
import BillingInfo from './components/deliveryinfo/BillingInfo';
import DeliveryInfo from './components/deliveryinfo/DeliveryInfo';

const OrderDetail = () => {

    const location = useLocation();
    const orderId = location.pathname.split("/")[5];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleOrder(orderId));
    }, []);

    const orderState = useSelector((state) =>state.order.singleOrder);

    const shippingCharge = 100;
    const tax = 10;

    const total = orderState?.paymentIntent?.amount + shippingCharge + tax


  return (
        <div className="content">
            <div className="container-fluid">
               <Bredcrumb title="Order Detail"/>

                <div className="row">
                    <TrackOrder paymentIntent={orderState?.paymentIntent}
                     status={orderState?.orderStatus}
                     orderDate = {orderState?.createdAt} />
                    <OrderedItems 
                        products={orderState?.products} 
                        paymentIntent={orderState?.paymentIntent} 
                        total={total} 
                        shippingCharge={shippingCharge}
                        tax={tax} 
                        />
                </div>

                <div className="row">
                    <ShippingInfo shippingData={orderState?.orderby} />
                
                    <BillingInfo billingData={orderState?.orderby} />

                    <DeliveryInfo />

                </div>
                
            </div> 

        </div> 
  )
}

export default OrderDetail