import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    Apex: any;
    ApexCharts: any;
  }
}


interface DashboardProps {}

const SalesAnalyticChart = () => {
  const revenueChartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initCharts();
  }, []);

  const initCharts = () => {
    window.Apex = {
      chart: { parentHeightOffset: 0, toolbar: { show: false } },
      grid: { padding: { left: 0, right: 0 } },
      colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
    };

    let colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
    const revenueChartColors = revenueChartRef.current?.dataset.colors;
    if (revenueChartColors) {
      colors = revenueChartColors.split(",");
    }

    const options = {
      chart: {
        height: 363,
        type: "line",
        dropShadow: { enabled: true, opacity: 0.2, blur: 7, left: -7, top: 7 },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 4 },
      series: [
        {
          name: "Current Week",
          type: "area",
          data: [10, 20, 15, 25, 20, 30, 20],
        },
        {
          name: "Previous Week",
          type: "line",
          data: [0, 15, 10, 30, 15, 35, 25],
        },
      ],
      fill: { type: "solid", opacity: [0.35, 1] },
      colors: colors,
      zoom: { enabled: false },
      legend: { show: false },
      xaxis: {
        type: "string",
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        tooltip: { enabled: false },
        axisBorder: { show: false },
      },
      yaxis: {
        labels: {
          formatter: (val: any) => val + "k",
          offsetX: -15,
        },
      },
    };

    new window.ApexCharts(revenueChartRef.current, options).render();
  };



  return (
    <div className="col-xl-8">
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

        <div className="row text-center">
          <div className="col-md-4">
            <p className="text-muted mb-0 mt-3">Current Week</p>
            <h2 className="font-weight-normal mb-3">
              <small className="mdi mdi-checkbox-blank-circle text-primary align-middle mr-1"></small>
              <span>$58,254</span>
            </h2>
          </div>
          <div className="col-md-4">
            <p className="text-muted mb-0 mt-3">Previous Week</p>
            <h2 className="font-weight-normal mb-3">
              <small className="mdi mdi-checkbox-blank-circle text-success align-middle mr-1"></small>
              <span>$69,524</span>
            </h2>
          </div>
          <div className="col-md-4">
            <p className="text-muted mb-0 mt-3">Targets</p>
            <h2 className="font-weight-normal mb-3">
              <small className="mdi mdi-checkbox-blank-circle text-success align-middle mr-1"></small>
              <span>$95,025</span>
            </h2>
          </div>
        </div>

        <div
          ref={revenueChartRef}
          className="apex-charts mt-3"
          data-colors="#6658dd,#1abc9c"
        ></div>
      </div>
    </div>
  );
};

export default SalesAnalyticChart;
