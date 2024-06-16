import React from 'react'

const DeliveryInfo = () => {
  return (
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
  )
}

export default DeliveryInfo