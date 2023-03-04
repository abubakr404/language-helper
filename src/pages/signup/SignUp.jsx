import { useState } from "react";
import {
  faArrowRightToBracket,
  faEnvelope,
  faLock,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the data to a server or perform any other action
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="page signup">
      <section className="content">
        <h2>SignUp</h2>
        <div className="content-container">
          <form onSubmit={handleSubmit} className="project-form">
            <fieldset className="basic">
              <div className="form-group">
                <label>Name</label>
                <div className="input">
                  <FontAwesomeIcon icon={faUserAlt} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <div className="input">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="input">
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
              </div>
            </fieldset>
            <div className="actions">
              <button className="submit">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                <span className="title">Register</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
