import React from "react";
import { Link } from "react-router-dom";
import EcommerceCards from "src/components/ecom-dashboard/cards/EcommerceCards";
// import EcommerceCharts from "src/components/ecom-dashboard/charts/EcommerceCharts";
import EcommerceDataCollection from "src/components/ecom-dashboard/topCollections/EcommerceDataCollection";

const EcomDashboard = () => {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <Link to="#">UBold</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">eCommerce</Link>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
              <h4 className="page-title">Dashboard</h4>
            </div>
          </div>
        </div>

      {/* Card */}
      <EcommerceCards />

      {/* charts */}
      {/* <EcommerceCharts /> */}

      {/* Transaction History */}
        <EcommerceDataCollection />
      </div>
    </div>
  );
};

export default EcomDashboard;
