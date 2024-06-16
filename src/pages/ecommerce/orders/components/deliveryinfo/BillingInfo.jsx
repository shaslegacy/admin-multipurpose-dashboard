import React from 'react'

const BillingInfo = () => {
  return (
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
  )
}

export default BillingInfo