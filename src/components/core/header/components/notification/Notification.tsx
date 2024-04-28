import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <li className="dropdown notification-list topbar-dropdown">
      <Link
        className="nav-link dropdown-toggle waves-effect waves-light"
        data-toggle="dropdown"
        to="#"
        role="button"
        aria-haspopup="false"
        aria-expanded="false"
      >
        <i className="fe-bell noti-icon"></i>
        <span className="badge badge-danger rounded-circle noti-icon-badge">
          9
        </span>
      </Link>
      <div className="dropdown-menu dropdown-menu-right dropdown-lg">
        {/* item */}
        <div className="dropdown-item noti-title">
          <h5 className="m-0">
            <span className="float-right">
              <Link to="#" className="text-dark">
                <small>Clear All</small>
              </Link>
            </span>
            Notification
          </h5>
        </div>

        <div className="noti-scroll" data-simplebar>
          {/* item */}
          <Link
            to="javascript:void(0);"
            className="dropdown-item notify-item active"
          >
            <div className="notify-icon">
              <img
                src="../assets/images/users/user-1.jpg"
                className="img-fluid rounded-circle"
                alt=""
              />{" "}
            </div>
            <p className="notify-details">Cristina Pride</p>
            <p className="text-muted mb-0 user-msg">
              <small>Hi, How are you? What about our next meeting</small>
            </p>
          </Link>

          {/* item */}
          <Link to="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon bg-primary">
              <i className="mdi mdi-comment-account-outline"></i>
            </div>
            <p className="notify-details">
              Caleb Flakelar commented on Admin
              <small className="text-muted">1 min ago</small>
            </p>
          </Link>

          {/* item */}
          <Link to="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon">
              <img
                src="../assets/images/users/user-4.jpg"
                className="img-fluid rounded-circle"
                alt=""
              />{" "}
            </div>
            <p className="notify-details">Karen Robinson</p>
            <p className="text-muted mb-0 user-msg">
              <small>Wow ! this admin looks good and awesome design</small>
            </p>
          </Link>

          {/* item */}
          <Link to="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon bg-warning">
              <i className="mdi mdi-account-plus"></i>
            </div>
            <p className="notify-details">
              New user registered.
              <small className="text-muted">5 hours ago</small>
            </p>
          </Link>

          {/* item */}
          <Link to="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon bg-info">
              <i className="mdi mdi-comment-account-outline"></i>
            </div>
            <p className="notify-details">
              Caleb Flakelar commented on Admin
              <small className="text-muted">4 days ago</small>
            </p>
          </Link>

          {/* item */}
          <Link to="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon bg-secondary">
              <i className="mdi mdi-heart"></i>
            </div>
            <p className="notify-details">
              Carlos Crouch liked
              <b>Admin</b>
              <small className="text-muted">13 days ago</small>
            </p>
          </Link>
        </div>

        {/* All */}
        <Link
          to="javascript:void(0);"
          className="dropdown-item text-center text-primary notify-item notify-all"
        >
          View all
          <i className="fe-arrow-right"></i>
        </Link>
      </div>
    </li>
  );
};

export default Notification;
