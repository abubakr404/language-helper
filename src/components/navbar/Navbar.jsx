import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import Search from "../search/Search";

const Navbar = () => {
  const dispatch = useDispatch();
  const userName = JSON.parse(localStorage.getItem("userInfo")).name || "";
  const localWords = JSON.parse(localStorage.getItem("words")) || [];

  return (
    <div className="navbar">
      <div className="wrapper">
        <h4>{`Hello, ${userName.split(" ")[0] || userName}`}</h4>
        <Search allData={localWords} filterKeys={["word"]} />
        <div className="theme item" onClick={() => dispatch(themeActions.toggle())}>
          <FontAwesomeIcon icon={faCircleHalfStroke} />
          <span className="title">Toggle Theme</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
