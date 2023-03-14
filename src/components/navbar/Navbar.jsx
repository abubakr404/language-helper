import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.isLoggedIn.user.name);
  return (
    <div className="navbar">
      <div className="wrapper">
        <h4>{`Hello, ${userName.split(" ")[0]}`}</h4>
        <div className="form-group search">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="theme item" onClick={() => dispatch(themeActions.toggle())}>
          <FontAwesomeIcon icon={faCircleHalfStroke} />
          <span className="title">Toggle Theme</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
