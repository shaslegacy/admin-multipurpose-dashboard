import React from "react";
import LocaleData from "../../../../../data/locale.json";
import { Link } from "react-router-dom";

const Locale = () => {
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
        <img src="../assets/images/flags/us.jpg" alt="default-locale" height="16" />
      </Link>
      <div className="dropdown-menu dropdown-menu-right">

        {LocaleData.map((data: any) => (
          <Link to="javascript:void(0);" className="dropdown-item" key={data.id}>
            <img
              src={`../assets/images/flags/${data.icon}`}
              alt={data.name}
              className="mr-1"
              height="12"
            />
            <span className="align-middle">{data.name}</span>
          </Link>
        ))}
      </div>
    </li>
  );
};

export default Locale;
