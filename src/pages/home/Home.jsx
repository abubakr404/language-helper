import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store";

function Home() {
  const currentMode = useSelector((state) => state.currentMode);
  const counterDispatch = useDispatch();
  const toggle = () => counterDispatch(actions.toggle());

  return (
    <main className="page">
      {/* <aside className="sidebar"><Sidebar /></aside> */}
      <section className="page-content">
        <div className="home-container">
          {/* <div className="theme-controller">
          <div className="value">{currentMode ? "toggled" : "normal"}</div>
          <div className="controllers">
            <button onClick={toggle}>toggle</button>
          </div>
        </div> */}
          <h1 className="display">
            Languages Bank, The Strong Tool to Help You to Learn Any Languages
          </h1>
          <div className="actions">
            <Link to="signup" className="link">
              Get Strated
            </Link>
            <Link to="login" className="link">
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
