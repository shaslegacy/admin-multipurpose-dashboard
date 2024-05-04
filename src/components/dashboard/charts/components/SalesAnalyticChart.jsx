import React, { useEffect, useRef, useState } from "react";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { getSalesAnalyticsOptions } from '../../../../widgets/ChartOptions';

const SalesAnalyticChart = (chartData) => {

    const salesAnalyticsRef = useRef(null);

    const [salesAnalyticsColors, setSalesAnalyticsColors] = useState(["#1abc9c", "#4a81d4"]);

    const salesAnalyticsOptions = getSalesAnalyticsOptions();

    useEffect(() => {
        const salesAnalyticsDataColors = salesAnalyticsRef.current?.dataset.colors;
        salesAnalyticsDataColors && setSalesAnalyticsColors(salesAnalyticsDataColors.split(","));
      }, []);
      
  return (
    <div className="col-lg-8">
      <div className="card-box pb-2">
        <div className="float-right d-none d-md-inline-block">
          <div className="btn-group mb-2">
            <button type="button" className="btn btn-xs btn-light">
              Today
            </button>
            <button type="button" className="btn btn-xs btn-light">
              Weekly
            </button>
            <button type="button" className="btn btn-xs btn-secondary">
              Monthly
            </button>
          </div>
        </div>

        <h4 className="header-title mb-3">Sales Analytics</h4>

        <div dir="ltr">
          <div
            ref={salesAnalyticsRef}
            id="sales-analytics"
            className="mt-4"
            data-colors="#1abc9c,#4a81d4"
          ></div>

          <Chart
            options={salesAnalyticsOptions}
            series={[
              {
                name: "Revenue",
                type: "column",
                data: [
                  440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160,
                ],
              },
              {
                name: "Sales",
                type: "line",
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
              },
            ]}
            type="line"
            height={378}
            colors={salesAnalyticsColors}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesAnalyticChart;
