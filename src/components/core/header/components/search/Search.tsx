import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <li className="d-none d-lg-block">
      <form className="app-search">
        <div className="app-search-box dropdown">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              id="top-search"
            />
            <div className="input-group-append">
              <button className="btn" type="submit">
                <i className="fe-search"></i>
              </button>
            </div>
          </div>
          <div className="dropdown-menu dropdown-lg" id="search-dropdown">
            {/* item */}
            <div className="dropdown-header noti-title">
              <h5 className="text-overflow mb-2">Found 22 results</h5>
            </div>

            {/* item */}
            <Link to="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-home mr-1"></i>
              <span>Analytics Report</span>
            </Link>

            {/* item */}
            <Link to="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-aperture mr-1"></i>
              <span>How can I help you?</span>
            </Link>

            {/* item */}
            <Link to="javascript:void(0);" className="dropdown-item notify-item">
              <i className="fe-settings mr-1"></i>
              <span>User profile settings</span>
            </Link>

            {/* item */}
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
            </div>

            <div className="notification-list">
              {/* item */}
              <Link
                to="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="media">
                  <img
                    className="d-flex mr-2 rounded-circle"
                    src="../assets/images/users/user-2.jpg"
                    alt="Generic placeholder image"
                    height="32"
                  />
                  <div className="media-body">
                    <h5 className="m-0 font-14">Erwin E. Brown</h5>
                    <span className="font-12 mb-0">UI Designer</span>
                  </div>
                </div>
              </Link>

              {/* item */}
              <Link
                to="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="media">
                  <img
                    className="d-flex mr-2 rounded-circle"
                    src="../assets/images/users/user-5.jpg"
                    alt="Generic placeholder image"
                    height="32"
                  />
                  <div className="media-body">
                    <h5 className="m-0 font-14">Jacob Deo</h5>
                    <span className="font-12 mb-0">Developer</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </li>
  );
};

export default Search;
