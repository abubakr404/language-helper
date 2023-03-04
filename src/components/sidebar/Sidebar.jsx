import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faEnvelope,
  faUsers,
  faFolder,
  faCircleUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <span>Languages Helper</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faGauge} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="words">
              <FontAwesomeIcon icon={faFolder} />
              <span>Words</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="profile">
              <FontAwesomeIcon icon={faCircleUser} />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="settings">
              <FontAwesomeIcon icon={faGear} />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
