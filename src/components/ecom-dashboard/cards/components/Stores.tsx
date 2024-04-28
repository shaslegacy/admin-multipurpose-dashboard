import React from 'react'

const Store = () => {
  return (
    <div className="col-md-6 col-xl-3">
    <div className="widget-rounded-circle card-box">
      <div className="row">
        <div className="col-6">
          <div className="avatar-lg rounded bg-soft-info">
            <i className="dripicons-store font-24 avatar-title text-info"></i>
          </div>
        </div>
        <div className="col-6">
          <div className="text-right">
            <h3 className="text-dark mt-1">
              <span data-plugin="counterup">825</span>
            </h3>
            <p className="text-muted mb-1 text-truncate">Stores</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Store