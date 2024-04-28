import React from "react";
import TotalRevenueChart from "./components/TotalRevenueChart";
import SalesAnalyticChart from "./components/SalesAnalyticChart";

const Charts = () => {
  return (
    <div className="row">
      {/* Total Revenue */}
        <TotalRevenueChart />

      {/* Sales Analytics */}
        <SalesAnalyticChart />
      
    </div>
  );
};

export default Charts;
