import React from "react";
import TopUsers from "./components/TopUsers";
import LatestHistory from "./components/LatestHistory";

const TopCollections = () => {
  return (
    <div className="row">
     {/* Top Users */}
        <TopUsers />
      
      {/* Latest History */}
        <LatestHistory />
    </div>
  );
};

export default TopCollections;
