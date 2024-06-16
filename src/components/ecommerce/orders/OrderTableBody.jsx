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
             <td><Link to={`../mera-bazzar/order/view-order/${data?._id}`} className="text-body font-weight-bold">{data.paymentIntent.id}</Link> </td>
             <td>
                 {data.products?.length > 0 && data.products?.map((product, index) => (
                     <>
                        <Link to={`../mera-bazzar/order/view-order/${data?._id}`}>
                            <img src={product.product.images[0]?.url} alt={product.product.title} title={product.product.title} height="32" />
                        </Link>
                     </>
                 ))}
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
                 <Link to={`../mera-bazzar/order/view-order/${data?._id}`} className="action-icon"> <i className="mdi mdi-eye"></i></Link>
                 <Link to="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                 <Link to="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
             </td>
         </tr>
        ))}
    </tbody>
  )
}

export default OrderTableBody