import React from 'react'

const SalesCounts = () => {
  return (
    <div className="col-md-6 col-xl-3">
    <div className="widget-rounded-circle card-box">
      <div className="row">
        <div className="col-6">
          <div className="avatar-lg rounded-circle bg-soft-success border-success border">
            <i className="fe-shopping-cart font-22 avatar-title text-success"></i>
          </div>
        </div>
        <div className="col-6">
          <div className="text-right">
            <h3 className="text-dark mt-1">
              <span data-plugin="counterup">127</span>
            </h3>
            <p className="text-muted mb-1 text-truncate">Today's Sales</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SalesCounts