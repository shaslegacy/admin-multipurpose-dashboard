import React from 'react'

const OrderedItems = ({products, paymentIntent, total, ...props}) => {
  return (
    <div className="col-lg-8">
        <div className="card">
            <div className="card-body">
                <h4 className="header-title mb-3">Items from Order {paymentIntent?.id}</h4>

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
                            {products?.map((product, index) => (
                                <tr key={index}>
                                    <th scope="row">{product.product.title}</th>
                                    <td><img src={product.product.images[0]?.url} alt={product.title} height="32" /></td>
                                    <td>{product?.count}</td>
                                    <td>${product.product.price}</td>
                                    <td>${product.product.price * product?.count}</td>
                                </tr>
                            ))}
                            <tr>
                                <th scope="row" colspan="4" className="text-right">Sub Total :</th>
                                <td><div className="font-weight-bold">${paymentIntent?.amount}</div></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="4" className="text-right">Shipping Charge :</th>
                                <td>${props.shippingCharge}</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="4" className="text-right">Estimated Tax :</th>
                                <td>${props.tax}</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="4" className="text-right">Total :</th>
                                <td><div className="font-weight-bold">${total}</div></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderedItems