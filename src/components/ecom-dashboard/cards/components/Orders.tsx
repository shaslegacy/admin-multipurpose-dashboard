import React from "react";

const Orders = () => {
  return (
    <div className="col-md-6 col-xl-3">
      <div className="widget-rounded-circle card-box">
        <div className="row">
          <div className="col-6">
            <div className="avatar-lg rounded bg-soft-success">
              <i className="dripicons-basket font-24 avatar-title text-success"></i>
            </div>
          </div>
          <div className="col-6">
            <div className="text-right">
              <h3 className="text-dark mt-1">
                <span data-plugin="counterup">1,845</span>
              </h3>
              <p className="text-muted mb-1 text-truncate">Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
