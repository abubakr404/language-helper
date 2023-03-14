import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faRightFromBracket,
  faCircleUser,
  faGear,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";
import { authActions } from "../../store/auth-slice";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar-container">
      <div className="logo">
        <Link to="/" className="active">
          <span>Languages Helper</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faGauge} />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="words">
              <FontAwesomeIcon icon={faMoneyCheck} />
              <span>My Words</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="profile">
              <FontAwesomeIcon icon={faCircleUser} />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="options">
        <ul className="options-list">
          <li className="link item" onClick={() => dispatch(authActions.logout())}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
