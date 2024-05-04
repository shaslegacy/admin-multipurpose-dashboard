import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Charts from "src/components/dashboard/charts/Charts";
import EcommerceCards from "src/components/ecom-dashboard/cards/EcommerceCards";
// import EcommerceCharts from "src/components/ecom-dashboard/charts/EcommerceCharts";
import EcommerceDataCollection from "src/components/ecom-dashboard/topCollections/EcommerceDataCollection";
import { getMonthlyOrders, getYearlyOrders } from "../features/order/orderSlice";

const EcomDashboard = () => {
  const dispatch = useDispatch();
  const monthlyData = useSelector((state) => state.auth.monthlyOrders);

  useEffect(() => {
    dispatch(getMonthlyOrders())
    dispatch(getYearlyOrders())
  },[])

  useEffect(() => {
    let monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let data = [];

    for(let index = 0; index < monthlyData?.length; index++) {
      const element = monthlyData[index];
      data.push({type:monthsName[element?._id?.month], sales:element?.count})
    }

    console.log("month data", data)
  },[monthlyData])

  
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
      <Charts data = {monthlyData}/>

      {/* Transaction History */}
        <EcommerceDataCollection />
      </div>
    </div>
  );
};

export default EcomDashboard;
