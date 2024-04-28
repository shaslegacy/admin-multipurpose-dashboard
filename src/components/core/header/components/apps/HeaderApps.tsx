import React from "react";
import { Link } from "react-router-dom";

const HeaderApps = () => {
  return (
    <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
      <Link
        className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
        data-toggle="dropdown"
        to="#"
        role="button"
        aria-haspopup="false"
        aria-expanded="false"
      >
        <i className="fe-grid noti-icon"></i>
      </Link>
      <div className="dropdown-menu dropdown-lg dropdown-menu-right">
        <div className="p-lg-1">
          <div className="row no-gutters">
            <div className="col">
              <Link className="dropdown-icon-item" to="#">
                <img src="../assets/images/brands/slack.png" alt="slack" />
                <span>Slack</span>
              </Link>
            </div>
            <div className="col">
              <Link className="dropdown-icon-item" to="#">
                <img src="../assets/images/brands/github.png" alt="Github" />
                <span>GitHub</span>
              </Link>
            </div>
            <div className="col">
              <Link className="dropdown-icon-item" to="#">
                <img
                  src="../assets/images/brands/dribbble.png"
                  alt="dribbble"
                />
                <span>Dribbble</span>
              </Link>
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col">
              <Link className="dropdown-icon-item" to="#">
                <img
                  src="../assets/images/brands/bitbucket.png"
                  alt="bitbucket"
                />
                <span>Bitbucket</span>
              </Link>
            </div>
            <div className="col">
              <Link className="dropdown-icon-item" to="#">
                <img src="../assets/images/brands/dropbox.png" alt="dropbox" />
                <span>Dropbox</span>
              </Link>
            </div>
            <div className="col">
              <Link className="dropdown-icon-item" to="#">
                <img src="../assets/images/brands/g-suite.png" alt="G Suite" />
                <span>G Suite</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HeaderApps;
