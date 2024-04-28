import React, { useEffect, useRef, useState } from "react";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { getTotalRevenueOptions } from '../../../../widgets/ChartOptions';
import { Link } from "react-router-dom";

const TotalRevenueChart = () => {

    const totalRevenueRef = useRef<HTMLDivElement | null>(null);

    const [totalRevenueColors, setTotalRevenueColors] = useState<string[]>(["#f1556c"]);

    const totalRevenueOptions: ApexOptions = getTotalRevenueOptions();

    useEffect(() => {
     // Update state with data-colors
     const totalRevenueDataColors = totalRevenueRef.current?.dataset.colors;
     totalRevenueDataColors && setTotalRevenueColors(totalRevenueDataColors.split(","));
    }, [])
    
  return (
    <div className="col-lg-4">
      <div className="card-box">
        <div className="dropdown float-right">
          <a
            href="/#"
            className="dropdown-toggle arrow-none card-drop"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="mdi mdi-dots-vertical"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="/#" className="dropdown-item">
              Sales Report
            </Link>

            <Link to="/#" className="dropdown-item">
              Export Report
            </Link>

            <Link to="/#" className="dropdown-item">
              Profit
            </Link>

            <Link to="/#" className="dropdown-item">
              Action
            </Link>
          </div>
        </div>

        <h4 className="header-title mb-0">Total Revenue</h4>

        <div className="widget-chart text-center" dir="ltr">
          <div
            ref={totalRevenueRef}
            id="total-revenue"
            className="mt-0"
            data-colors="#f1556c"
          ></div>
          <Chart
            options={totalRevenueOptions}
            series={[68]}
            type="radialBar"
            height={220}
            colors={totalRevenueColors}
            la
          />
          <h5 className="text-muted mt-0">Total sales made today</h5>
          <h2>₹178</h2>

          <p className="text-muted w-75 mx-auto sp-line-2">
            Traditional heading elements are designed to work best in the meat
            of your page content.
          </p>

          <div className="row mt-3">
            <div className="col-4">
              <p className="text-muted font-15 mb-1 text-truncate">Target</p>
              <h4>
                <i className="fe-arrow-down text-danger mr-1"></i>₹7.8k
              </h4>
            </div>
            <div className="col-4">
              <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
              <h4>
                <i className="fe-arrow-up text-success mr-1"></i>₹1.4k
              </h4>
            </div>
            <div className="col-4">
              <p className="text-muted font-15 mb-1 text-truncate">
                Last Month
              </p>
              <h4>
                <i className="fe-arrow-down text-danger mr-1"></i>₹15k
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenueChart;
