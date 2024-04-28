import React from 'react'

const TotalRevenue = () => {
  return (
    <div className="col-md-6 col-xl-3">
    <div className="widget-rounded-circle card-box">
      <div className="row">
        <div className="col-6">
          <div className="avatar-lg rounded bg-soft-primary">
            <i className="dripicons-wallet font-24 avatar-title text-primary"></i>
          </div>
        </div>
        <div className="col-6">
          <div className="text-right">
            <h3 className="text-dark mt-1">
            ₹<span data-plugin="counterup">58,947</span>
            </h3>
            <p className="text-muted mb-1 text-truncate">
              Total Revenue
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TotalRevenue