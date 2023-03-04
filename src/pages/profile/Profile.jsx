import { Link } from "react-router-dom";
// import avatar from "../../assets/images/avatar.webp";

const Single = () => {
  return (
    <section className="content profile">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <div className="project">
          {/* <img src={avatar} alt="" className="avatar" /> */}
          <div className="info">
            <div className="name">ahmed ali</div>
            <div className="email">ahemd@gmail.com</div>
          </div>
        </div>
        <div className="messages-container">
          <div className="message">
            <span className="text">kdljsldkjkdsljkdsklfjlsdkfjdskajsdklfjaskj</span>
            <span className="date">8:30PM 10/2/2022</span>
          </div>
          <div className="message">
            <span className="text">kdljsldkjkdsljkdsklfjlsdkfjdskajsdklfjaskj</span>
            <span className="date">8:30PM 10/2/2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
