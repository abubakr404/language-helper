import {
  faArrowRightToBracket,
  faEnvelope,
  faLock,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { notificationActions } from "../../store/notification-slice";

function Home() {
  const [togglePanel, setTogglePanel] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" });
  const apiUri = useSelector((state) => state.environment.apiUri);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (prevData, ele) => ({
    ...prevData,
    [ele.name]: ele.value,
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(apiUri + "auth/login", { ...loginData });
      const { data } = user;
      dispatch(authActions.login(data));
      navigate("/");
    } catch (error) {
      dispatch(notificationActions.close());
      dispatch(
        notificationActions.addMessage(
          error.response ? error.response.data.msg : error.message
        )
      );
      dispatch(notificationActions.open());
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(apiUri + "auth/register", { ...signUpData });
      const { data } = user;
      dispatch(notificationActions.close());
      dispatch(notificationActions.addMessage("registered successfully"));
      dispatch(notificationActions.open());
      dispatch(authActions.login(data));
      navigate("/");
    } catch (error) {
      dispatch(notificationActions.close());
      dispatch(
        notificationActions.addMessage(
          error.response ? error.response.data.msg : error.message
        )
      );
      dispatch(notificationActions.open());
    }
  };
  return (
    <main className="home-page">
      <div className={togglePanel ? "home-container toggle-panel" : "home-container"}>
        <div className="form-container sign-up">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className="form-group">
              <FontAwesomeIcon icon={faUserAlt} />
              <input
                type="text"
                value={signUpData.name}
                name="name"
                onChange={(e) =>
                  setSignUpData((prevData) => handleChange(prevData, e.target))
                }
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="email"
                value={signUpData.email}
                name="email"
                onChange={(e) =>
                  setSignUpData((prevData) => handleChange(prevData, e.target))
                }
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                value={signUpData.password}
                name="password"
                onChange={(e) =>
                  setSignUpData((prevData) => handleChange(prevData, e.target))
                }
                placeholder="Password"
              />
            </div>
            <button className="submit">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleLoginSubmit}>
            <h1>Sign in</h1>
            <div className="form-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="email"
                value={loginData.email}
                name="email"
                onChange={(e) =>
                  setLoginData((prevData) => handleChange(prevData, e.target))
                }
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                value={loginData.password}
                name="password"
                onChange={(e) =>
                  setLoginData((prevData) => handleChange(prevData, e.target))
                }
                placeholder="Password"
              />
            </div>
            <a href="#" className="text-link">
              Forgot your password?
            </a>
            <button className="submit">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="button ghost" onClick={(e) => setTogglePanel(false)}>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Words Bank</h1>
              <p>Enter your personal details and start learn journey with us</p>
              <button className="button ghost" onClick={(e) => setTogglePanel(true)}>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
