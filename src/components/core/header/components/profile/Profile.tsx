import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <li className="dropdown notification-list topbar-dropdown">
        <Link className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src="../assets/images/users/user-1.jpg" alt="user-image" className="rounded-circle" />
            <span className="pro-user-name ml-1">
                Shashi <i className="mdi mdi-chevron-down"></i> 
            </span>
        </Link>
        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

            <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
            </div>

            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                <i className="fe-user"></i>
                <span>My Account</span>
            </Link>

            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                <i className="fe-settings"></i>
                <span>Settings</span>
            </Link>

            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                <i className="fe-lock"></i>
                <span>Lock Screen</span>
            </Link>

            <div className="dropdown-divider"></div>

            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                <i className="fe-log-out"></i>
                <span>Logout</span>
            </Link>

        </div>
    </li>
  )
}

export default Profile