import React from "react";
import FeatherIcon from "feather-icons-react";
import "./style.scss";
import sidebarData from "../../../data/leftSidebar.json";
import UserBox from "./components/userBox/UserBox";
import { Link } from "react-router-dom";

interface Badge {
  type?: string;
  value?: string;
  visible?: boolean;
  class?: string;
}

interface SidebarItem {
  name: string;
  icon: string;
  url: string;
  toggle: boolean;
  badge: Badge;
  arrow: boolean;
  submenu: SidebarItem[] | { name: string; url: string }[]; // Adjusted type for submenu
}

interface SidebarSection {
  parent: string;
  menu: SidebarItem[];
}

interface SidebarProps {
  sidebarData: SidebarSection[];
}

const SidebarMenu: React.FC<SidebarProps> = ({ sidebarData }) => {
  return (
    <ul id="side-menu">
      {sidebarData.map((section, index) => (
        <React.Fragment key={index}>
          <li className={`menu-title${index === 0 ? "" : " mt-2"}`}>
            {section.parent}
          </li>
          {section.menu.map((item, itemIndex) => (
            <li key={itemIndex}>
              {item.toggle ? (
                <a href={`#${item.url}`} data-toggle="collapse">
                  <FeatherIcon icon={item.icon} />
                  {item.badge.visible && (
                    <span
                      className={`badge ${
                        item.badge.class && "badge-" + item.badge.class
                      } ${
                        item.badge.type && "badge-" + item.badge.type
                      } float-right`}
                    >
                      {item.badge.value}
                    </span>
                  )}
                  <span>{item.name}</span>
                  {item.arrow && <span className="menu-arrow"></span>}
                </a>
              ) : (
                <Link to={item.url}>
                  <FeatherIcon icon={item.icon} />
                  {item.badge.visible && (
                    <span
                      className={`badge ${
                        item.badge.class && "badge-" + item.badge.class
                      } ${
                        item.badge.type && "badge-" + item.badge.type
                      } float-right`}
                    >
                      {item.badge.value}
                    </span>
                  )}
                  <span>{item.name}</span>
                </Link>
              )}

              {item.toggle &&
                Array.isArray(item.submenu) &&
                item.submenu.length > 0 && (
                  <div className={`collapse`} id={item.url}>
                    <ul className="nav-second-level">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.url}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
};
const LeftSidebar = () => {
  const leftSidebarItem: SidebarSection[] = sidebarData;

  return (
    <div className="left-side-menu">
      <div className="h-100" data-simplebar>
        {/*  User box  */}
        <UserBox />

        {/* Sidemenu */}
        <div id="sidebar-menu">
          <SidebarMenu sidebarData={leftSidebarItem} />
        </div>
        {/* End Sidebar */}

        <div className="clearfix"></div>
      </div>
      {/* Sidebar -left */}
    </div>
  );
};

export default LeftSidebar;
