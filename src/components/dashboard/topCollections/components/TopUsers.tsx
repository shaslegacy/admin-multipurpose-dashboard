import React from "react";
import { Link } from "react-router-dom";

const TopUsers = () => {
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

        <h4 className="header-title mb-3">Top 5 Users Balances</h4>

        <div className="table-responsive">
          <table className="table table-borderless table-hover table-nowrap table-centered m-0">
            <thead className="thead-light">
              <tr>
                <th colSpan={2}>Profile</th>
                <th>Currency</th>
                <th>Balance</th>
                <th>Reserved in orders</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "36px" }}>
                  <img
                    src="../assets/images/users/user-2.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle avatar-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Tomaslau</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-btc text-primary"></i> BTC
                </td>

                <td>0.00816117 BTC</td>

                <td>0.00097036 BTC</td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-plus"></i>
                  </Link>
                  <Link to="/#" className="btn btn-xs btn-danger">
                    <i className="mdi mdi-minus"></i>
                  </Link>
                </td>
              </tr>

              <tr>
                <td style={{ width: "36px" }}>
                  <img
                    src="../assets/images/users/user-3.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle avatar-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Erwin E. Brown</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-eth text-primary"></i> ETH
                </td>

                <td>3.16117008 ETH</td>

                <td>1.70360009 ETH</td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-plus"></i>
                  </Link>
                  <Link to="/#" className="btn btn-xs btn-danger">
                    <i className="mdi mdi-minus"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: "36px" }}>
                  <img
                    src="../assets/images/users/user-4.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle avatar-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Margeret V. Ligon</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-eur text-primary"></i> EUR
                </td>

                <td>25.08 EUR</td>

                <td>12.58 EUR</td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-plus"></i>
                  </Link>
                  <Link to="/#" className="btn btn-xs btn-danger">
                    <i className="mdi mdi-minus"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: "36px" }}>
                  <img
                    src="../assets/images/users/user-5.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle avatar-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Jose D. Delacruz</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-cny text-primary"></i> CNY
                </td>

                <td>82.00 CNY</td>

                <td>30.83 CNY</td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-plus"></i>
                  </Link>
                  <Link to="/#" className="btn btn-xs btn-danger">
                    <i className="mdi mdi-minus"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: "36px" }}>
                  <img
                    src="../assets/images/users/user-6.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle avatar-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Luke J. Sain</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-btc text-primary"></i> BTC
                </td>

                <td>2.00816117 BTC</td>

                <td>1.00097036 BTC</td>

                <td>
                  <Link to="/#" className="btn btn-xs btn-light">
                    <i className="mdi mdi-plus"></i>
                  </Link>
                  <Link to="/#" className="btn btn-xs btn-danger">
                    <i className="mdi mdi-minus"></i>
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

export default TopUsers;
