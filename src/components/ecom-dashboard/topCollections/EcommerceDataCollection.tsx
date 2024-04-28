import React from "react";
import TransactionHistory from "./components/TransactionHistory";
import RecentProducts from "./components/RecentProducts";

const EcommerceDataCollection = () => {
  return (
    <div className="row">
     {/* Transaction History */}
        <TransactionHistory />
      
      {/* Recent Products */}
        <RecentProducts />
    </div>
  );
};

export default EcommerceDataCollection;
