import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
// import WordMapChart from 'src/widgets/WordMapChart';

interface DashboardProps {}

const TotalRevenueChart: React.FC<DashboardProps> = () => {
  const markers = [
    { lat: 40.7128, lng: -74.006, title: 'New York' },
    { lat: 34.0522, lng: -118.2437, title: 'Los Angeles' },
    { lat: 51.5074, lng: -0.1278, title: 'London' },
    // Add more markers as needed
  ];

  return (
    <div className="col-xl-4">
      <div className="card-box">
        <div className="dropdown float-right">
          <a
            href="#"
            className="dropdown-toggle arrow-none card-drop"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="mdi mdi-dots-vertical"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="javascript:void(0);" className="dropdown-item">
              Sales Report
            </Link>
            <Link to="javascript:void(0);" className="dropdown-item">
              Export Report
            </Link>
            <Link to="javascript:void(0);" className="dropdown-item">
              Profit
            </Link>
            <Link to="javascript:void(0);" className="dropdown-item">
              Action
            </Link>
          </div>
        </div>

        <h4 className="header-title mb-0">Total Revenue</h4>

        {/* <div className="widget-chart text-center" dir="ltr">
        <WordMapChart markers={markers} />
          <div
            id="world-map-markers"
            style={{ height: "230px" }}
            className="mt-4"
          ></div>

          <h5 className="text-muted mt-4">Total sales made today</h5>
          <h2>$178</h2>

          <p className="text-muted w-75 mx-auto sp-line-2">
            Traditional heading elements are designed to work best in the meat
            of your page content.
          </p>

          <div className="row mt-4">
            <div className="col-4">
              <p className="text-muted font-15 mb-1 text-truncate">Target</p>
              <h4>
                <i className="fe-arrow-down text-danger mr-1"></i>$7.8k
              </h4>
            </div>
            <div className="col-4">
              <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
              <h4>
                <i className="fe-arrow-up text-success mr-1"></i>$1.4k
              </h4>
            </div>
            <div className="col-4">
              <p className="text-muted font-15 mb-1 text-truncate">
                Last Month
              </p>
              <h4>
                <i className="fe-arrow-down text-danger mr-1"></i>$15k
              </h4>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TotalRevenueChart;


// worldMap.vectorMap is not a function