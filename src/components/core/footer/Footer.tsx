import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
                2023 - {new Date().getFullYear()} &copy; Admin Dashboard by <Link to="#">Shas Legacy</Link> 
            </div>
            <div className="col-md-6">
                <div className="text-md-right footer-links d-none d-sm-block">
                    <Link to="javascript:void(0);">About Us</Link>
                    <Link to="javascript:void(0);">Help</Link>
                    <Link to="javascript:void(0);">Contact Us</Link>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer