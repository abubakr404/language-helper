import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const List = () => {
  const [wordsData, setWordsData] = useState([]);
  const apiUri = useSelector((state) => state.environment.apiUri);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem("user"));
    const getWords = async () => {
      try {
        const { data } = await axios.get(apiUri + "words", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setWordsData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWords();
  }, []);

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
            <div className="word-card" key={word._id}>
              <div className="info">
                <div className="name">{word.word}</div>
                <span className="title">{word.sentence}</span>
              </div>
              <div className="actions">
                <Link to={`${word._id}`} className="link inverse">
                  Details
                </Link>
                <button className="button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
