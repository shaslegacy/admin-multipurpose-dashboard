import React from 'react'
import { Link } from 'react-router-dom'

const OrderTableBody = ({dataState}) => {
  return (
    <tbody>
        {dataState?.map((data, i) => (
             <tr>
             <td>
                 <div className="custom-control custom-checkbox">
                     <input type="checkbox" className="custom-control-input" id={`customCheck${i + 2}`} />
                     <label className="custom-control-label" for={`customCheck${i + 2}`}>&nbsp;</label>
                 </div>
             </td>
             <td><a href="ecommerce-order-detail.html" className="text-body font-weight-bold">{data.paymentIntent.id}</a> </td>
             <td>
                 <a href="ecommerce-product-detail.html"><img src="../../assets/images/products/product-1.png" alt="product-img" height="32" /></a>
                 <a href="ecommerce-product-detail.html"><img src="../../assets/images/products/product-2.png" alt="product-img" height="32" /></a>
             </td>
             <td>
             {new Date(data.createdAt).toLocaleString('en-US', {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric'
                })}{' '}
                <small className="text-muted">
                    {new Date(data.createdAt).toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })}
                </small>
             </td>
             <td>
                 {data.paymentIntent.amount ? `₹${data.paymentIntent.amount}` : '₹0.00'}
             </td>
             <td>
             {data.paymentIntent.method === 'COD' ? 'Cash on Delivery' : 'Online Payment'}
             </td>
             <td>
                 <h5><span className="badge badge-info">{data.orderStatus}</span></h5>
             </td>
             <td>
                 <Link to={`../mera-bazzar/order/view-order/${data.orderby._id}`} className="action-icon"> <i className="mdi mdi-eye"></i></Link>
                 <Link to="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                 <Link to="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
             </td>
         </tr>
        ))}
    </tbody>
  )
}

export default OrderTableBody