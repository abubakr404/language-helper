import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faRightFromBracket,
  faCircleUser,
  faMoneyCheck,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { authActions } from "../../store/auth-slice";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { environmentActions } from "../../store/environment-slice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarActive = useSelector((state) => state.environment.isSidebarActive);

  return (
    <div className={isSidebarActive ? "sidebar-container active" : "sidebar-container"}>
      <div className="logo">
        <h1>Languages Helper</h1>
        <button
          className="menu-bar"
          onClick={() => dispatch(environmentActions.toggleSidebar())}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faGauge} />
              <span>Home</span>
            </NavLink>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <NavLink to="words">
              <FontAwesomeIcon icon={faMoneyCheck} />
              <span>My Words</span>
            </NavLink>
            <span className="tooltip">My Words</span>
          </li>
          <li>
            <NavLink to="profile">
              <FontAwesomeIcon icon={faCircleUser} />
              <span>Profile</span>
            </NavLink>
            <span className="tooltip">Profile</span>
          </li>
        </ul>
      </nav>
      <div className="options">
        <ul className="options-list">
          <li className="link item" onClick={() => dispatch(authActions.logout())}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Logout</span>
          </li>
          <span className="tooltip">Logout</span>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
