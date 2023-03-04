// import avatar from "../../../assets/images/avatar.webp";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faPhone,
//   faFolder,
//   faEnvelope,
//   faPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const New = () => {
  return (
    <section className="content new-client">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <form className="client-form">
          <fieldset className="clinet-info">
            <legend>Client Information</legend>
            <div className="form-group">
              <label className="name">Client Name</label>
              <div className="input">
                {/* <FontAwesomeIcon icon={faUser} /> */}
                <input type="text" name="name" placeholder="Name" />
              </div>
            </div>
            <div className="form-group">
              <label>Client Project</label>
              <div className="input">
                {/* <FontAwesomeIcon icon={faFolder} /> */}
                <input type="text" name="client-project" placeholder="Project name" />
              </div>
            </div>
            <div className="form-group">
              <label>Client Email</label>
              <div className="input">
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                <input type="email" name="email" placeholder="Email address" />
              </div>
            </div>
            <div className="form-group">
              <label>Client Phone</label>
              <div className="input">
                {/* <FontAwesomeIcon icon={faPhone} /> */}
                <input type="text" name="phone" placeholder="Phone number" />
              </div>
            </div>
            <div className="form-group">
              <label>Client Facebook</label>
              <div className="input">
                {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                <input type="text" name="facebook" placeholder="Facebook Link" />
              </div>
            </div>
            <div className="form-group">
              <label>Client Twitter</label>
              <div className="input">
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
                <input type="text" name="twitter" placeholder="Twitter Link" />
              </div>
            </div>
          </fieldset>
          <fieldset className="client-image">
            <legend>Client Image</legend>
            <div className="form-group">
              <label htmlFor="client">
                <input type="file" name="clientImg" id="client" />
                {/* <img src={avatar} name="clientImage" /> */}
              </label>
            </div>
          </fieldset>
          <div className="actions">
            <button className="submit">
              {/* <FontAwesomeIcon icon={faPlus} /> */}
              <span className="title">Add Client</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default New;
