import React from 'react';
import '../header/style.scss';
import Logo from './components/logo/Logo';
import Profile from './components/profile/Profile';
import Notification from './components/notification/Notification';
import Locale from './components/locale/Locale';
import HeaderApps from './components/apps/HeaderApps';
import Search from './components/search/Search';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="navbar-custom">
                <div className="container-fluid">
                    <ul className="list-unstyled topnav-menu float-right mb-0">
                        <Search />
                        <li className="dropdown d-inline-block d-lg-none">
                        <Link
                            className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                            data-toggle="dropdown"
                            to="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <i className="fe-search noti-icon"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                            <form className="p-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search ..."
                                aria-label="Recipient's username"
                            />
                            </form>
                        </div>
                        </li>
                        <li className="dropdown d-none d-lg-inline-block">
                            <Link className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="fullscreen" to="#">
                                <i className="fe-maximize noti-icon"></i>
                            </Link>
                        </li>
    
    
                        {/* apps */}
                        <HeaderApps />

                        <Locale />

                        <Notification />
    
                        <Profile />
                        <li className="dropdown notification-list">
                            <Link to="javascript:void(0);" className="nav-link right-bar-toggle waves-effect waves-light">
                                <i className="fe-settings noti-icon"></i>
                            </Link>
                        </li>
    
                    </ul>
    
                    {/* LOGO */}
                    <Logo />
    
                    <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                        <li>
                            <button className="button-menu-mobile waves-effect waves-light">
                                <i className="fe-menu"></i>
                            </button>
                        </li>

                        <li>
                            {/* Mobile menu toggle (Horizontal Layout) */}
                            <Link to="javascript:void(0)" className="navbar-toggle nav-link" data-toggle="collapse" data-target="#topnav-menu-content">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                            {/* End mobile menu toggle */}
                        </li>   
            
                        <li className="dropdown d-none d-xl-block">
                            <Link className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                                Create New
                                <i className="mdi mdi-chevron-down"></i> 
                            </Link>
                            <div className="dropdown-menu">
                                {/* item */}
                                <Link to="javascript:void(0);" className="dropdown-item">
                                    <i className="fe-briefcase mr-1"></i>
                                    <span>New Projects</span>
                                </Link>
    
                                {/*  item */}
                                <Link to="javascript:void(0);" className="dropdown-item">
                                    <i className="fe-user mr-1"></i>
                                    <span>Create Users</span>
                                </Link>
    
                                {/*  item */}
                                <Link to="javascript:void(0);" className="dropdown-item">
                                    <i className="fe-bar-chart-line- mr-1"></i>
                                    <span>Revenue Report</span>
                                </Link>
    
                                {/*  item */}
                                <Link to="javascript:void(0);" className="dropdown-item">
                                    <i className="fe-settings mr-1"></i>
                                    <span>Settings</span>
                                </Link>
    
                                <div className="dropdown-divider"></div>
    
                                {/*  item */}
                                <Link to="javascript:void(0);" className="dropdown-item">
                                    <i className="fe-headphones mr-1"></i>
                                    <span>Help & Support</span>
                                </Link>
    
                            </div>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>
  )
}

export default Header