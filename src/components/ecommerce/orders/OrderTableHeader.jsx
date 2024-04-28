import React from 'react'

const OrderTableHeader = () => {
  return (
    <thead className="thead-light">
    <tr>
        <th style={{width: "20px"}}>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" for="customCheck1">&nbsp;</label>
            </div>
        </th>
        <th>Order ID</th>
        <th>Products</th>
        <th>Date</th>
        <th>Total</th>
        <th>Payment Method</th>
        <th>Order Status</th>
        <th style={{width: "125px"}}>Action</th>
    </tr>
</thead>
  )
}

export default OrderTableHeader