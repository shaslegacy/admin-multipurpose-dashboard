import { ApexOptions } from 'apexcharts';

export const getTotalRevenueOptions = (): ApexOptions => {
  return {
    chart: { height: 220, type: "radialBar" },
    plotOptions: { radialBar: { hollow: { size: "65%" } } },
    colors: ["#f1556c"],
    labels: ["Revenue"],
  };
};

export const getSalesAnalyticsOptions = (): ApexOptions => {
  return {
    // ... (Sales Analytics Chart options)
    series: [
        {
            name: "Revenue",
            type: "column",
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
            name: "Sales",
            type: "line",
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
        ],
        chart: { height: 378, type: "line" },
        stroke: { width: [2, 3] },
        plotOptions: { bar: { columnWidth: "50%" } },
        colors: ["#1abc9c", "#4a81d4"], 
        dataLabels: { enabled: true, enabledOnSeries: [1] },
        labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
        ],
        xaxis: { type: "datetime" },
        legend: { offsetY: 7 },
        grid: { padding: { bottom: 20 } },
        fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: null || [],
            inverseColors: true,
            opacityFrom: 0.75,
            opacityTo: 0.75,
            stops: [0, 0, 0],
        },
        },
        yaxis: [
        { title: { text: "Net Revenue" } },
        { opposite: true, title: { text: "Number of Sales" } },
        ],
  };
};

