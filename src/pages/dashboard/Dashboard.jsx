// import Widget from "../../components/widget/Widget";
import Table from "../../components/table/table";
import { Link } from "react-router-dom";

const Home = () => {
  const massagesData = [
    {
      id: 1,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      get actions() {
        return (
          <div className="actions">
            <Link to={`messages/${this.id}`} className="link inverse">
              view
            </Link>
            <button className="button danger">delete</button>
          </div>
        );
      },
    },
    {
      id: 2,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      get actions() {
        return (
          <div className="actions">
            <Link to={`messages/${this.id}`} className="link inverse">
              view
            </Link>
            <button className="button danger">delete</button>
          </div>
        );
      },
    },
    {
      id: 3,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      get actions() {
        return (
          <div className="actions">
            <Link to={`messages/${this.id}`} className="link inverse">
              view
            </Link>
            <button className="button danger">delete</button>
          </div>
        );
      },
    },
    {
      id: 4,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      get actions() {
        return (
          <div className="actions">
            <Link to={`messages/${this.id}`} className="link inverse">
              view
            </Link>
            <button className="button danger">delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <section className="content dashboard">
      <div className="widgets">
        {/* <Widget />
        <Widget />
        <Widget /> */}
      </div>
      <div className="content-container">
        <div className="content-head">
          <h2 className="main-title">Latest Messages</h2>
          <Link to="messages" className="link">
            See All
          </Link>
        </div>
        <Table tableHeaders={Object.keys(massagesData[0])} tableRows={massagesData} />
      </div>
    </section>
  );
};

export default Home;
