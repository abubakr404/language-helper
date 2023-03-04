import {
  faArrowRightToBracket,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <div className="page login">
      <section className="content">
        <div className="content-container">
          <form className="project-form">
            <fieldset className="basic">
              <div className="form-group">
                <label>Email Address</label>
                <div className="input">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input type="email" name="email" placeholder="Email Address" />
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="input">
                  <FontAwesomeIcon icon={faLock} />
                  <input type="password" name="password" placeholder="Password" />
                </div>
              </div>
            </fieldset>
            <div className="actions">
              <button className="submit">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                <span className="title">login</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
