import { faBarsStaggered, faBookAtlas, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { notificationActions } from "../../store/notification-slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

const Word = () => {
  const dispatch = useDispatch();
  const [wordData, setWordData] = useState({ word: "", sentence: "", level: "normal" });
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
      dispatch(notificationActions.close());
      dispatch(
        notificationActions.addMessage(
          `The word "${word.data.word}" was added successfully`
        )
      );
      dispatch(notificationActions.open());
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
        <button className="button">
          <FontAwesomeIcon icon={faPlus} />
          Add Word
        </button>
      </form>
    </div>
  );
};

export default Word;
