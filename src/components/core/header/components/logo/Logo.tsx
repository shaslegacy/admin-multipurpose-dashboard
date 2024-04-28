import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo-box">
        <Link to="/admin" className="logo logo-dark text-center">
            <span className="logo-sm">
                {/* <img src="../assets/images/logo-sm.png" alt="" height="22" /> */}
                <span className="logo-lg-text-light">Legacy</span>
            </span>
            <span className="logo-lg">
                {/* <img src="../assets/images/logo-dark.png" alt="" height="20" /> */}
                <span className="logo-lg-text-light">SL</span>
            </span>
        </Link>

        <Link to="/admin" className="logo logo-light text-center">
            <span className="logo-sm">
                {/* <img src="../assets/images/logo-sm.png" alt="" height="22" /> */}
                <span className="logo-lg-text-dark">Legacy</span>
            </span>
            <span className="logo-lg">
                <img src="../assets/images/logo_s.png" alt="" height="60" />
                <span className="logo-lg-text-dark">Legacy</span>
            </span>
        </Link>
    </div>
  )
}

export default Logo