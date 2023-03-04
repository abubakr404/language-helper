import { Link, useParams } from "react-router-dom";
// import avatar from "../../../assets/images/avatar.webp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Single = () => {
  const { clientId } = useParams();

  // const clientsData = [
  //   {
  //     id: 1,
  //     name: "ahmed",
  //     projectName: "Ahmed Hassan",
  //     img: avatar,
  //     joinDate: "11/12/2022",
  //     conact: [
  //       { link: "mailto:a@a.com", icon: faMessage },
  //       { link: "#", icon: faFacebookF },
  //       { link: "#", icon: faTwitter },
  //       { link: "tel:+24990421999", icon: faPhone },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "ahmed",
  //     projectName: "Ahmed Hassan",
  //     img: avatar,
  //     joinDate: "11/12/2022",
  //     conact: [
  //       { link: "mailto:a@a.com", icon: faMessage },
  //       { link: "#", icon: faFacebookF },
  //       { link: "#", icon: faTwitter },
  //       { link: "tel:+24990421999", icon: faPhone },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "ahmed",
  //     projectName: "Ahmed Hassan",
  //     img: avatar,
  //     joinDate: "11/12/2022",
  //     conact: [
  //       { link: "mailto:a@a.com", icon: faMessage },
  //       { link: "#", icon: faFacebookF },
  //       { link: "#", icon: faTwitter },
  //       { link: "tel:+24990421999", icon: faPhone },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "ahmed",
  //     projectName: "Ahmed Hassan",
  //     img: avatar,
  //     joinDate: "11/12/2022",
  //     conact: [
  //       { link: "mailto:a@a.com", icon: faMessage },
  //       { link: "#", icon: faFacebookF },
  //       { link: "#", icon: faTwitter },
  //       { link: "tel:+24990421999", icon: faPhone },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "ahmed",
  //     projectName: "Ahmed Hassan",
  //     img: avatar,
  //     joinDate: "11/12/2022",
  //     conact: [
  //       { link: "mailto:a@a.com", icon: faMessage },
  //       { link: "#", icon: faFacebookF },
  //       { link: "#", icon: faTwitter },
  //       { link: "tel:+24990421999", icon: faPhone },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "ahmed",
  //     projectName: "Ahmed Hassan",
  //     img: avatar,
  //     joinDate: "11/12/2022",
  //     conact: [
  //       { link: "mailto:a@a.com", icon: faMessage },
  //       { link: "#", icon: faFacebookF },
  //       { link: "#", icon: faTwitter },
  //       { link: "tel:+24990421999", icon: faPhone },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     name: "ahmed",
  //     projectName: "Ahmed Hassan",
  //     img: avatar,
  //     joinDate: "11/12/2022",
  //     conact: [
  //       { link: "mailto:a@a.com", icon: faMessage },
  //       { link: "#", icon: faFacebookF },
  //       { link: "#", icon: faTwitter },
  //       { link: "tel:+24990421999", icon: faPhone },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     name: "ahmed",
  //     projectName: "Ahmed Hassan",
  //     img: avatar,
  //     joinDate: "11/12/2022",
  //     conact: [
  //       { link: "mailto:a@a.com", icon: faMessage },
  //       { link: "#", icon: faFacebookF },
  //       { link: "#", icon: faTwitter },
  //       { link: "tel:+24990421999", icon: faPhone },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     name: "ahmed",
  //     projectName: "Ahmed Hassan",
  //     img: avatar,
  //     joinDate: "11/12/2022",
  //     conact: [
  //       { link: "mailto:a@a.com", icon: faMessage },
  //       { link: "#", icon: faFacebookF },
  //       { link: "#", icon: faTwitter },
  //       { link: "tel:+24990421999", icon: faPhone },
  //     ],
  //   },
  // ];
  // let client = clientsData.find((clin) => clin.id === +clientId);
  return (
    <section className="content single-client">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <div className="client-container">
          <div className="avatar-container">
            <img src={client.img} alt="" />
          </div>
          <div className="client-details">
            <h2 className="name">{client.name}</h2>
            <ul className="details">
              <li>{client.projectName}</li>
              <li>{client.joinDate}</li>
              <li>
                <ul className="contact">
                  {client.conact.map((con, i) => (
                    <li key={i}>
                      <a className="social-link" href={con.link}>
                        {/* <FontAwesomeIcon icon={con.icon} /> */}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
