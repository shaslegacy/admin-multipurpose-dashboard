import React from "react";
import TotalRevenueChart from "./components/TotalRevenueChart";
import SalesAnalyticChart from "./components/SalesAnalyticChart";

const EcommerceCharts = () => {
  return (
    <div className="row">
    
      {/* Sales Analytics */}
        <SalesAnalyticChart />

        {/* Total Revenue */}
        {/* <TotalRevenueChart /> */}
      
    </div>
  );
};

export default EcommerceCharts;
