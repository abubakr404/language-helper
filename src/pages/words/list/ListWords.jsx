import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
const List = () => {
  const wordsData = [
    {
      id: 1,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 2,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 3,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 4,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 5,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 6,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 7,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 8,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 9,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
  ];
  return (
    <section className="content words">
      <div className="content-container">
        <div className="content-head">
          <h2 className="main-title">Words List</h2>
          <Link to="new-word" className="link">
            New Word
          </Link>
        </div>
        <div className="words-container">
          {wordsData.map((word) => (
            <div className="word-card" key={word.id}>
              <div className="avatar-container"></div>
              <div className="info">
                <div className="name">{word.name}</div>
                <span className="title">{word.projectName}</span>
              </div>
              <ul className="contact">
                {word.conact.map((con, i) => (
                  <li key={i}>
                    <a className="social-link" href={con.link}>
                      <FontAwesomeIcon icon={con.icon} />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="actions">
                <Link to={`${word.id}`} className="link inverse">
                  See More
                </Link>
                <button className="button danger">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
