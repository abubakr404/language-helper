import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faBookAtlas, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const New = () => {
  const [wordData, setWordData] = useState({ word: "", sentence: "", level: "normal" });
  const [wordError, setWordError] = useState("");
  const apiUri = useSelector((state) => state.environment.apiUri);
  const { token } = JSON.parse(localStorage.getItem("user"));

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
    <section className="content">
      <div className="content-container">
        <div className="content-head">
          <h2 className="main-title">New Word</h2>
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <div className="word-form">
          <form onSubmit={handleWordSubmit}>
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
      </div>
    </section>
  );
};

export default New;
