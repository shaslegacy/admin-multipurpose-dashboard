import React from 'react'

const TodayVisit = () => {
  return (
    <div className="col-md-6 col-xl-3">
    <div className="widget-rounded-circle card-box">
      <div className="row">
        <div className="col-6">
          <div className="avatar-lg rounded-circle bg-soft-warning border-warning border">
            <i className="fe-eye font-22 avatar-title text-warning"></i>
          </div>
        </div>
        <div className="col-6">
          <div className="text-right">
            <h3 className="text-dark mt-1">
              <span data-plugin="counterup">78.41</span>k
            </h3>
            <p className="text-muted mb-1 text-truncate">Today's Visits</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TodayVisit