import React from "react";
import { Link } from "react-router-dom";

const LatestHistory = () => {
  return (
    <div className="col-xl-6">
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
              Edit Report
            </Link>

            <Link to="/#" className="dropdown-item">
              Export Report
            </Link>

            <Link to="/#" className="dropdown-item">
              Action
            </Link>
          </div>
        </div>

        <h4 className="header-title mb-3">Revenue History</h4>

        <div className="table-responsive">
          <table className="table table-borderless table-nowrap table-hover table-centered m-0">
            <thead className="thead-light">
              <tr>
                <th>Marketplaces</th>
                <th>Date</th>
                <th>Payouts</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5 className="m-0 font-weight-normal">Themes Market</h5>
                </td>

                <td>Oct 15, 2018</td>

                <td>$5848.68</td>

                <td>
                  <span className="badge bg-soft-warning text-warning">
                    Upcoming
                  </span>
                </td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-pencil"></i>
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <h5 className="m-0 font-weight-normal">Freelance</h5>
                </td>

                <td>Oct 12, 2018</td>

                <td>$1247.25</td>

                <td>
                  <span className="badge bg-soft-success text-success">
                    Paid
                  </span>
                </td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-pencil"></i>
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <h5 className="m-0 font-weight-normal">Share Holding</h5>
                </td>

                <td>Oct 10, 2018</td>

                <td>$815.89</td>

                <td>
                  <span className="badge bg-soft-success text-success">
                    Paid
                  </span>
                </td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-pencil"></i>
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <h5 className="m-0 font-weight-normal">
                    Envato's Affiliates
                  </h5>
                </td>

                <td>Oct 03, 2018</td>

                <td>$248.75</td>

                <td>
                  <span className="badge bg-soft-danger text-danger">
                    Overdue
                  </span>
                </td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-pencil"></i>
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <h5 className="m-0 font-weight-normal">Marketing Revenue</h5>
                </td>

                <td>Sep 21, 2018</td>

                <td>$978.21</td>

                <td>
                  <span className="badge bg-soft-warning text-warning">
                    Upcoming
                  </span>
                </td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-pencil"></i>
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <h5 className="m-0 font-weight-normal">Advertise Revenue</h5>
                </td>

                <td>Sep 15, 2018</td>

                <td>$358.10</td>

                <td>
                  <span className="badge bg-soft-success text-success">
                    Paid
                  </span>
                </td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-pencil"></i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestHistory;
