import React from 'react'

const ShippingInfo = ({shippingData}) => {
  return (
    <div className="col-lg-4">
        <div className="card">
            <div className="card-body">
                <h4 className="header-title mb-3">Shipping Information</h4>

                <h5 className="font-family-primary font-weight-semibold">{shippingData?.firstname} {shippingData?.lastname}</h5>
                
                <p className="mb-2"><span className="font-weight-semibold mr-2">Address:</span> {shippingData?.address}</p>
                <p className="mb-2"><span className="font-weight-semibold mr-2">Email:</span> {shippingData?.email}</p>
                <p className="mb-0"><span className="font-weight-semibold mr-2">Mobile:</span> (+91) {shippingData?.mobile}</p>

            </div>
        </div>
    </div> 
  )
}

export default ShippingInfo