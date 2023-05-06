import { Link } from "react-router-dom";
import Word from "../../../components/word/Word";

const New = () => {
  return (
    <section className="content">
      <div className="content-container">
        <div className="content-head">
          <h2 className="main-title">New Word</h2>
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <Word />
      </div>
    </section>
  );
};

export default New;
