import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { base_url } from '../../../../../utils/baseUrl';
// import { config } from 'src/utils/axiosconfig';

const Profile = () => {
    const authState = useSelector((state) => state);
    const { user } = authState.auth;

    const handleLogout = async () => {
        try {
        //   await axios.get(`${base_url}user/logout`, config);
          localStorage.removeItem('user');
          window.location.href = '/logout';
        } catch (error) {
          console.error('Logout failed', error);
        }
      };

  return (
    <li className="dropdown notification-list topbar-dropdown">
        <Link className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src="../assets/images/users/user-1.jpg" alt={user.firstname + " " + user.lastname} className="rounded-circle" />
            <span className="pro-user-name ml-1">
                {user && user.firstname + " " + user.lastname}<i className="mdi mdi-chevron-down"></i> 
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

            <Link onClick={handleLogout} className="dropdown-item notify-item">
                <i className="fe-log-out"></i>
                <span>Logout</span>
            </Link>

        </div>
    </li>
  )
}

export default Profile