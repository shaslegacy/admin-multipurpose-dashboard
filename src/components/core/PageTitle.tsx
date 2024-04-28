import React from "react";
import './style.scss';
import { Link } from "react-router-dom";

interface PageTitleProps {
  title?: string
}
const PageTitle: React.FC<PageTitleProps>  = ({ title }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box">
          <div className="page-title-right">
            <form className="form-inline">
              <div className="form-group">
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    className="form-control border"
                    id="dash-daterange"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-blue border-blue text-white">
                      <i className="mdi mdi-calendar-range"></i>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/#" className="btn btn-blue btn-sm ml-2">
                <i className="mdi mdi-autorenew"></i>
              </Link>
              <Link to="/#" className="btn btn-blue btn-sm ml-1">
                <i className="mdi mdi-filter-variant"></i>
              </Link>
            </form>
          </div>
          <h4 className="page-title">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
