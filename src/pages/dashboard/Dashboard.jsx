import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notificationActions } from "../../store/notification-slice";
import Word from "../../components/word/Word";
import axios from "axios";
import Pagination from "../../components/pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const [hardWordsInPage, setHardWordsInPage] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const apiUri = useSelector((state) => state.environment.apiUri);
  const { token } = JSON.parse(localStorage.getItem("user"));
  const localWords =
    JSON.parse(localStorage.getItem("words")).filter((word) => word.level === "hard") ||
    [];

  const getRandomWord = async () => {
    try {
      const { data } = await axios(apiUri + "general-words", {
        headers: { authorization: `Bearer ${token}` },
      });
      setRandomWord(data.data[Math.floor(Math.random() * data.data.length)].word);
    } catch (error) {
      dispatch(notificationActions.close());
      dispatch(
        notificationActions.addMessage(
          error.response ? error.response.data.msg : error.message
        )
      );
      dispatch(notificationActions.open());
    }
  };

  return (
    <section className="content dashboard">
      <div className="panels">
        <div className="panels-group">
          <div className="add-word">
            <h3 className="main-title">Quick Add New Word</h3>
            <Word />
          </div>
          <div className="content-container hard-words">
            <div className="content-head">
              <h2 className="main-title">My Hard Words</h2>
            </div>
            <ul className="words-group">
              {hardWordsInPage.map((hardword) => (
                <li key={hardword._id} className="name">
                  <Link to={`words/${hardword._id}`}>{hardword.word}</Link>
                </li>
              ))}
            </ul>
            <Pagination
              setItemsInPage={setHardWordsInPage}
              itemPerPage={15}
              listItems={localWords}
            />
          </div>
          <div className="word-box">
            <h3 className="main-title">Random Word</h3>
            <div className="word">{randomWord}</div>
            <button className="button" onClick={() => getRandomWord()}>
              <FontAwesomeIcon icon={faKeyboard} />
              Get Random Word
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
