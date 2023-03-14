import {
  faBarsStaggered,
  faKeyboard,
  faBookAtlas,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const [wordData, setWordData] = useState({ word: "", sentence: "", level: "normal" });
  const [wordError, setWordError] = useState("");
  const [randomWord, setRandomWord] = useState("");
  const [getWordError, setGetWordError] = useState("");
  const apiUri = useSelector((state) => state.environment.apiUri);
  const { token } = JSON.parse(localStorage.getItem("user"));

  const getRandomWord = async () => {
    try {
      const { data } = await axios(apiUri + "general-words", {
        headers: { authorization: `Bearer ${token}` },
      });
      setRandomWord(data.data[0].word);
    } catch (error) {
      setGetWordError(error.response.data.msg);
    }
  };

  const handleWordSubmit = async (e) => {
    e.preventDefault();
    try {
      const word = await axios.post(apiUri + "words", wordData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setWordData({ word: "", sentence: "", level: "normal" });
      setWordError(JSON.stringify(word.data));
    } catch (error) {
      console.log(error);
      setWordError(error.response.data.msg);
    }
  };

  return (
    <section className="content dashboard">
      <div className="panels">
        <div className="panels-group">
          <div className="word-form">
            <form onSubmit={handleWordSubmit}>
              <h3 className="main-title">Quick Add New Word</h3>
              <div className="form-group">
                <FontAwesomeIcon icon={faBookAtlas} />
                <input
                  type="text"
                  name="word"
                  value={wordData.word}
                  onChange={(e) =>
                    setWordData((prevData) => ({
                      ...prevData,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  placeholder="Enter the new word"
                />
              </div>
              <div className="form-group">
                <FontAwesomeIcon icon={faBarsStaggered} />
                <input
                  type="text"
                  name="sentence"
                  value={wordData.sentence}
                  onChange={(e) =>
                    setWordData((prevData) => ({
                      ...prevData,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  placeholder="Enter example sentence"
                />
              </div>
              <div className="form-group">
                <label className="item" htmlFor="esayLevel">
                  <input
                    type="radio"
                    name="level"
                    id="esayLevel"
                    onChange={(e) =>
                      setWordData((prevData) => ({
                        ...prevData,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    checked={wordData.level === "esay"}
                    value="esay"
                  />
                  <span>Esay</span>
                </label>
                <label className="item" htmlFor="normalLevel">
                  <input
                    type="radio"
                    name="level"
                    id="normalLevel"
                    onChange={(e) =>
                      setWordData((prevData) => ({
                        ...prevData,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    checked={wordData.level === "normal"}
                    value="normal"
                  />
                  <span>Normal</span>
                </label>
                <label className="item" htmlFor="hardLevel">
                  <input
                    type="radio"
                    name="level"
                    id="hardLevel"
                    onChange={(e) =>
                      setWordData((prevData) => ({
                        ...prevData,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    checked={wordData.level === "hard"}
                    value="hard"
                  />
                  <span>Hard</span>
                </label>
              </div>
              {wordError && <div className="form-group error">{wordError}</div>}
              <button className="button">
                <FontAwesomeIcon icon={faPlus} />
                Add Word
              </button>
            </form>
          </div>
          <div className="content-container">
            <div className="content-head">
              <h2 className="main-title">My Hard Words</h2>
            </div>
            <ul>
              <li>ali</li>
              <li>ahmed</li>
              <li>abass</li>
              <li>yahya</li>
              <li>lofe</li>
              <li>mohamed</li>
              <li>aseel</li>
              <li>abubakr</li>
            </ul>
          </div>
          <div className="word-box">
            <h3 className="main-title">Random Word</h3>
            <div className="word">{randomWord}</div>
            <button className="button" onClick={() => getRandomWord()}>
              <FontAwesomeIcon icon={faKeyboard} />
              Get Random Word
            </button>
            {getWordError && <div className="error">{getWordError}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
