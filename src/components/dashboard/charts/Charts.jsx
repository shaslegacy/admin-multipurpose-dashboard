import React from "react";
import TotalRevenueChart from "./components/TotalRevenueChart";
import SalesAnalyticChart from "./components/SalesAnalyticChart";

const Charts = ({data}) => {
  return (
    <div className="row">
      {/* Total Revenue */}
        <TotalRevenueChart />

      {/* Sales Analytics */}
        <SalesAnalyticChart chartData={data} />
      
    </div>
  );
};

export default Charts;
