import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page error">
      <section className="content">
        <div className="content-container">
          <div className="message">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/" className="link">
              Go Home Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
