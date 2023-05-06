import { faEdit, faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../../../store/notification-slice";
import { environmentActions } from "../../../store/environment-slice";
import axios from "axios";

const Single = () => {
  const { wordId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wordData, setWordData] = useState({ word: "", sentence: "", level: "normal" });
  const [isEditable, setIsEditable] = useState(false);
  const apiUri = useSelector((state) => state.environment.apiUri);
  const { token } = JSON.parse(localStorage.getItem("user"));
  const inputRef = useRef(null);

  const deleteWord = async () => {
    try {
      await axios.delete(apiUri + "words/" + wordId, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch(environmentActions.wordsFetch());
      dispatch(notificationActions.close());
      dispatch(notificationActions.addMessage("deleted successfully"));
      dispatch(notificationActions.open());
      navigate(-1);
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

  const updateWord = async () => {
    try {
      const { data } = await axios.patch(apiUri + "words/" + wordId, wordData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch(environmentActions.wordsFetch());
      dispatch(notificationActions.close());
      dispatch(
        notificationActions.addMessage(
          `The word "${data.data.word.word}" was updated successfully`
        )
      );
      dispatch(notificationActions.open());
      navigate(-1);
    } catch (error) {
      console.log(error);
      dispatch(notificationActions.close());
      dispatch(
        notificationActions.addMessage(
          error.response ? error.response.data.msg : error.message
        )
      );
      dispatch(notificationActions.open());
    }
  };

  useEffect(() => {
    isEditable && inputRef.current.focus();
  }, [isEditable]);

  useEffect(() => {
    const getWord = async () => {
      try {
        const { data } = await axios.get(apiUri + "words/" + wordId, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setWordData(data);
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
    if (localStorage.getItem("words")) {
      const words = JSON.parse(localStorage.getItem("words"));
      setWordData(words.find((word) => word._id === wordId));
    } else {
      getWord();
    }
  }, []);

  return (
    <section className="content single-word">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
          <button onClick={() => deleteWord()} className="button icon">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
        <div className="word-container">
          <div className="info">
            <div className="info-group">
              Word: <h3>{wordData.word}</h3>
            </div>
            <div className="info-group">
              Difficult Level:
              <select
                name="level"
                value={wordData.level}
                onChange={(e) =>
                  setWordData((prevData) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option value="esay">Esay</option>
                <option value="normal">Normal</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="info-group">
              Example of word use:
              <div className="sentence-group">
                <input
                  ref={inputRef}
                  type="text"
                  name="sentence"
                  className={isEditable ? "sentence editable" : "sentence"}
                  value={wordData.sentence}
                  disabled={!isEditable}
                  onChange={(e) =>
                    setWordData((prevData) => ({
                      ...prevData,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  placeholder="Enter example sentence"
                />
                <button
                  className="button icon"
                  onClick={() => setIsEditable((prevData) => !prevData)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => updateWord()} className="button save">
          <FontAwesomeIcon icon={faSave} />
          <span>save</span>
        </button>
      </div>
    </section>
  );
};

export default Single;
