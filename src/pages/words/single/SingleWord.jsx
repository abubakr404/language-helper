import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Single = () => {
  const { wordId } = useParams();
  const [wordData, setWordData] = useState({ word: "", sentence: "", level: "normal" });
  const apiUri = useSelector((state) => state.environment.apiUri);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem("user"));
    const getWord = async () => {
      try {
        const { data } = await axios.get(apiUri + "words/" + wordId, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setWordData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWord();
  }, []);
  return (
    <section className="content single-word">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <div className="word-container">
          <div className="word-card">
            <div className="info">
              <div className="name">{wordData.word}</div>
              <span className="title">{wordData.sentence}</span>
            </div>
            <div className="actions">
              <button className="button">Edit</button>
              <button className="button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
